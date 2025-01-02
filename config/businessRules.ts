export const businessRules = {
  // Business process automation rules
  automation: {
    workflow: {
      maxSteps: 20,
      maxParallelTasks: 5,
      timeoutMinutes: 30
    },
    notifications: {
      email: true,
      slack: true,
      sms: false,
      retryAttempts: 3
    },
    limits: {
      dailyProcessingLimit: 1000,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      supportedFileTypes: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'txt']
    }
  },

  // AI integration settings
  ai: {
    models: {
      textProcessing: 'gpt-3.5-turbo',
      imageAnalysis: 'dall-e-3',
      dataAnalysis: 'claude-3'
    },
    limits: {
      maxTokens: 4000,
      maxImagesPerRequest: 10,
      maxAnalysisDataPoints: 1000
    },
    caching: {
      enabled: true,
      ttl: 3600, // 1 hour
      maxCacheSize: 100 * 1024 * 1024 // 100MB
    }
  },

  // Business data handling
  data: {
    retention: {
      transactionalData: 7 * 365, // 7 years
      analyticsData: 365, // 1 year
      temporaryData: 30 // 30 days
    },
    encryption: {
      algorithm: 'aes-256-gcm',
      keyRotationDays: 90
    },
    backup: {
      frequency: 'daily',
      retentionPeriod: 90, // days
      type: 'incremental'
    }
  },

  // Integration limits
  integration: {
    apis: {
      maxRequestsPerMinute: 60,
      maxConcurrentConnections: 10,
      timeout: 30000 // 30 seconds
    },
    batch: {
      maxBatchSize: 1000,
      processingWindow: 3600, // 1 hour
      retryAttempts: 3
    }
  },

  // Business analytics
  analytics: {
    realtime: {
      enabled: true,
      updateInterval: 60, // seconds
      metrics: ['usage', 'performance', 'errors']
    },
    reporting: {
      daily: true,
      weekly: true,
      monthly: true,
      custom: true
    }
  }
};