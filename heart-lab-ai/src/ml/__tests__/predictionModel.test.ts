import { CardiacRiskPredictor } from '../predictionModel';

describe('CardiacRiskPredictor', () => {
    it('should calculate low risk for young healthy patient', () => {
        const result = CardiacRiskPredictor.predictCardiacRisk({
            age: 30,
            bloodPressure: 120,
            cholesterol: 180,
            diabetic: false,
            smoker: false,
            familyHistory: false
        });

        expect(result.riskCategory).toBe('Low');
    });

    it('should calculate medium risk for middle-aged patient with some risk factors', () => {
        const result = CardiacRiskPredictor.predictCardiacRisk({
            age: 45,
            bloodPressure: 140,
            cholesterol: 220,
            diabetic: true,
            smoker: false,
            familyHistory: false
        });

        expect(result.riskCategory).toBe('Medium');
    });

    it('should calculate high risk for older patient with multiple risk factors', () => {
        const result = CardiacRiskPredictor.predictCardiacRisk({
            age: 60,
            bloodPressure: 160,
            cholesterol: 250,
            diabetic: true,
            smoker: true,
            familyHistory: true
        });

        expect(result.riskCategory).toBe('High');
    });
});