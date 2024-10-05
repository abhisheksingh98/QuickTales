import { render, screen, fireEvent } from "@testing-library/react";
import StoryViewer from "../components/StoryViewer/StoryViewer"; // Ensure this path is correct
import { act } from "react-dom/test-utils";

const mockStories = [
  { id: "1", imageUrl: "image1.jpg", username: "user1" },
  { id: "2", imageUrl: "image2.jpg", username: "user2" },
];

describe("StoryViewer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the initial story", () => {
    render(
      <StoryViewer
        stories={mockStories}
        initialStoryId="1"
        onClose={() => {}}
      />
    );
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByAltText("user1's story")).toBeInTheDocument();
  });

  it("moves to the next story after 5 seconds", () => {
    render(
      <StoryViewer
        stories={mockStories}
        initialStoryId="1"
        onClose={() => {}}
      />
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText("user2")).toBeInTheDocument();
  });

  it("closes the viewer when reaching the end of stories", () => {
    const mockOnClose = jest.fn();
    render(
      <StoryViewer
        stories={mockStories}
        initialStoryId="2"
        onClose={mockOnClose}
      />
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("moves to the previous story when clicking on the left side", () => {
    render(
      <StoryViewer
        stories={mockStories}
        initialStoryId="2"
        onClose={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("previous-area"));
    expect(screen.getByText("user1")).toBeInTheDocument();
  });

  it("moves to the next story when clicking on the right side", () => {
    render(
      <StoryViewer
        stories={mockStories}
        initialStoryId="1"
        onClose={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("next-area"));
    expect(screen.getByText("user2")).toBeInTheDocument();
  });
});
