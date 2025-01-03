const path = require('path');
const fs = require('fs').promises;
const { exec } = require('child_process');
const logger = require('../config/logger');

const restore = async (timestamp) => {
  try {
    const backupDir = path.join(__dirname, '../backups', timestamp);
    
    // Check if backup exists
    const exists = await fs.access(backupDir)
      .then(() => true)
      .catch(() => false);
      
    if (!exists) {
      throw new Error(`Backup not found for timestamp: ${timestamp}`);
    }
    
    // Stop Redis server
    await new Promise((resolve, reject) => {
      exec('redis-cli shutdown', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
    
    // Copy Redis dump file back
    await fs.copyFile(
      path.join(backupDir, 'redis-dump.rdb'),
      '/var/lib/redis/dump.rdb'
    );
    
    // Start Redis server
    await new Promise((resolve, reject) => {
      exec('redis-server', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
    
    logger.info(`Restore completed from backup: ${timestamp}`);
    return { success: true, timestamp };
  } catch (error) {
    logger.error('Restore failed:', error);
    throw error;
  }
};

module.exports = restore;