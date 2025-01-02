import { prisma } from '../../utils/db';
import logger from '../../utils/logger';

export interface ModelMetadata {
  version: string;
  accuracy: number;
  timestamp: Date;
  parameters: Record<string, any>;
  trainingData: {
    startDate: Date;
    endDate: Date;
    sampleCount: number;
  };
}

export class ModelVersioning {
  static async saveVersion(metadata: ModelMetadata) {
    try {
      const modelVersion = await prisma.modelVersion.create({
        data: {
          version: metadata.version,
          accuracy: metadata.accuracy,
          parameters: metadata.parameters,
          trainingMetadata: metadata.trainingData,
          timestamp: metadata.timestamp
        }
      });

      logger.info('New model version saved', { version: metadata.version });
      return modelVersion;
    } catch (error) {
      logger.error('Error saving model version', { error, metadata });
      throw error;
    }
  }

  static async getLatestVersion() {
    try {
      return await prisma.modelVersion.findFirst({
        orderBy: { timestamp: 'desc' }
      });
    } catch (error) {
      logger.error('Error getting latest model version', { error });
      throw error;
    }
  }

  static async compareVersions(version1: string, version2: string) {
    try {
      const [v1, v2] = await Promise.all([
        prisma.modelVersion.findUnique({ where: { version: version1 } }),
        prisma.modelVersion.findUnique({ where: { version: version2 } })
      ]);

      return {
        accuracyDiff: v2!.accuracy - v1!.accuracy,
        timestamp1: v1!.timestamp,
        timestamp2: v2!.timestamp
      };
    } catch (error) {
      logger.error('Error comparing model versions', { error, version1, version2 });
      throw error;
    }
  }
}