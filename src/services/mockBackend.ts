import { CardiacRiskPredictor } from '../ml/predictionModel';
import { v4 as uuidv4 } from 'uuid';

export interface PatientRecord {
    id: string;
    name: string;
    age: number;
    riskCategory: 'Low' | 'Medium' | 'High';
    lastAssessment: string;
    details: {
        bloodPressure: number;
        cholesterol: number;
        diabetic: boolean;
        smoker: boolean;
        familyHistory: boolean;
    };
}

class MockBackendService {
    private patients: PatientRecord[] = [];

    constructor() {
        this.seedPatientData();
    }

    private seedPatientData() {
        const samplePatients = [
            {
                name: 'John Doe',
                age: 45,
                details: {
                    bloodPressure: 140,
                    cholesterol: 220,
                    diabetic: false,
                    smoker: true,
                    familyHistory: true
                }
            },
            {
                name: 'Jane Smith',
                age: 35,
                details: {
                    bloodPressure: 120,
                    cholesterol: 180,
                    diabetic: false,
                    smoker: false,
                    familyHistory: false
                }
            },
            {
                name: 'Bob Johnson',
                age: 55,
                details: {
                    bloodPressure: 160,
                    cholesterol: 250,
                    diabetic: true,
                    smoker: true,
                    familyHistory: true
                }
            }
        ];

        this.patients = samplePatients.map(patient => {
            const prediction = CardiacRiskPredictor.predictCardiacRisk({
                age: patient.age,
                ...patient.details
            });

            return {
                id: uuidv4(),
                name: patient.name,
                age: patient.age,
                riskCategory: prediction.riskCategory,
                lastAssessment: new Date().toISOString(),
                details: patient.details
            };
        });
    }

    // Simulate fetching all patients
    async getPatients(): Promise<PatientRecord[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.patients), 500);
        });
    }

    // Simulate adding a new patient
    async addPatient(patientData: Omit<PatientRecord, 'id' | 'riskCategory' | 'lastAssessment'>): Promise<PatientRecord> {
        const prediction = CardiacRiskPredictor.predictCardiacRisk({
            age: patientData.age,
            ...patientData.details
        });

        const newPatient: PatientRecord = {
            id: uuidv4(),
            name: patientData.name,
            age: patientData.age,
            riskCategory: prediction.riskCategory,
            lastAssessment: new Date().toISOString(),
            details: patientData.details
        };

        this.patients.push(newPatient);

        return new Promise((resolve) => {
            setTimeout(() => resolve(newPatient), 500);
        });
    }

    // Simulate getting patient distribution
    async getRiskDistribution(): Promise<{
        lowRisk: number;
        mediumRisk: number;
        highRisk: number;
    }> {
        const distribution = this.patients.reduce((acc, patient) => {
            switch (patient.riskCategory) {
                case 'Low':
                    acc.lowRisk++;
                    break;
                case 'Medium':
                    acc.mediumRisk++;
                    break;
                case 'High':
                    acc.highRisk++;
                    break;
            }
            return acc;
        }, { lowRisk: 0, mediumRisk: 0, highRisk: 0 });

        return new Promise((resolve) => {
            setTimeout(() => resolve(distribution), 500);
        });
    }
}

export const mockBackendService = new MockBackendService();