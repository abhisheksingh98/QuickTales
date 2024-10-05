import { useStories } from "../hooks/useStories";
import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";

jest.mock("../hooks/useStories"); // Ensure this path is correct

const mockStories = [
  { id: "1", imageUrl: "image1.jpg", username: "user1" },
  { id: "2", imageUrl: "image2.jpg", username: "user2" },
];

describe("App", () => {
  it("renders loading state", () => {
    (useStories as jest.Mock).mockReturnValue({
      stories: [],
      loading: true,
      error: null,
    });
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useStories as jest.Mock).mockReturnValue({
      stories: [],
      loading: false,
      error: "Error message",
    });
    render(<App />);
    expect(screen.getByText("Error: Error message")).toBeInTheDocument();
  });

  it("renders story list when stories are loaded", async () => {
    (useStories as jest.Mock).mockReturnValue({
      stories: mockStories,
      loading: false,
      error: null,
    });
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("user1")).toBeInTheDocument();
      expect(screen.getByText("user2")).toBeInTheDocument();
    });
  });
});
