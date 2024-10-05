// src/components/Controls.tsx
import React from "react";

interface ControlsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="controls absolute inset-0 flex items-center justify-between p-4">
      <div className="previous cursor-pointer" onClick={onPrevious} />
      <div className="next cursor-pointer" onClick={onNext} />
    </div>
  );
};

export default Controls;
