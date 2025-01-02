import { createClient } from 'redis';
import logger from '../logger';

class CacheManager {
  private client: ReturnType<typeof createClient>;
  private readonly defaultTTL: number = 3600; // 1 hour

  constructor() {
    this.initializeClient();
  }

  private async initializeClient() {
    this.client = createClient({
      url: process.env.REDIS_URL,
    });

    this.client.on('error', (err) => {
      logger.error('Redis Client Error', err);
    });

    await this.client.connect();
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      logger.error('Cache get error', { error, key });
      return null;
    }
  }

  async set(key: string, value: unknown, ttl: number = this.defaultTTL): Promise<void> {
    try {
      const serializedValue = JSON.stringify(value);
      await this.client.set(key, serializedValue, { EX: ttl });
    } catch (error) {
      logger.error('Cache set error', { error, key });
    }
  }

  async del(key: string): Promise<void> {
    try {
      await this.client.del(key);
    } catch (error) {
      logger.error('Cache delete error', { error, key });
    }
  }

  async flush(): Promise<void> {
    try {
      await this.client.flushAll();
    } catch (error) {
      logger.error('Cache flush error', { error });
    }
  }
}

export const cacheManager = new CacheManager();