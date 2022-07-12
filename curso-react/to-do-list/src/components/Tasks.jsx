import React from "react";
import Task from "./Task"

const Tasks = ({ tasks, handleIdTask, handleTaskAdd, handleTaskRemove }) => {
    return (
        <>
            {tasks.map((task) => (
            <Task 
            task={task} 
            handleIdTask={handleIdTask}
            handleTaskAdd={handleTaskAdd}
            handleTaskRemove={handleTaskRemove}
            />))}
        </>
    );
}

export default Tasks;