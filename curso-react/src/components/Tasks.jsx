import React from "react";
import Task from "./Task"

const Tasks = ({ tasks, handleIdTask }) => {
    return (
        <>
            {tasks.map((task) => (<Task task={task} handleIdTask={handleIdTask}/>))}
        </>
    );
}

export default Tasks;