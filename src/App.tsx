import "./App.css";
import StoryList from "./components/StoryList/StoryList";

const stories = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/id/1/200/200",
    username: "john_doe",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/id/2/200/200",
    username: "jane_smith",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/id/3/200/200",
    username: "bob_johnson",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/id/4/200/200",
    username: "alice_williams",
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/id/5/200/200",
    username: "charlie_brown",
  },
];

function App() {
  const handleStoryClick = (storyId: string) => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Instagram</h1>
      </header>
      <main className="App-main">
        <StoryList stories={stories} onStoryClick={handleStoryClick} />
      </main>
    </div>
  );
}

export default App;
