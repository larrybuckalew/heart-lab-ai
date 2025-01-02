import OAuthClient from 'intuit-oauth';
import QuickBooks from 'node-quickbooks';
import logger from '../utils/logger';
import { cacheManager } from '../utils/cache';

interface QuickBooksConfig {
  clientId: string;
  clientSecret: string;
  environment: 'sandbox' | 'production';
  redirectUri: string;
  minorversion?: number;
}

export class QuickBooksIntegration {
  private static instance: QuickBooksIntegration;
  private oauthClient: any;
  private qbo: any;
  private config: QuickBooksConfig;

  private constructor(config: QuickBooksConfig) {
    this.config = config;
    this.oauthClient = new OAuthClient({
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      environment: config.environment,
      redirectUri: config.redirectUri
    });
  }

  static getInstance(config: QuickBooksConfig): QuickBooksIntegration {
    if (!QuickBooksIntegration.instance) {
      QuickBooksIntegration.instance = new QuickBooksIntegration(config);
    }
    return QuickBooksIntegration.instance;
  }

  async initialize(realmId: string, accessToken: string) {
    this.qbo = new QuickBooks(
      this.config.clientId,
      this.config.clientSecret,
      accessToken,
      false, // no token secret for oAuth 2.0
      realmId,
      this.config.environment === 'production',
      true, // debug
      this.config.minorversion || 65,
      '2.0',
      accessToken
    );
  }

  async createInvoice(data: any) {
    try {
      logger.info('Creating QuickBooks invoice', { data });
      
      const invoice = await this.qbo.createInvoiceAsync(data);
      
      logger.info('QuickBooks invoice created', { 
        invoiceId: invoice.Id 
      });
      
      return invoice;
    } catch (error) {
      logger.error('Failed to create QuickBooks invoice', { error, data });
      throw error;
    }
  }

  async getCustomers() {
    try {
      // Check cache first
      const cached = await cacheManager.get('qbo_customers');
      if (cached) return cached;

      const customers = await this.qbo.findCustomersAsync({
        fetchAll: true
      });

      // Cache results
      await cacheManager.set('qbo_customers', customers, 3600);

      return customers;
    } catch (error) {
      logger.error('Failed to fetch QuickBooks customers', { error });
      throw error;
    }
  }

  async syncTransactions(startDate: Date) {
    try {
      logger.info('Starting QuickBooks transaction sync', { startDate });

      const transactions = await this.qbo.findTransactionsAsync({
        fetchAll: true,
        where: `TxnDate >= '${startDate.toISOString()}'`
      });

      logger.info('QuickBooks transactions synced', {
        count: transactions.length
      });

      return transactions;
    } catch (error) {
      logger.error('Failed to sync QuickBooks transactions', { error });
      throw error;
    }
  }

  async generateReport(reportType: string, options: any = {}) {
    try {
      logger.info('Generating QuickBooks report', { reportType, options });

      const report = await this.qbo.reportAsync(reportType, options);

      logger.info('QuickBooks report generated', {
        reportType,
        rows: report.Rows.length
      });

      return report;
    } catch (error) {
      logger.error('Failed to generate QuickBooks report', {
        error,
        reportType
      });
      throw error;
    }
  }
}