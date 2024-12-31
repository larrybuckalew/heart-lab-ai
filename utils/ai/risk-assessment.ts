// Advanced Cardiac Risk Assessment Utility

interface HealthProfile {
  age: number;
  gender: 'male' | 'female';
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  cholesterolLevels: {
    total: number;
    hdl: number;
    ldl: number;
  };
  bloodSugar: number;
  bodyMassIndex: number;
  smokingStatus: boolean;
  familyHistory: boolean;
}

type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High';

export function assessCardiacRisk(profile: HealthProfile): RiskLevel {
  let riskScore = 0;

  // Age Risk Factor
  if (profile.age > 45 && profile.gender === 'male') riskScore += 2;
  if (profile.age > 55 && profile.gender === 'female') riskScore += 2;

  // Blood Pressure Risk
  if (profile.bloodPressure.systolic > 140 || profile.bloodPressure.diastolic > 90) riskScore += 2;

  // Cholesterol Risk
  if (profile.cholesterolLevels.total > 240) riskScore += 2;
  if (profile.cholesterolLevels.ldl > 160) riskScore += 2;

  // Blood Sugar Risk
  if (profile.bloodSugar > 125) riskScore += 2;

  // BMI Risk
  if (profile.bodyMassIndex > 30) riskScore += 2;

  // Lifestyle Factors
  if (profile.smokingStatus) riskScore += 3;
  if (profile.familyHistory) riskScore += 2;

  // Risk Level Determination
  if (riskScore <= 3) return 'Low';
  if (riskScore <= 6) return 'Moderate';
  if (riskScore <= 9) return 'High';
  return 'Very High';
}