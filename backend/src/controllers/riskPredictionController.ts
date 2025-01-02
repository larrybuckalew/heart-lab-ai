import { Request, Response } from 'express';
import { AdvancedRiskPredictor } from '../../../src/ml/advancedRiskPredictor';

export const predictRisk = async (req: Request, res: Response) => {
    try {
        const { 
            age, 
            systolicBP, 
            diastolicBP, 
            cholesterol, 
            glucose, 
            smoking, 
            diabetes, 
            familyHistory 
        } = req.body;

        const prediction = await AdvancedRiskPredictor.predictRisk({
            age,
            systolicBP,
            diastolicBP,
            cholesterol,
            glucose,
            smoking,
            diabetes,
            familyHistory
        });

        res.json({
            success: true,
            data: prediction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Risk prediction failed',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};