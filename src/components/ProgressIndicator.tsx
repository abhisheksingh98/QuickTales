// src/components/ProgressIndicator.tsx
import React from "react";

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  return (
    <div className="progress-indicator">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressIndicator;
