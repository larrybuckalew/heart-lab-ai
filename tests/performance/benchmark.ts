import Benchmark from 'benchmark';
import { ECGAnalyzer } from '../../ml/analysis/ecg';
import { FeatureEngineering } from '../../ml/pipeline/featureEngineering';
import logger from '../../utils/logger';

const suite = new Benchmark.Suite;

// Generate test data
const generateTestData = (size: number) => {
  return Array(size).fill(0).map(() => Math.random() * 100);
};

// Add tests
suite
  .add('ECG Analysis - Small Dataset', {
    defer: true,
    fn: async (deferred: any) => {
      await ECGAnalyzer.analyze(generateTestData(1000));
      deferred.resolve();
    }
  })
  .add('ECG Analysis - Large Dataset', {
    defer: true,
    fn: async (deferred: any) => {
      await ECGAnalyzer.analyze(generateTestData(10000));
      deferred.resolve();
    }
  })
  .add('Feature Engineering - Normalization', {
    defer: true,
    fn: async (deferred: any) => {
      await FeatureEngineering.processFeatures(generateTestData(1000), {
        normalize: true
      });
      deferred.resolve();
    }
  })
  .on('cycle', (event: any) => {
    logger.info(String(event.target));
  })
  .on('complete', function(this: any) {
    logger.info('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });