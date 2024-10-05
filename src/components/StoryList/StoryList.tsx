import React from "react";
import "./StoryList.css";

interface Story {
  id: string;
  imageUrl: string;
  username: string;
}

interface StoryListProps {
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onStoryClick }) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-item"
          onClick={() => onStoryClick(story.id)}
        >
          <div className="story-ring">
            <img
              src={story.imageUrl}
              alt={`${story.username}'s story`}
              className="story-image"
            />
          </div>
          <span className="username">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
