// src/hooks/useStoryProgress.ts
import { useEffect, useState, useCallback } from "react";

interface UseStoryProgress {
  progress: number;
  resetProgress: () => void;
}

const useStoryProgress = (
  duration: number,
  onComplete: () => void
): UseStoryProgress => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      onComplete();
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => prev + 100 / (duration / 1000));
    }, 100);

    return () => clearInterval(interval);
  }, [progress, duration, onComplete]);

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  return { progress, resetProgress };
};

export default useStoryProgress;
