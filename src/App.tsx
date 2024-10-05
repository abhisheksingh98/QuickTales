import { useState } from "react";
import "./App.css";

import { useStories } from "./hooks/useStories";
import StoryList from "./components/StoryList/StoryList";
import StoryViewer from "./components/StoryViewer/StoryViewer";

function App() {
  const { stories, loading, error } = useStories();
  const [viewingStoryId, setViewingStoryId] = useState<string | null>(null);

  const handleStoryClick = (storyId: string) => {
    setViewingStoryId(storyId);
  };

  const handleCloseViewer = () => {
    setViewingStoryId(null);
  };

  if (loading) return <div className="App">Loading...</div>;
  if (error) return <div className="App">Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Instagram</h1>
      </header>
      <main className="App-main">
        <StoryList stories={stories} onStoryClick={handleStoryClick} />
      </main>
      {viewingStoryId && (
        <StoryViewer
          stories={stories}
          initialStoryId={viewingStoryId}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}

export default App;
