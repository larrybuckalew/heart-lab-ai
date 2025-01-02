const path = require('path');
const fs = require('fs').promises;
const { exec } = require('child_process');
const logger = require('../config/logger');

const backup = async () => {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(__dirname, '../backups', timestamp);
    
    // Create backup directory
    await fs.mkdir(backupDir, { recursive: true });
    
    // Backup Redis (if using Redis)
    await new Promise((resolve, reject) => {
      exec('redis-cli save', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
    
    // Copy Redis dump file
    await fs.copyFile(
      '/var/lib/redis/dump.rdb',
      path.join(backupDir, 'redis-dump.rdb')
    );
    
    logger.info(`Backup completed: ${timestamp}`);
    return { success: true, timestamp };
  } catch (error) {
    logger.error('Backup failed:', error);
    throw error;
  }
};

module.exports = backup;