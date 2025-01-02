import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { securityConfig } from '../config/security';
import logger from '../utils/logger';
import { HIPAACompliance } from '../security/hipaa/compliance';

export const configureSecurity = (app: any) => {
  // Apply Helmet security headers
  app.use(helmet(securityConfig.helmet));

  // Configure CORS
  app.use(cors(securityConfig.cors));

  // Apply rate limiting
  app.use(rateLimit(securityConfig.rateLimit));

  // Add custom security headers
  app.use((req: Request, res: Response, next: NextFunction) => {
    Object.entries(securityConfig.headers).forEach(([header, value]) => {
      res.setHeader(header, value);
    });
    next();
  });

  // Add HIPAA compliance middleware
  if (securityConfig.hipaa.enableAuditLogging) {
    app.use(HIPAACompliance.middleware());
  }

  // Add XSS prevention middleware
  app.use(preventXSS);

  // Add SQL injection prevention middleware
  app.use(preventSQLInjection);

  // Add request validation middleware
  app.use(validateRequests);
};

const preventXSS = (req: Request, res: Response, next: NextFunction) => {
  const sanitizeValue = (value: any): any => {
    if (typeof value === 'string') {
      return value
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocols
        .replace(/on\w+=/gi, '') // Remove event handlers
        .replace(/data:/gi, '') // Remove data: protocols
        .trim();
    }
    if (typeof value === 'object' && value !== null) {
      return Object.keys(value).reduce((acc: any, key) => {
        acc[key] = sanitizeValue(value[key]);
        return acc;
      }, Array.isArray(value) ? [] : {});
    }
    return value;
  };

  req.body = sanitizeValue(req.body);
  req.query = sanitizeValue(req.query);
  req.params = sanitizeValue(req.params);

  next();
};

const preventSQLInjection = (req: Request, res: Response, next: NextFunction) => {
  const sqlInjectionPattern = /('(''|[^'])*')|((SELECT|INSERT|UPDATE|DELETE|DROP|UNION|JOIN)\b)/i;

  const checkForSQLInjection = (value: any): boolean => {
    if (typeof value === 'string') {
      return sqlInjectionPattern.test(value);
    }
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).some(v => checkForSQLInjection(v));
    }
    return false;
  };

  if (
    checkForSQLInjection(req.body) ||
    checkForSQLInjection(req.query) ||
    checkForSQLInjection(req.params)
  ) {
    logger.warn('SQL injection attempt detected', {
      ip: req.ip,
      path: req.path,
      body: req.body,
      query: req.query,
      params: req.params
    });

    return res.status(400).json({
      error: 'Invalid input detected'
    });
  }

  next();
};

const validateRequests = (req: Request, res: Response, next: NextFunction) => {
  // Validate content type
  if (req.method === 'POST' || req.method === 'PUT') {
    if (!req.is('application/json')) {
      return res.status(415).json({
        error: 'Content-Type must be application/json'
      });
    }
  }

  // Validate request size
  const contentLength = parseInt(req.headers['content-length'] || '0');
  if (contentLength > 1024 * 1024) { // 1MB limit
    return res.status(413).json({
      error: 'Request entity too large'
    });
  }

  next();
};