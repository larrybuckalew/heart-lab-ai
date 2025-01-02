import winston from 'winston';
import { Request } from 'express';

interface AuditLogEntry {
  timestamp: Date;
  action: string;
  userId: string;
  resource: string;
  resourceId?: string;
  changes?: any;
  metadata?: any;
  ipAddress?: string;
  userAgent?: string;
}

export class AuditLogger {
  private static logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: { service: 'audit-log' },
    transports: [
      new winston.transports.File({
        filename: 'logs/audit.log',
        maxsize: 10485760, // 10MB
        maxFiles: 5,
        tailable: true
      })
    ]
  });

  static log(entry: AuditLogEntry) {
    this.logger.info('audit_event', entry);
  }

  static logRequest(req: Request, action: string, metadata?: any) {
    const entry: AuditLogEntry = {
      timestamp: new Date(),
      action,
      userId: req.user?.id || 'anonymous',
      resource: req.path,
      resourceId: req.params.id,
      ipAddress: req.ip,
      userAgent: req.get('user-agent'),
      metadata
    };

    this.log(entry);
  }

  static async search(options: {
    startDate?: Date;
    endDate?: Date;
    userId?: string;
    action?: string;
    resource?: string;
  }) {
    // Implementation for searching audit logs
    // This could query a database or parse log files
    return [];
  }
}