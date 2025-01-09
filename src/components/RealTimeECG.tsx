'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RealTimeECG = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    time: i,
    value: Math.sin(i * 0.2) * Math.sin(i * 0.05)
  }));

  return (
    <div className='w-full h-64 p-4 bg-white rounded-lg shadow'>
      <h2 className='text-lg font-bold mb-2'>ECG Monitor</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey='time' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='value' stroke='#8884d8' dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeECG;