// Multilingual Language Detection Utility

type LanguageCode = 
  | 'en' // English
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'zh' // Chinese
  | 'ar' // Arabic
  | 'hi' // Hindi
  | 'other';

interface LanguageDetectionResult {
  language: LanguageCode;
  confidence: number;
}

// Simple language detection using character and word pattern analysis
export function detectLanguage(text: string): LanguageDetectionResult {
  if (!text || text.trim().length === 0) {
    return { language: 'en', confidence: 0 };
  }

  const languagePatterns: { [key in LanguageCode]: RegExp } = {
    'en': /^[a-zA-Z\s]+$/,
    'es': /[áéíóúñ]/i,
    'fr': /[àâçéèêëîïôûùüÿ]/i,
    'de': /[äöüß]/i,
    'zh': /[\u4e00-\u9fff]/,
    'ar': /[\u0600-\u06FF]/,
    'hi': /[\u0900-\u097F]/,
  };

  for (const [lang, pattern] of Object.entries(languagePatterns)) {
    if (pattern.test(text)) {
      return { 
        language: lang as LanguageCode, 
        confidence: calculateConfidence(text, pattern) 
      };
    }
  }

  return { language: 'other', confidence: 0.5 };
}

function calculateConfidence(text: string, pattern: RegExp): number {
  const matchCount = (text.match(pattern) || []).length;
  const totalLength = text.length;
  return Math.min(matchCount / totalLength * 2, 1);
}