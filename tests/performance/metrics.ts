import { PerformanceObserver, performance } from 'perf_hooks';
import logger from '../../utils/logger';

interface PerformanceMetric {
  name: string;
  duration: number;
  timestamp: number;
  metadata?: Record<string, any>;
}

export class PerformanceMetrics {
  private static metrics: PerformanceMetric[] = [];
  private static observer: PerformanceObserver;

  static initialize() {
    // Create performance observer
    this.observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.push({
          name: entry.name,
          duration: entry.duration,
          timestamp: Date.now()
        });
      });
    });

    // Subscribe to all performance events
    this.observer.observe({ entryTypes: ['measure'] });
  }

  static startTimer(name: string) {
    performance.mark(`${name}-start`);
  }

  static endTimer(name: string, metadata?: Record<string, any>) {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);

    if (metadata) {
      const metric = this.metrics.find(m => m.name === name);
      if (metric) {
        metric.metadata = metadata;
      }
    }
  }

  static getMetrics() {
    return this.metrics;
  }

  static getAverageTime(name: string) {
    const relevantMetrics = this.metrics.filter(m => m.name === name);
    if (relevantMetrics.length === 0) return 0;

    const total = relevantMetrics.reduce((sum, m) => sum + m.duration, 0);
    return total / relevantMetrics.length;
  }

  static clear() {
    this.metrics = [];
  }

  static async reportMetrics() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      summary: {
        totalOperations: this.metrics.length,
        averages: {} as Record<string, number>
      }
    };

    // Calculate averages for each operation type
    const operations = new Set(this.metrics.map(m => m.name));
    operations.forEach(op => {
      report.summary.averages[op] = this.getAverageTime(op);
    });

    logger.info('Performance report generated', report);
    return report;
  }
}