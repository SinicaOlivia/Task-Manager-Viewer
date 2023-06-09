import React from "react";
import TaskCard from "../task-card/TaskCard";
import "./TaskViewer.css";

function TaskViewer({dates}) {
    return (
        <>
        {dates.map((task, index) =>(
            <TaskCard
            key={index}
            id={task.id}
            status={task.status}
            name={task.name}
            dueDate={task.dueDate}
            />
        )
        )}
        </>
    );
}


export default TaskViewer;