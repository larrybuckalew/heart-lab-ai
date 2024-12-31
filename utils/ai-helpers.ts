import { transformers } from 'transformers';

// Language Detection Utility
export async function detectLanguage(text: string): Promise<string> {
  try {
    const detector = await transformers.pipeline('language-detection');
    const result = await detector(text);
    return result[0].label;
  } catch (error) {
    console.error('Language detection error:', error);
    return 'en'; // Default to English
  }
}

// Cardiac Risk Assessment Utility
export function assessCardiacRisk(healthData: {
  age: number,
  bloodPressure: number,
  cholesterol: number,
  heartRate: number
}): 'Low' | 'Medium' | 'High' {
  let riskScore = 0;

  // Age Risk
  if (healthData.age > 55) riskScore += 2;
  if (healthData.age > 65) riskScore += 3;

  // Blood Pressure Risk
  if (healthData.bloodPressure > 140) riskScore += 2;
  if (healthData.bloodPressure > 160) riskScore += 3;

  // Cholesterol Risk
  if (healthData.cholesterol > 200) riskScore += 2;
  if (healthData.cholesterol > 240) riskScore += 3;

  // Heart Rate Risk
  if (healthData.heartRate > 100) riskScore += 1;
  if (healthData.heartRate > 120) riskScore += 2;

  // Risk Assessment
  if (riskScore <= 2) return 'Low';
  if (riskScore <= 5) return 'Medium';
  return 'High';
}

// Transcription Utility (placeholder)
export async function transcribeAudio(audioBlob: Blob): Promise<string> {
  // TODO: Implement actual transcription logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Sample transcribed text');
    }, 2000);
  });
}