import { Performance } from 'perf_hooks';
import logger from '../logger';

interface Metric {
  name: string;
  value: number;
  timestamp: number;
  tags?: Record<string, string>;
}

class PerformanceMonitoring {
  private metrics: Metric[] = [];
  private performance: Performance;

  constructor() {
    this.performance = performance || require('perf_hooks').performance;
  }

  startTimer(name: string, tags?: Record<string, string>): () => void {
    const start = this.performance.now();
    return () => {
      const duration = this.performance.now() - start;
      this.recordMetric({
        name,
        value: duration,
        timestamp: Date.now(),
        tags
      });
    };
  }

  recordMetric(metric: Metric): void {
    this.metrics.push(metric);
    logger.info('Performance metric recorded', { metric });
  }

  getMetrics(): Metric[] {
    return this.metrics;
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitoring();