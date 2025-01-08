import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

interface RiskDistributionProps {
    lowRisk: number;
    mediumRisk: number;
    highRisk: number;
}

const RiskDistributionChart: React.FC<RiskDistributionProps> = ({ 
    lowRisk, 
    mediumRisk, 
    highRisk 
}) => {
    const data = [
        { name: 'Low Risk', value: lowRisk },
        { name: 'Medium Risk', value: mediumRisk },
        { name: 'High Risk', value: highRisk }
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Risk Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RiskDistributionChart;