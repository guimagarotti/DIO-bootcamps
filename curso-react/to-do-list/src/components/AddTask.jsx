import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({handleTaskAdd}) => {
    const [inputContent, setInputContent] = useState('');

    const handleInputContent = (e) => {
        setInputContent(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAdd(inputContent);
        setInputContent('');
    }
    
    return (
        <div className="add-task-container">
            <input onChange={handleInputContent} value={inputContent}   className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask;