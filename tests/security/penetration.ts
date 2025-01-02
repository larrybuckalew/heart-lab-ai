import { spawn } from 'child_process';
import logger from '../../utils/logger';

export class SecurityTesting {
  static async runZAPScan(target: string) {
    return new Promise((resolve, reject) => {
      const zap = spawn('zap-cli', [
        '--zap-url', 'http://localhost:8080',
        '--api-key', process.env.ZAP_API_KEY,
        'quick-scan',
        '--self-contained',
        '--spider',
        target
      ]);

      let output = '';

      zap.stdout.on('data', (data) => {
        output += data;
      });

      zap.stderr.on('data', (data) => {
        logger.error('ZAP scan error:', data.toString());
      });

      zap.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`ZAP scan failed with code ${code}`));
          return;
        }
        resolve(output);
      });
    });
  }

  static async runNmap(target: string) {
    return new Promise((resolve, reject) => {
      const nmap = spawn('nmap', [
        '-sV',  // Version detection
        '-sC',  // Script scan
        '--script=vuln',  // Vulnerability scan
        target
      ]);

      let output = '';

      nmap.stdout.on('data', (data) => {
        output += data;
      });

      nmap.stderr.on('data', (data) => {
        logger.error('Nmap scan error:', data.toString());
      });

      nmap.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Nmap scan failed with code ${code}`));
          return;
        }
        resolve(output);
      });
    });
  }

  static async runSSLScan(target: string) {
    return new Promise((resolve, reject) => {
      const sslscan = spawn('sslscan', [target]);

      let output = '';

      sslscan.stdout.on('data', (data) => {
        output += data;
      });

      sslscan.stderr.on('data', (data) => {
        logger.error('SSL scan error:', data.toString());
      });

      sslscan.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`SSL scan failed with code ${code}`));
          return;
        }
        resolve(output);
      });
    });
  }
}