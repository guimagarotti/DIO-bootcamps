import { useCallback, useState } from "react";

import List from "./component/List";

const App = () => {
    const [text, setText] = useState();
    const [resourceType, setResourceType] = useState();

    const getAPI = useCallback(async () => {
        console.log("Getting API!");
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)

        const responseJSON = await response.json();
        return responseJSON;       
    }, [resourceType])

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            <button onClick={() => setResourceType("todos")}>To-dos</button>

            <List getAPI={getAPI} />
        </div>
    )
}

export default App;