import React from "react";
import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2023, 2, 15),
    },
    {
      id: "T-2",
      name: "Start React",
      status: "Done",
      dueDate: new Date(2023, 2, 24),
    },
    {
      id: "T-3",
      name: "Follow videos",
      status: "Done",
      dueDate: new Date(2023, 2, 26),
    },
    {
      id: "T-4",
      name: "Learn React",
      status: "In Progress",
      dueDate: new Date(2023, 2, 28),
    },
    {
      id: "T-5",
      name: "Read documentation about react",
      status: "Done",
      dueDate: new Date(2023, 2, 30),
    },
    {
      id: "T-6",
      name: "More documentation :P",
      status: "In Progress",
      dueDate: new Date(2023, 3, 2),
    },
    {
      id: "T-7",
      name: "Do homework and exercises",
      status: "Done",
      dueDate: new Date(2023, 3, 4),
    },
    {
      id: "T-8",
      name: "Progress",
      status: "In Progress",
      dueDate: new Date(2023, 3, 7),
    },
    
  ];

  return (
    <div className="app-container">
      <TaskViewer dates={data} />
    </div>
  );
}

export default App;
