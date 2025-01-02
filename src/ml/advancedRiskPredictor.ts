// Advanced Risk Prediction Model
import * as tf from '@tensorflow/tfjs';

export interface RiskPredictionInput {
    age: number;
    systolicBP: number;
    diastolicBP: number;
    cholesterol: number;
    glucose: number;
    smoking: boolean;
    diabetes: boolean;
    familyHistory: boolean;
}

export class AdvancedRiskPredictor {
    private static model: tf.Sequential | null = null;

    static async initializeModel() {
        // In a real-world scenario, this would load a pre-trained model
        this.model = tf.sequential();
        
        // Add layers to the neural network
        this.model.add(tf.layers.dense({
            inputShape: [8], // number of input features
            units: 16,
            activation: 'relu'
        }));
        
        this.model.add(tf.layers.dense({
            units: 8,
            activation: 'relu'
        }));
        
        this.model.add(tf.layers.dense({
            units: 3, // low, medium, high risk
            activation: 'softmax'
        }));

        // Compile the model
        this.model.compile({
            optimizer: 'adam',
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
    }

    static preprocessInput(input: RiskPredictionInput): number[] {
        return [
            input.age,
            input.systolicBP,
            input.diastolicBP,
            input.cholesterol,
            input.glucose,
            input.smoking ? 1 : 0,
            input.diabetes ? 1 : 0,
            input.familyHistory ? 1 : 0
        ];
    }

    static async predictRisk(input: RiskPredictionInput): Promise<{
        riskCategory: 'Low' | 'Medium' | 'High';
        riskProbabilities: number[];
    }> {
        if (!this.model) {
            await this.initializeModel();
        }

        const processedInput = this.preprocessInput(input);
        const inputTensor = tf.tensor2d([processedInput]);

        const predictions = await this.model!.predict(inputTensor) as tf.Tensor;
        const predictionArray = await predictions.array();

        const riskProbabilities = predictionArray[0];
        const maxProbIndex = riskProbabilities.indexOf(Math.max(...riskProbabilities));

        const riskCategories: ['Low', 'Medium', 'High'] = ['Low', 'Medium', 'High'];
        const riskCategory = riskCategories[maxProbIndex];

        return { riskCategory, riskProbabilities };
    }
}