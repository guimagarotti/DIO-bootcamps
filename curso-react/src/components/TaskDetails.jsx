import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import Button from "./Button";
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams(); 
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
 
    return (
        <>
            <div className="back-button">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
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