import { useMemo, useState } from 'react';

const App4 = () => {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState('');

    const doubleNumber = useMemo(() => {
        return badFunction(number);
    }, [number])

    return (
        <div>
            <p>{number}</p>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => setNumber(2)}>Add</button>
            <p>text: {text}</p>
        </div>
    )
}

const badFunction = (num) => {
    console.log("Bad Function is being called!")
    for (let i = 0; i <= 10000; i++) {
        return num * 2;
    }
}

export default App4;