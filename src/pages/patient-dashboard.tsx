import React, { useState, useEffect } from 'react';
import { mockBackendService, PatientRecord } from '../services/mockBackend';
import RiskDistributionChart from '../components/RiskDistributionChart';

const PatientDashboardPage: React.FC = () => {
    const [patients, setPatients] = useState<PatientRecord[]>([]);
    const [riskDistribution, setRiskDistribution] = useState<{
        lowRisk: number;
        mediumRisk: number;
        highRisk: number;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fetchedPatients, distribution] = await Promise.all([
                    mockBackendService.getPatients(),
                    mockBackendService.getRiskDistribution()
                ]);

                setPatients(fetchedPatients);
                setRiskDistribution(distribution);
            } catch (error) {
                console.error('Failed to fetch data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Patient Dashboard</h1>

            {riskDistribution && (
                <div className="mb-6">
                    <RiskDistributionChart
                        lowRisk={riskDistribution.lowRisk}
                        mediumRisk={riskDistribution.mediumRisk}
                        highRisk={riskDistribution.highRisk}
                    />
                </div>
            )}

            <div className="bg-white shadow-md rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Age</th>
                            <th className="p-3 text-left">Risk Category</th>
                            <th className="p-3 text-left">Last Assessment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id} className="border-b">
                                <td className="p-3">{patient.name}</td>
                                <td className="p-3">{patient.age}</td>
                                <td className="p-3">
                                    <span className={
                                        patient.riskCategory === 'Low' ? 'text-green-600' :
                                        patient.riskCategory === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                                    }>
                                        {patient.riskCategory}
                                    </span>
                                </td>
                                <td className="p-3">{new Date(patient.lastAssessment).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientDashboardPage;