import { HealthMetrics } from '../validation/schemas';
import { performanceMonitor } from '../monitoring/performance';
import logger from '../logger';

interface HeartRateAnalysisResult {
  averageRate: number;
  minRate: number;
  maxRate: number;
  variability: number;
  abnormalityDetected: boolean;
  abnormalityDetails?: string[];
}

export class HeartRateAnalyzer {
  static async analyzeTimeSeries(data: HealthMetrics[]): Promise<HeartRateAnalysisResult> {
    const endTimer = performanceMonitor.startTimer('heart_rate_analysis');

    try {
      const heartRates = data.map(d => d.heartRate);
      
      const result = {
        averageRate: this.calculateAverage(heartRates),
        minRate: Math.min(...heartRates),
        maxRate: Math.max(...heartRates),
        variability: this.calculateVariability(heartRates),
        abnormalityDetected: false,
        abnormalityDetails: []
      };

      // Check for abnormalities
      const abnormalities = this.detectAbnormalities(heartRates);
      if (abnormalities.length > 0) {
        result.abnormalityDetected = true;
        result.abnormalityDetails = abnormalities;
      }

      logger.info('Heart rate analysis completed', { result });
      return result;
    } catch (error) {
      logger.error('Heart rate analysis failed', { error });
      throw error;
    } finally {
      endTimer();
    }
  }

  private static calculateAverage(rates: number[]): number {
    return rates.reduce((a, b) => a + b, 0) / rates.length;
  }

  private static calculateVariability(rates: number[]): number {
    const avg = this.calculateAverage(rates);
    const squareDiffs = rates.map(rate => Math.pow(rate - avg, 2));
    return Math.sqrt(this.calculateAverage(squareDiffs));
  }

  private static detectAbnormalities(rates: number[]): string[] {
    const abnormalities: string[] = [];
    const avg = this.calculateAverage(rates);
    const variability = this.calculateVariability(rates);

    // Check for tachycardia
    if (avg > 100) {
      abnormalities.push('Potential tachycardia detected');
    }

    // Check for bradycardia
    if (avg < 60) {
      abnormalities.push('Potential bradycardia detected');
    }

    // Check for high variability
    if (variability > 20) {
      abnormalities.push('High heart rate variability detected');
    }

    return abnormalities;
  }
}