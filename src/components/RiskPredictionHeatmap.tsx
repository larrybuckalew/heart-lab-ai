import React from 'react';

interface RiskPredictionHeatmapProps {
  data: number[][];
}

const RiskPredictionHeatmap: React.FC<RiskPredictionHeatmapProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-10 gap-1">
      {data.map((row, i) =>
        row.map((value, j) => (
          <div
            key={`${i}-${j}`}
            className="w-8 h-8"
            style={{
              backgroundColor: `rgba(255, 0, 0, ${value})`,
            }}
          />
        ))
      )}
    </div>
  );
};

export default RiskPredictionHeatmap;