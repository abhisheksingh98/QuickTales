// src/components/Story.tsx
import React, { useRef, useEffect } from "react";

interface StoryProps {
  type: "image" | "video";
  contentUrl: string;
  onVideoEnd?: () => void;
}

const Story: React.FC<StoryProps> = ({ type, contentUrl, onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video automatically when it's rendered
  useEffect(() => {
    if (type === "video" && videoRef.current) {
      videoRef.current.play();
    }
  }, [type]);

  return (
    <div className="story">
      {type === "image" ? (
        <img src={contentUrl} alt="Story content" className="story-image" />
      ) : (
        <video
          ref={videoRef}
          src={contentUrl}
          className="story-video"
          onEnded={onVideoEnd}
          controls={false}
        />
      )}
    </div>
  );
};

export default Story;
