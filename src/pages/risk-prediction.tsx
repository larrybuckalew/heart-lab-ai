import React, { useState } from 'react';
import { CardiacRiskPredictor } from '../ml/predictionModel';

const RiskPredictionPage: React.FC = () => {
    const [patientData, setPatientData] = useState({
        age: 40,
        bloodPressure: 120,
        cholesterol: 200,
        diabetic: false,
        smoker: false,
        familyHistory: false
    });

    const [prediction, setPrediction] = useState<{
        riskScore: number;
        riskCategory: 'Low' | 'Medium' | 'High';
    } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setPatientData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                    type === 'number' ? Number(value) : value
        }));
    };

    const predictRisk = () => {
        const result = CardiacRiskPredictor.predictCardiacRisk(patientData);
        setPrediction(result);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Cardiac Risk Prediction</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={patientData.age}
                                onChange={handleInputChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Blood Pressure</label>
                            <input
                                type="number"
                                name="bloodPressure"
                                value={patientData.bloodPressure}
                                onChange={handleInputChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Cholesterol</label>
                            <input
                                type="number"
                                name="cholesterol"
                                value={patientData.cholesterol}
                                onChange={handleInputChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="diabetic"
                                checked={patientData.diabetic}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            <label>Diabetic</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="smoker"
                                checked={patientData.smoker}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            <label>Smoker</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="familyHistory"
                                checked={patientData.familyHistory}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            <label>Family History of Heart Disease</label>
                        </div>
                    </div>
                    <button
                        onClick={predictRisk}
                        className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Predict Risk
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Prediction Result</h2>
                    {prediction ? (
                        <div>
                            <p className="text-lg">
                                Risk Category: 
                                <span className={
                                    prediction.riskCategory === 'Low' ? 'text-green-600' :
                                    prediction.riskCategory === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                                }>
                                    {` ${prediction.riskCategory}`}
                                </span>
                            </p>
                            <p>Risk Score: {prediction.riskScore.toFixed(2)}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">Submit patient data to get risk prediction</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RiskPredictionPage;