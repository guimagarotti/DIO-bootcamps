import React from "react";
import { useParams } from "react-router";

import Button from "./Button";
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();    
    return (
        <>
            <div className="back-button">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p>{params.taskTitle}</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum aliquam officiis vel, debitis quo?
                </p>
            </div>
        </>
    )
}

export default TaskDetails;