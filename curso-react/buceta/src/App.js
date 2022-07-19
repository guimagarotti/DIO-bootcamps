import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useAuth } from "./providers/Auth";

function App() {
  const { user } = useAuth();
  
  console.log(user)
  
  return (
    <div className="App">
        <h1>Olá, mundo!</h1>
        <Profile />
        <Login />
    </div>
  );
}

export default App;
