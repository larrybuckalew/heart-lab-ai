import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      {change !== undefined && (
        <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </p>
      )}
    </div>
  );
};

export default StatCard;