import { Client, Environment, ApiError } from 'square';
import logger from '../utils/logger';
import { cacheManager } from '../utils/cache';

interface SquareConfig {
  accessToken: string;
  environment: 'sandbox' | 'production';
  locationId?: string;
}

export class SquareIntegration {
  private static instance: SquareIntegration;
  private client: Client;
  private config: SquareConfig;

  private constructor(config: SquareConfig) {
    this.config = config;
    this.client = new Client({
      accessToken: config.accessToken,
      environment: config.environment === 'production' ? 
        Environment.Production : 
        Environment.Sandbox
    });
  }

  static getInstance(config: SquareConfig): SquareIntegration {
    if (!SquareIntegration.instance) {
      SquareIntegration.instance = new SquareIntegration(config);
    }
    return SquareIntegration.instance;
  }

  async syncInventory() {
    try {
      logger.info('Starting Square inventory sync');

      const locationId = await this.getDefaultLocationId();
      let inventory = [];
      let cursor;

      do {
        const response = await this.client.inventoryApi.retrieveInventoryCounts({
          locationIds: [locationId],
          cursor
        });

        inventory = inventory.concat(response.result.counts || []);
        cursor = response.result.cursor;
      } while (cursor);

      logger.info('Square inventory synced', {
        count: inventory.length
      });

      return inventory;
    } catch (error) {
      logger.error('Failed to sync Square inventory', { error });
      throw error;
    }
  }

  async createOrder({
    lineItems,
    customerId,
    note
  }: {
    lineItems: Array<{
      quantity: string;
      catalogObjectId: string;
    }>;
    customerId?: string;
    note?: string;
  }) {
    try {
      const locationId = await this.getDefaultLocationId();

      const response = await this.client.ordersApi.createOrder({
        order: {
          locationId,
          lineItems,
          customerId,
          note
        },
        idempotencyKey: this.generateIdempotencyKey()
      });

      logger.info('Square order created', {
        orderId: response.result.order?.id
      });

      return response.result.order;
    } catch (error) {
      logger.error('Failed to create Square order', { error });
      throw error;
    }
  }

  async processPayment({
    sourceId,
    orderId,
    amount,
    currency = 'USD',
    note
  }: {
    sourceId: string;
    orderId?: string;
    amount: number;
    currency?: string;
    note?: string;
  }) {
    try {
      const locationId = await this.getDefaultLocationId();

      const response = await this.client.paymentsApi.createPayment({
        sourceId,
        orderId,
        amountMoney: {
          amount: Math.round(amount * 100), // Convert to cents
          currency
        },
        locationId,
        note,
        idempotencyKey: this.generateIdempotencyKey()
      });

      logger.info('Square payment processed', {
        paymentId: response.result.payment?.id
      });

      return response.result.payment;
    } catch (error) {
      logger.error('Failed to process Square payment', { error });
      throw error;
    }
  }

  async getTransactionAnalytics(startDate: Date, endDate: Date) {
    try {
      const locationId = await this.getDefaultLocationId();

      const response = await this.client.ordersApi.searchOrders({
        locationIds: [locationId],
        dateTimeFilter: {
          createdAt: {
            startAt: startDate.toISOString(),
            endAt: endDate.toISOString()
          }
        }
      });

      const orders = response.result.orders || [];

      return {
        totalTransactions: orders.length,
        totalRevenue: orders.reduce((sum, order) => 
          sum + (parseInt(order.totalMoney?.amount || '0') / 100), 0),
        averageTransactionValue: orders.reduce((sum, order) => 
          sum + (parseInt(order.totalMoney?.amount || '0') / 100), 0) / orders.length,
        paymentTypes: this.groupPaymentTypes(orders)
      };
    } catch (error) {
      logger.error('Failed to get Square transaction analytics', { error });
      throw error;
    }
  }

  private async getDefaultLocationId(): Promise<string> {
    if (this.config.locationId) {
      return this.config.locationId;
    }

    const cached = await cacheManager.get('square_default_location');
    if (cached) return cached;

    const response = await this.client.locationsApi.listLocations();
    const defaultLocation = response.result.locations?.[0];

    if (!defaultLocation?.id) {
      throw new Error('No Square location found');
    }

    await cacheManager.set('square_default_location', defaultLocation.id, 86400); // 24 hours
    return defaultLocation.id;
  }

  private generateIdempotencyKey(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private groupPaymentTypes(orders: any[]): Record<string, number> {
    return orders.reduce((acc, order) => {
      const paymentType = order.tenders?.[0]?.type || 'unknown';
      acc[paymentType] = (acc[paymentType] || 0) + 1;
      return acc;
    }, {});
  }
}