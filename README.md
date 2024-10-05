# QuickTales

QuickTales is a React application designed to showcase stories through a beautifully crafted user interface. This application features a **StoryList** component that displays a collection of stories, and a **StoryViewer** component for a detailed view of each story. The application utilizes a custom hook to manage state and fetch images from a local JSON server.

## Table of Contents
- [Features](#features)
- [Components](#components)
  - [StoryList](#storylist)
  - [StoryViewer](#storyviewer)
- [Custom Hook](#custom-hook)
- [JSON Server Setup](#json-server-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [License](#license)

## Features
- **Responsive Design:** The application is built with a focus on clean, user-friendly interfaces.
- **Dynamic Story Loading:** Stories are dynamically loaded using a custom hook, ensuring a smooth user experience.
- **Image Serving:** Utilizes a JSON server to serve images locally, allowing for easy development and testing.
- **Comprehensive Testing:** Includes unit tests for key components to ensure reliability and maintainability.

## Components

### StoryList
The `StoryList` component displays a list of stories fetched from the server. Each story is represented with an image and the username of the author. Users can click on a story to view more details in the `StoryViewer`.

### StoryViewer
The `StoryViewer` component displays the full details of a selected story, including the image and any additional information. It enhances the user experience by providing a focused view of each story.

## Custom Hook
The application features a custom hook, `useStories`, that manages the fetching and state of story data. This hook handles loading, error states, and provides the necessary data to the components.

## JSON Server Setup
To serve images locally, a JSON server is set up. Follow these steps to run the server:

1. **Start the JSON Server:**
   Run the following command to start the server:
   ```bash
   npm run server
2. **Access Images:**
   The server will be available at `http://localhost:3001/images`, where you can view the images served.

## Running the Application
To run the QuickTales application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/abhisheksingh98/QuickTales.git

2. Navigate into the project directory:
   ```bash
   cd QuickTales

3. Install the dependencies:
   ```bash
   yarn install

4. Run the db server
   ```bash
   yarn server

5. Start the application:
   ```bash
   yarn dev

# Testing
To run the tests for the components, use the following command:

  ```bash
  yarn test

