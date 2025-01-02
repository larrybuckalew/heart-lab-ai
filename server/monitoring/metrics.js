const promClient = require('prom-client');
const logger = require('../../config/logger');

// Create a Registry to register metrics
const register = new promClient.Registry();

// Add default metrics (CPU, memory, etc.)
promClient.collectDefaultMetrics({
  register,
  prefix: 'heart_lab_'
});

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'heart_lab_http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const httpRequestTotal = new promClient.Counter({
  name: 'heart_lab_http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);

module.exports = {
  register,
  metrics: {
    httpRequestDuration,
    httpRequestTotal
  }
};