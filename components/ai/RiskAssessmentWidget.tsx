'use client';

import { useState } from 'react';
import { assessCardiacRisk } from '@/utils/ai/risk-assessment';

export default function RiskAssessmentWidget() {
  const [profile, setProfile] = useState({
    age: 45,
    gender: 'male',
    bloodPressure: { systolic: 120, diastolic: 80 },
    cholesterolLevels: { total: 200, hdl: 50, ldl: 130 },
    bloodSugar: 100,
    bodyMassIndex: 25,
    smokingStatus: false,
    familyHistory: false
  });

  const [riskLevel, setRiskLevel] = useState<string>('Calculating...');

  const calculateRisk = () => {
    const risk = assessCardiacRisk(profile);
    setRiskLevel(risk);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Cardiac Risk Assessment</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">Age</label>
          <input 
            type="number" 
            value={profile.age} 
            onChange={(e) => setProfile({...profile, age: Number(e.target.value)})}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* Add more input fields for other profile attributes */}
      </div>

      <button 
        onClick={calculateRisk}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Calculate Risk
      </button>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Risk Level: 
          <span className={`
            ml-2 
            ${riskLevel === 'Low' && 'text-green-600'}
            ${riskLevel === 'Moderate' && 'text-yellow-600'}
            ${riskLevel === 'High' && 'text-orange-600'}
            ${riskLevel === 'Very High' && 'text-red-600'}
          `}>
            {riskLevel}
          </span>
        </h3>
      </div>
    </div>
  );
}