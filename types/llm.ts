export interface LLMConfig {
  provider: string;
  model: string;
  apiEndpoint: string;
  maxTokens: number;
  features: string[];
}

export interface LLMUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  cost?: number;
}

export interface VisionRequest {
  prompt: string;
  image: File;
  provider?: string;
  model?: string;
  options?: {
    maxTokens?: number;
    temperature?: number;
  };
}

export interface MonitoringStats {
  provider: string;
  type: 'text' | 'vision' | 'function';
  model: string;
  totalTokens: number;
  totalCost: number;
  totalRequests: number;
  successCount: number;
  errorCount: number;
  avgLatency: number;
  period: 'hour' | 'day';
  timestamp: Date;
}