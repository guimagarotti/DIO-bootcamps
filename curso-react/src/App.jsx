import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Jogar futebol",
      completed: false,
    },
    {
      id: 2,
      description: "Ler livros",
      completed: true,
    }
  ]);

  const handleIdTask = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id === taskId) return {...task, completed: !task.completed}

        return task;
    })

    setTasks(newTasks);
  }

  const handleTaskAdd = (taskTitle) => {
      const newTasks = [...tasks, {
        description: taskTitle,
        id: uuidv4(),
        completed: false
      }]

      setTasks(newTasks);
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks);
  }
  
  return (
    <Router>
      <div className="container">
          <Header />
          <Route path="/" exact render={() => {
            return (
              <>
                <AddTask handleTaskAdd={handleTaskAdd}/>
                <Tasks 
                  tasks={tasks} 
                  handleIdTask={handleIdTask}
                  handleTaskRemove={handleTaskRemove}
                />
              </>
            )
          }}/>
          <Route path="/:taskTitle" exact component={TaskDetails}/>      
      </div>  

    </Router>
  )
}

export default App;

