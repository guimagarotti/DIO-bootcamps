import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import './Task.css';

const Task = ({task, handleIdTask, handleTaskRemove}) => {
    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    
    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
            <div className="task-title" onClick={() => handleIdTask(task.id)}>
                {task.title}
            </div>

            <div className="container-emotes">
                <button className="remove-task" onClick={() => handleTaskRemove(task.id)}><CgClose /></button>
                
                <button className="info-task" onClick={handleTaskDetailsClick}><CgInfo/></button>
            </div>
        </div>
    )
}

export default Task;