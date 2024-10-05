import { render, screen, fireEvent } from "@testing-library/react";
import StoryList from "../components/StoryList/StoryList";

const mockStories = [
  { id: "1", imageUrl: "image1.jpg", username: "user1" },
  { id: "2", imageUrl: "image2.jpg", username: "user2" },
];

describe("StoryList", () => {
  it("renders all stories", () => {
    render(<StoryList stories={mockStories} onStoryClick={() => {}} />);
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("calls onStoryClick with correct id when a story is clicked", () => {
    const mockOnStoryClick = jest.fn();
    render(<StoryList stories={mockStories} onStoryClick={mockOnStoryClick} />);
    fireEvent.click(screen.getByText("user1"));
    expect(mockOnStoryClick).toHaveBeenCalledWith("1");
  });
});
