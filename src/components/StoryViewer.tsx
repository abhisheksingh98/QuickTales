// src/components/StoryViewer.tsx
import React, { useEffect, useState } from "react";
import useStoryProgress from "../hooks/useStoryProgress";
import useStoryNavigation from "../hooks/useStoryNavigation";
import Controls from "./Controls";

interface Story {
  id: number;
  type: "image" | "video";
  contentUrl: string;
  duration: number;
}

interface StoryViewerProps {
  stories: Story[];
}

const StoryViewer: React.FC<StoryViewerProps> = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const { progress, resetProgress } = useStoryProgress(
    stories[currentStoryIndex].duration,
    () => goToNextStory()
  );
  const { goToNextStory, goToPreviousStory } = useStoryNavigation(
    currentStoryIndex,
    stories.length,
    setCurrentStoryIndex
  );

  useEffect(() => {
    resetProgress();
  }, [currentStoryIndex, resetProgress]);

  return (
    <div className="story-viewer relative w-full h-screen bg-black text-white">
      {stories[currentStoryIndex].type === "image" ? (
        <img
          src={stories[currentStoryIndex].contentUrl}
          alt="story"
          className="w-full h-full object-contain"
        />
      ) : (
        <video
          src={stories[currentStoryIndex].contentUrl}
          className="w-full h-full"
          autoPlay
          onEnded={goToNextStory}
        />
      )}
      <div className="absolute top-4 left-4">
        <div style={{ width: `${progress}%` }} className="h-2 bg-green-500" />
      </div>
      <Controls onNext={goToNextStory} onPrevious={goToPreviousStory} />
    </div>
  );
};

export default StoryViewer;
