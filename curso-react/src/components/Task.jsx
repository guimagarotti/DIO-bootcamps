import React from "react";
import { CgClose, CgInfo } from "react-icons/cg"

import './Task.css';

const Task = ({task, handleIdTask, handleTaskRemove}) => {
    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div className="task-title" onClick={() => handleIdTask(task.id)}>
                {task.description}
            </div>

            <div className="container-emotes">
                <button className="remove-task" onClick={() => handleTaskRemove(task.id)}><CgClose /></button>
                
                <button className="info-task"><CgInfo/></button>
            </div>
        </div>
    )
}

export default Task;