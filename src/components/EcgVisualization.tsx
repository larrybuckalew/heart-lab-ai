import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const EcgVisualization = ({ data }: { data: any[] }) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Line type="monotone" dataKey="value" stroke="#ff0000" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EcgVisualization;