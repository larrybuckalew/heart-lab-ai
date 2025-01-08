import React from 'react';

interface DataCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
      <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  );
};

export default DataCard;