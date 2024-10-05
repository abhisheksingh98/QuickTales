import React, { useState, useEffect, useCallback } from "react";
import "./StoryViewer.css";
import { Story } from "../../hooks/useStories";

interface StoryViewerProps {
  stories: Story[];
  initialStoryId: string;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  stories,
  initialStoryId,
  onClose,
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(
    stories.findIndex((story) => story.id === initialStoryId)
  );
  const [progress, setProgress] = useState(0);

  const handlePreviousStory = useCallback(() => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
      setProgress(0);
    }
  }, [currentStoryIndex]);

  const handleNextStory = useCallback(() => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentStoryIndex, stories.length, onClose]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleNextStory();
          return 0;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [handleNextStory]);

  const currentStory = stories[currentStoryIndex];

  return (
    <div className="story-viewer">
      <div className="progress-container">
        {stories.map((_, index) => (
          <div key={index} className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width:
                  index === currentStoryIndex
                    ? `${progress}%`
                    : index < currentStoryIndex
                    ? "100%"
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>
      <div className="story-header">
        <img
          src={currentStory.imageUrl}
          alt={`${currentStory.username}'s avatar`}
          className="story-avatar"
        />
        <span className="story-username">{currentStory.username}</span>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <img
        src={currentStory.imageUrl}
        alt={`${currentStory.username}'s story`}
        className="story-image"
      />
      <div className="navigation-overlay">
        <div className="previous-area" onClick={handlePreviousStory} />
        <div className="next-area" onClick={handleNextStory} />
      </div>
    </div>
  );
};

export default StoryViewer;
