import { spawn } from 'child_process';
import logger from '../../utils/logger';

interface SecurityScanResult {
  tool: string;
  findings: Array<{
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    location?: string;
    recommendation?: string;
  }>;
  timestamp: Date;
}

export class SecurityScanner {
  static async runAllScans(target: string): Promise<SecurityScanResult[]> {
    const results = await Promise.all([
      this.runNmapScan(target),
      this.runZAPScan(target),
      this.runSSLScan(target),
      this.runDependencyCheck(target)
    ]);

    // Generate consolidated report
    await this.generateReport(results);

    return results;
  }

  static async runNmapScan(target: string): Promise<SecurityScanResult> {
    return new Promise((resolve, reject) => {
      const nmap = spawn('nmap', [
        '-sV',  // Version detection
        '-sC',  // Script scan
        '--script=vuln', // Vulnerability scan
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

        resolve({
          tool: 'nmap',
          findings: this.parseNmapOutput(output),
          timestamp: new Date()
        });
      });
    });
  }

  static async runDependencyCheck(target: string): Promise<SecurityScanResult> {
    return new Promise((resolve, reject) => {
      const depCheck = spawn('dependency-check', [
        '--project', 'heart-lab-ai',
        '--scan', target,
        '--format', 'JSON',
        '--out', 'dependency-check-report.json'
      ]);

      depCheck.stdout.on('data', (data) => {
        logger.info('Dependency check progress:', data.toString());
      });

      depCheck.stderr.on('data', (data) => {
        logger.error('Dependency check error:', data.toString());
      });

      depCheck.on('close', async (code) => {
        if (code !== 0) {
          reject(new Error(`Dependency check failed with code ${code}`));
          return;
        }

        try {
          const report = await import('../dependency-check-report.json');
          resolve({
            tool: 'dependency-check',
            findings: this.parseDependencyCheckReport(report),
            timestamp: new Date()
          });
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  private static parseDependencyCheckReport(report: any) {
    return report.dependencies
      .filter((dep: any) => dep.vulnerabilities && dep.vulnerabilities.length > 0)
      .map((dep: any) => dep.vulnerabilities.map((vuln: any) => ({
        severity: this.mapCVSSSeverity(vuln.cvssScore),
        description: `${dep.fileName} has vulnerability: ${vuln.name}`,
        location: dep.filePath,
        recommendation: vuln.recommendation || 'Update to the latest version.'
      })))
      .flat();
  }

  private static mapCVSSSeverity(score: number): 'low' | 'medium' | 'high' | 'critical' {
    if (score >= 9.0) return 'critical';
    if (score >= 7.0) return 'high';
    if (score >= 4.0) return 'medium';
    return 'low';
  }

  private static async generateReport(results: SecurityScanResult[]) {
    const report = {
      timestamp: new Date(),
      summary: {
        total_findings: results.reduce((sum, r) => sum + r.findings.length, 0),
        by_severity: {
          critical: 0,
          high: 0,
          medium: 0,
          low: 0
        },
        by_tool: {}
      },
      detailed_findings: results
    };

    // Calculate statistics
    results.forEach(result => {
      report.summary.by_tool[result.tool] = result.findings.length;
      result.findings.forEach(finding => {
        report.summary.by_severity[finding.severity]++;
      });
    });

    // Save report
    await this.saveReport(report);
    logger.info('Security scan report generated', { summary: report.summary });

    return report;
  }

  private static async saveReport(report: any) {
    // Implementation to save report to file or database
  }
}