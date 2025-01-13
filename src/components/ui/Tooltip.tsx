import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {text}
        </div>
      )}
    </div>
  );
}