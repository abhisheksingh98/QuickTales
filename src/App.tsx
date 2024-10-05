// src/App.tsx
import React, { useEffect, useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";

interface Story {
  id: number;
  type: "image" | "video";
  contentUrl: string;
  duration: number;
}

const App: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch stories from an external JSON file in the public folder
    fetch("/stories.json")
      .then((response) => response.json())
      .then((data: Story[]) => setStories(data))
      .catch((error) => console.error("Failed to load stories:", error));
  }, []);

  const handleStorySelect = (storyId: number) => {
    setSelectedStoryId(storyId);
  };

  const handleCloseViewer = () => {
    setSelectedStoryId(null);
  };

  return (
    <div className="app-container flex flex-col items-center bg-gray-100 h-screen">
      {selectedStoryId === null ? (
        // Display the horizontal story list if no story is selected
        <StoryList stories={stories} onStorySelect={handleStorySelect} />
      ) : (
        // Display the story viewer for the selected story
        <StoryViewer stories={stories} />
      )}
      {/* Close button for returning to the story list */}
      {selectedStoryId !== null && (
        <button
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-md"
          onClick={handleCloseViewer}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default App;
