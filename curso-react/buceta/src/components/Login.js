import React, { useState } from "react";
import { useAuth } from "../providers/Auth";

const Login = () => {
    const [input, setInput] = useState({
        nome: "",
    })
    const { setUser } = useAuth();

    const handleLogin = () => {
       localStorage.setItem('user', JSON.stringify(input))
        setUser(input)
    }
    
    const handleLogout = () => {
       localStorage.removeItem('user', JSON.stringify(input))
        setUser({
            name: "",
        })
    }

    return (
        <>
            <input type="text" onChange={(e) => setInput({nome: e.target.value})} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )



}

export default Login;