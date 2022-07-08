import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  const [tasks] = useState([
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
  
  return (
    <>
      <div className="container">
          <AddTask />
          <Tasks tasks={tasks}/>
      </div>  
    </>
  )
}

export default App;

