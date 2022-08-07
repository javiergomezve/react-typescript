import { useState } from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState(6);

    const changeNumber = () => {
        setNumber(2);
    };
    return (
        <div className="App">
            <p>{number}</p>
            <button onClick={changeNumber}>Change number</button>
        </div>
    );
}

export default App;
