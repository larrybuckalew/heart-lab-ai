import { EventEmitter } from 'events';
import logger from '../../utils/logger';
import { WebSocketServer } from '../websocket';

interface Alert {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: Date;
  patientId: string;
  data?: any;
}

export class AlertManager extends EventEmitter {
  private activeAlerts: Map<string, Alert>;
  private wsServer: WebSocketServer;

  constructor(wsServer: WebSocketServer) {
    super();
    this.activeAlerts = new Map();
    this.wsServer = wsServer;
  }

  public async createAlert(alert: Omit<Alert, 'id'>) {
    try {
      const id = this.generateAlertId();
      const newAlert = { ...alert, id };

      // Store alert
      this.activeAlerts.set(id, newAlert);

      // Emit event
      this.emit('alert:created', newAlert);

      // Notify relevant users
      await this.notifyUsers(newAlert);

      // Log alert
      logger.info('Alert created', { alert: newAlert });

      return newAlert;
    } catch (error) {
      logger.error('Error creating alert', { error, alert });
      throw error;
    }
  }

  private async notifyUsers(alert: Alert) {
    // Get users who should be notified about this alert
    const userIds = await this.getUsersToNotify(alert);
    
    // Send alert to each user via WebSocket
    userIds.forEach(userId => {
      this.wsServer.sendToUser(userId, {
        type: 'alert',
        payload: alert
      });
    });
  }

  private async getUsersToNotify(alert: Alert): Promise<string[]> {
    // Implementation to determine which users should be notified
    // This could be based on roles, assignments, etc.
    return [];
  }

  private generateAlertId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  public getActiveAlerts(): Alert[] {
    return Array.from(this.activeAlerts.values());
  }

  public getAlertById(id: string): Alert | undefined {
    return this.activeAlerts.get(id);
  }

  public async resolveAlert(alertId: string, resolution: string) {
    try {
      const alert = this.activeAlerts.get(alertId);
      if (!alert) {
        throw new Error(`Alert ${alertId} not found`);
      }

      // Remove from active alerts
      this.activeAlerts.delete(alertId);

      // Emit event
      this.emit('alert:resolved', { alert, resolution });

      // Log resolution
      logger.info('Alert resolved', { alertId, resolution });

      return { alert, resolution };
    } catch (error) {
      logger.error('Error resolving alert', { error, alertId });
      throw error;
    }
  }
}