// src/components/StoryList.tsx
import React from "react";

interface Story {
  id: number;
  type: "image" | "video";
  contentUrl: string;
  duration: number;
}

interface StoryListProps {
  stories: Story[];
  onStorySelect: (storyId: number) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onStorySelect }) => {
  return (
    <div className="story-list overflow-x-auto flex space-x-4 p-4 bg-white shadow-lg">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-thumbnail cursor-pointer"
          onClick={() => onStorySelect(story.id)}
        >
          <img
            src={story.contentUrl}
            alt={`story-${story.id}`}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default StoryList;
