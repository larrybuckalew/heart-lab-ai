module.exports = {
  metrics: {
    enabled: true,
    interval: 60000, // 1 minute
    endpoints: {
      health: '/health',
      metrics: '/metrics'
    }
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: 'json'
  },
  alerts: {
    cpu: {
      threshold: 80, // 80% CPU utilization
      duration: '5m'
    },
    memory: {
      threshold: 85, // 85% memory usage
      duration: '5m'
    }
  }
};