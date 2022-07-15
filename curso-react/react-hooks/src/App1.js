import './App.css';
import { useState, useEffect } from "react";

const App1 = () => {
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJSON = await response.json();
      
      setItems(responseJSON);
    }

    // fetchResourceTypes();
  }, [resourceType]);

  useEffect(() => {
    // componentDidMount
    console.log("componentDidMount");
  }, [])

  const handleResourceType = (resourceType) => {
    setResourceType(resourceType);
  }

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => handleResourceType("posts")}>Posts</button>
        <button onClick={() => handleResourceType("comments")}>Comments</button>
        <button onClick={() => handleResourceType("to-dos")}>to-dos</button>
      </div>

      {items.map((item) => <p>{item.id}</p>)}
    </div>
  )
}

export default App1;
