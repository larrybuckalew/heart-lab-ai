import { NextApiRequest, NextApiResponse } from 'next';
import { ZodSchema } from 'zod';
import { ValidationError } from '../utils/errors';
import logger from '../utils/logger';

export const validateRequest = (
  schema: ZodSchema,
  location: 'body' | 'query' | 'params' = 'body'
) => {
  return async (
    req: NextApiRequest,
    res: NextApiResponse,
    next: () => void
  ) => {
    try {
      const data = location === 'body' ? req.body :
                   location === 'query' ? req.query :
                   req.params;

      const validatedData = await schema.parseAsync(data);
      
      // Replace the original data with validated data
      if (location === 'body') req.body = validatedData;
      else if (location === 'query') req.query = validatedData;
      else req.params = validatedData;

      next();
    } catch (error: any) {
      logger.warn('Validation error', {
        error: error.errors,
        data: req[location],
        path: req.path
      });

      throw new ValidationError(
        error.errors.map((e: any) => e.message).join(', ')
      );
    }
  };
};

// Sanitization middleware
export const sanitizeData = () => {
  return (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const sanitize = (data: any): any => {
      if (typeof data !== 'object' || data === null) return data;

      return Object.keys(data).reduce((acc, key) => {
        const value = data[key];
        
        // Remove any potential XSS content if string
        if (typeof value === 'string') {
          acc[key] = value
            .replace(/[<>]/g, '') // Remove < and >
            .replace(/javascript:/gi, '') // Remove javascript: protocols
            .trim();
        }
        // Recursively sanitize nested objects
        else if (typeof value === 'object' && value !== null) {
          acc[key] = sanitize(value);
        }
        // Keep other types as is
        else {
          acc[key] = value;
        }
        
        return acc;
      }, {} as any);
    };

    req.body = sanitize(req.body);
    req.query = sanitize(req.query);
    next();
  };
};