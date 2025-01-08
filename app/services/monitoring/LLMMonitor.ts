import { PrismaClient } from '@prisma/client';
import { LLMUsage } from '@/types/llm';

const prisma = new PrismaClient();

export class LLMMonitor {
  private static instance: LLMMonitor;
  private metricsBuffer: any[] = [];
  private readonly FLUSH_INTERVAL = 60000; // 1 minute
  private readonly BUFFER_SIZE = 100;

  private constructor() {
    this.setupPeriodicFlush();
  }

  public static getInstance(): LLMMonitor {
    if (!LLMMonitor.instance) {
      LLMMonitor.instance = new LLMMonitor();
    }
    return LLMMonitor.instance;
  }

  private setupPeriodicFlush() {
    setInterval(() => {
      this.flushMetrics();
    }, this.FLUSH_INTERVAL);
  }

  public async logUsage(data: {
    provider: string;
    type: 'text' | 'vision' | 'function';
    model: string;
    promptTokens: number;
    completionTokens: number;
    imageSize?: number;
    functionName?: string;
    status: 'success' | 'error';
    latency: number;
    cost?: number;
  }) {
    this.metricsBuffer.push({
      ...data,
      timestamp: new Date()
    });

    if (this.metricsBuffer.length >= this.BUFFER_SIZE) {
      await this.flushMetrics();
    }
  }

  private async flushMetrics() {
    if (this.metricsBuffer.length === 0) return;

    const metrics = [...this.metricsBuffer];
    this.metricsBuffer = [];

    try {
      await prisma.llmUsage.createMany({
        data: metrics
      });

      // Update aggregated stats
      await this.updateAggregatedStats(metrics);
    } catch (error) {
      console.error('Error flushing metrics:', error);
      // Re-add failed metrics to buffer
      this.metricsBuffer = [...metrics, ...this.metricsBuffer];
    }
  }

  private async updateAggregatedStats(metrics: any[]) {
    const now = new Date();
    const hourlyStats = this.aggregateMetrics(metrics, 'hour');
    const dailyStats = this.aggregateMetrics(metrics, 'day');

    await Promise.all([
      prisma.llmUsageStats.createMany({
        data: hourlyStats.map(stat => ({
          ...stat,
          period: 'hour',
          timestamp: now
        }))
      }),
      prisma.llmUsageStats.createMany({
        data: dailyStats.map(stat => ({
          ...stat,
          period: 'day',
          timestamp: now
        }))
      })
    ]);
  }
}