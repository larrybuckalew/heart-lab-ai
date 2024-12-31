'use client';

export default function AnalysisMetrics() {
  const metrics = [
    {
      label: 'Average Heart Rate',
      value: '72 BPM',
      change: '+2.3%',
      trend: 'up'
    },
    {
      label: 'Blood Pressure',
      value: '120/80',
      change: '-5%',
      trend: 'down'
    },
    {
      label: 'Oxygen Saturation',
      value: '98%',
      change: '0%',
      trend: 'neutral'
    },
    {
      label: 'ECG Rhythm',
      value: 'Normal Sinus',
      change: null,
      trend: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
          <div className="mt-1 flex items-baseline justify-between">
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            {metric.change && (
              <p className={`text-sm ${
                metric.trend === 'up' ? 'text-green-600' :
                metric.trend === 'down' ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {metric.change}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}