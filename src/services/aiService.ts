import { Configuration, OpenAIApi } from 'openai';
import logger from '../utils/logger';
import { cacheManager } from '../utils/cache';

interface AIServiceConfig {
  provider: 'openai' | 'anthropic' | 'google';
  apiKey: string;
  model?: string;
  options?: Record<string, any>;
}

export class AIService {
  private static instance: AIService;
  private openai: OpenAIApi;
  private config: AIServiceConfig;

  private constructor(config: AIServiceConfig) {
    this.config = config;
    if (config.provider === 'openai') {
      this.openai = new OpenAIApi(
        new Configuration({ apiKey: config.apiKey })
      );
    }
  }

  static getInstance(config: AIServiceConfig): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService(config);
    }
    return AIService.instance;
  }

  async analyzeBusiness(data: any) {
    try {
      const prompt = this.constructBusinessAnalysisPrompt(data);
      const response = await this.openai.createCompletion({
        model: this.config.model || 'gpt-4',
        prompt,
        max_tokens: 1000,
        temperature: 0.7
      });

      return this.parseBusinessAnalysis(response.data.choices[0].text);
    } catch (error) {
      logger.error('Business analysis failed', { error });
      throw error;
    }
  }

  async generateBusinessPlan(requirements: any) {
    try {
      const prompt = this.constructBusinessPlanPrompt(requirements);
      const response = await this.openai.createCompletion({
        model: this.config.model || 'gpt-4',
        prompt,
        max_tokens: 2000,
        temperature: 0.6
      });

      return this.parseBusinessPlan(response.data.choices[0].text);
    } catch (error) {
      logger.error('Business plan generation failed', { error });
      throw error;
    }
  }

  async optimizeWorkflow(currentWorkflow: any) {
    try {
      const prompt = this.constructWorkflowOptimizationPrompt(currentWorkflow);
      const response = await this.openai.createCompletion({
        model: this.config.model || 'gpt-4',
        prompt,
        max_tokens: 1500,
        temperature: 0.5
      });

      return this.parseWorkflowOptimization(response.data.choices[0].text);
    } catch (error) {
      logger.error('Workflow optimization failed', { error });
      throw error;
    }
  }

  private constructBusinessAnalysisPrompt(data: any): string {
    return `
      Analyze the following business data and provide insights:
      - Current processes
      - Efficiency metrics
      - Automation opportunities
      - Cost optimization suggestions
      
      Data: ${JSON.stringify(data, null, 2)}
    `;
  }

  private constructBusinessPlanPrompt(requirements: any): string {
    return `
      Generate a detailed business plan based on the following requirements:
      - Business goals
      - Target market
      - Resources
      - Timeline
      
      Requirements: ${JSON.stringify(requirements, null, 2)}
    `;
  }

  private constructWorkflowOptimizationPrompt(workflow: any): string {
    return `
      Analyze and optimize the following business workflow:
      - Identify bottlenecks
      - Suggest automation opportunities
      - Improve efficiency
      - Reduce costs
      
      Current workflow: ${JSON.stringify(workflow, null, 2)}
    `;
  }

  private parseBusinessAnalysis(text: string): any {
    // Implementation of parsing business analysis response
    return JSON.parse(text);
  }

  private parseBusinessPlan(text: string): any {
    // Implementation of parsing business plan response
    return JSON.parse(text);
  }

  private parseWorkflowOptimization(text: string): any {
    // Implementation of parsing workflow optimization response
    return JSON.parse(text);
  }
}