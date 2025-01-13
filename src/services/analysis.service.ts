export interface AnalysisResult {
  risk: number;
  confidence: number;
  features: Record<string, number>;
}

export const analyzeEcgData = async (data: number[]): Promise<AnalysisResult> => {
  try {
    // Analysis logic here
    return {
      risk: 0.5,
      confidence: 0.8,
      features: {
        variability: 0.7,
        complexity: 0.6
      }
    };
  } catch (error) {
    throw new Error('Analysis failed');
  }
};