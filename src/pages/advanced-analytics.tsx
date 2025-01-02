import React, { useState, useEffect } from 'react';
import RiskPredictionHeatmap from '../components/RiskPredictionHeatmap';
import RiskProbabilityRadar from '../components/RiskProbabilityRadar';

const AdvancedAnalyticsPage: React.FC = () => {
    const [heatmapData, setHeatmapData] = useState([]);
    const [radarData, setRadarData] = useState([]);

    useEffect(() => {
        // Simulate data fetching
        const fetchAnalyticsData = async () => {
            // Mock data generation
            const mockHeatmapData = [
                {
                    id: 'Low Risk Patients',
                    data: [
                        { x: 'Age', y: 0.2 },
                        { x: 'Blood Pressure', y: 0.1 },
                        { x: 'Cholesterol', y: 0.15 }
                    ]
                },
                {
                    id: 'Medium Risk Patients',
                    data: [
                        { x: 'Age', y: 0.5 },
                        { x: 'Blood Pressure', y: 0.6 },
                        { x: 'Cholesterol', y: 0.4 }
                    ]
                },
                {
                    id: 'High Risk Patients',
                    data: [
                        { x: 'Age', y: 0.8 },
                        { x: 'Blood Pressure', y: 0.9 },
                        { x: 'Cholesterol', y: 0.7 }
                    ]
                }
            ];

            const mockRadarData = [
                { factor: 'Age', risk: 0.6 },
                { factor: 'Blood Pressure', risk: 0.7 },
                { factor: 'Cholesterol', risk: 0.5 },
                { factor: 'Diabetes', risk: 0.4 },
                { factor: 'Smoking', risk: 0.8 }
            ];

            setHeatmapData(mockHeatmapData);
            setRadarData(mockRadarData);
        };

        fetchAnalyticsData();
    }, []);

    return (
        <div className="container mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Advanced Risk Analytics</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Risk Factors Heatmap</h2>
                    {heatmapData.length > 0 && (
                        <RiskPredictionHeatmap data={heatmapData} />
                    )}
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Risk Probability Radar</h2>
                    {radarData.length > 0 && (
                        <RiskProbabilityRadar data={radarData} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdvancedAnalyticsPage;