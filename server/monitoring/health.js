const redis = require('../../config/redis');
const logger = require('../../config/logger');

const healthCheck = async () => {
  try {
    // Check Redis connection
    await redis.ping();
    
    // Add more health checks here (database, external services, etc.)
    
    return {
      status: 'healthy',
      redis: 'connected',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    logger.error('Health check failed:', error);
    return {
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

module.exports = healthCheck;