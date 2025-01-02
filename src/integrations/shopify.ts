import Shopify from 'shopify-api-node';
import logger from '../utils/logger';
import { cacheManager } from '../utils/cache';

interface ShopifyConfig {
  shopName: string;
  accessToken: string;
  apiVersion: string;
}

export class ShopifyIntegration {
  private static instance: ShopifyIntegration;
  private client: Shopify;
  private config: ShopifyConfig;

  private constructor(config: ShopifyConfig) {
    this.config = config;
    this.client = new Shopify({
      shopName: config.shopName,
      accessToken: config.accessToken,
      apiVersion: config.apiVersion
    });
  }

  static getInstance(config: ShopifyConfig): ShopifyIntegration {
    if (!ShopifyIntegration.instance) {
      ShopifyIntegration.instance = new ShopifyIntegration(config);
    }
    return ShopifyIntegration.instance;
  }

  async syncProducts() {
    try {
      logger.info('Starting Shopify product sync');
      
      let products = [];
      let params = { limit: 250 };
      
      do {
        const response = await this.client.product.list(params);
        products = products.concat(response);
        params = response.nextPageParameters;
      } while (params !== undefined);

      logger.info('Shopify products synced', {
        count: products.length
      });

      return products;
    } catch (error) {
      logger.error('Failed to sync Shopify products', { error });
      throw error;
    }
  }

  async createAutoDiscount({
    title,
    percentOff,
    minimumAmount,
    startsAt,
    endsAt
  }: {
    title: string;
    percentOff: number;
    minimumAmount?: number;
    startsAt?: Date;
    endsAt?: Date;
  }) {
    try {
      const priceRule = await this.client.priceRule.create({
        title,
        target_type: 'line_item',
        target_selection: 'all',
        allocation_method: 'across',
        value_type: 'percentage',
        value: `-${percentOff}`,
        customer_selection: 'all',
        starts_at: startsAt?.toISOString() || new Date().toISOString(),
        ends_at: endsAt?.toISOString(),
        prerequisite_subtotal_range: minimumAmount ? {
          greater_than_or_equal_to: minimumAmount
        } : undefined
      });

      logger.info('Shopify discount created', {
        priceRuleId: priceRule.id
      });

      return priceRule;
    } catch (error) {
      logger.error('Failed to create Shopify discount', { error });
      throw error;
    }
  }

  async getAnalytics(startDate: Date, endDate: Date) {
    try {
      const [orders, products, customers] = await Promise.all([
        this.getOrderAnalytics(startDate, endDate),
        this.getProductAnalytics(startDate, endDate),
        this.getCustomerAnalytics(startDate, endDate)
      ]);

      return {
        orders,
        products,
        customers
      };
    } catch (error) {
      logger.error('Failed to get Shopify analytics', { error });
      throw error;
    }
  }

  private async getOrderAnalytics(startDate: Date, endDate: Date) {
    const orders = await this.client.order.list({
      created_at_min: startDate.toISOString(),
      created_at_max: endDate.toISOString(),
      status: 'any'
    });

    return {
      totalOrders: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + parseFloat(order.total_price), 0),
      averageOrderValue: orders.reduce((sum, order) => sum + parseFloat(order.total_price), 0) / orders.length,
      ordersByStatus: this.groupBy(orders, 'financial_status')
    };
  }

  private async getProductAnalytics(startDate: Date, endDate: Date) {
    const products = await this.syncProducts();
    
    return {
      totalProducts: products.length,
      totalInventory: products.reduce((sum, product) => 
        sum + product.variants.reduce((variantSum, variant) => 
          variantSum + (variant.inventory_quantity || 0), 0), 0),
      lowStockProducts: products.filter(product =>
        product.variants.some(variant =>
          (variant.inventory_quantity || 0) <= (variant.inventory_policy === 'continue' ? 0 : 5)
        )
      )
    };
  }

  private async getCustomerAnalytics(startDate: Date, endDate: Date) {
    const customers = await this.client.customer.list({
      created_at_min: startDate.toISOString(),
      created_at_max: endDate.toISOString()
    });

    return {
      totalCustomers: customers.length,
      newCustomers: customers.filter(customer =>
        new Date(customer.created_at) >= startDate
      ).length,
      customersByCountry: this.groupBy(customers, 'default_address.country')
    };
  }

  private groupBy(array: any[], key: string) {
    return array.reduce((result, item) => {
      const value = key.split('.').reduce((obj, key) => obj[key], item);
      (result[value] = result[value] || []).push(item);
      return result;
    }, {});
  }

  private async getDefaultLocationId(): Promise<number> {
    const cached = await cacheManager.get('shopify_default_location');
    if (cached) return cached;

    const locations = await this.client.location.list();
    const defaultLocation = locations[0];

    await cacheManager.set('shopify_default_location', defaultLocation.id, 86400); // 24 hours
    return defaultLocation.id;
  }
}