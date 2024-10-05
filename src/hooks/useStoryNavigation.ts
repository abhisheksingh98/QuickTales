// src/hooks/useStoryNavigation.ts
import { useCallback } from "react";

interface UseStoryNavigation {
  goToNextStory: () => void;
  goToPreviousStory: () => void;
}

const useStoryNavigation = (
  currentIndex: number,
  storyCount: number,
  setCurrentStoryIndex: React.Dispatch<React.SetStateAction<number>>
): UseStoryNavigation => {
  const goToNextStory = useCallback(() => {
    if (currentIndex < storyCount - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, storyCount, setCurrentStoryIndex]);

  const goToPreviousStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentIndex, setCurrentStoryIndex]);

  return { goToNextStory, goToPreviousStory };
};

export default useStoryNavigation;
