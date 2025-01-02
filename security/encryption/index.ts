import crypto from 'crypto';
import { promisify } from 'util';
import logger from '../../utils/logger';

const scrypt = promisify(crypto.scrypt);

export class Encryption {
  private static algorithm = 'aes-256-gcm';
  private static keyLength = 32;

  static async encrypt(data: string | Buffer, key: string): Promise<{
    encrypted: Buffer;
    iv: Buffer;
    authTag: Buffer;
  }> {
    try {
      // Generate a random initialization vector
      const iv = crypto.randomBytes(16);

      // Derive key using scrypt
      const derivedKey = await scrypt(key, 'salt', this.keyLength) as Buffer;

      // Create cipher
      const cipher = crypto.createCipheriv(
        this.algorithm,
        derivedKey,
        iv
      );

      // Encrypt the data
      const encrypted = Buffer.concat([
        cipher.update(data),
        cipher.final()
      ]);

      // Get the auth tag
      const authTag = cipher.getAuthTag();

      return { encrypted, iv, authTag };
    } catch (error) {
      logger.error('Encryption failed', { error });
      throw error;
    }
  }

  static async decrypt(
    encrypted: Buffer,
    key: string,
    iv: Buffer,
    authTag: Buffer
  ): Promise<Buffer> {
    try {
      // Derive key
      const derivedKey = await scrypt(key, 'salt', this.keyLength) as Buffer;

      // Create decipher
      const decipher = crypto.createDecipheriv(
        this.algorithm,
        derivedKey,
        iv
      );

      // Set auth tag
      decipher.setAuthTag(authTag);

      // Decrypt the data
      const decrypted = Buffer.concat([
        decipher.update(encrypted),
        decipher.final()
      ]);

      return decrypted;
    } catch (error) {
      logger.error('Decryption failed', { error });
      throw error;
    }
  }
}