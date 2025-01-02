import { Request, Response, NextFunction } from 'express';
import logger from '../../utils/logger';

export class HIPAACompliance {
  static auditLog(action: string, data: any) {
    const auditEntry = {
      timestamp: new Date(),
      action,
      data: this.sanitizePHI(data),
      // Add additional HIPAA required fields
      accessType: data.accessType || 'read',
      userRole: data.userRole,
      patientId: data.patientId,
      reason: data.reason || 'treatment'
    };

    logger.info('HIPAA Audit Log', auditEntry);
    // Store audit log in secure storage
  }

  static middleware() {
    return (req: Request, res: Response, next: NextFunction) => {
      // Add HIPAA-required headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

      // Log access
      this.auditLog('api_access', {
        path: req.path,
        method: req.method,
        userRole: req.user?.role,
        accessType: req.method === 'GET' ? 'read' : 'write',
        patientId: req.params.patientId
      });

      next();
    };
  }

  private static sanitizePhI(data: any): any {
    const phi = new Set([
      'ssn',
      'email',
      'phoneNumber',
      'address',
      'dateOfBirth'
    ]);

    if (typeof data !== 'object' || data === null) {
      return data;
    }

    const sanitized = { ...data };

    for (const key of Object.keys(sanitized)) {
      if (phi.has(key.toLowerCase())) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof sanitized[key] === 'object') {
        sanitized[key] = this.sanitizePhI(sanitized[key]);
      }
    }

    return sanitized;
  }
}