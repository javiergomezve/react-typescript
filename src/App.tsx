import { useState, useEffect } from 'react';

import './App.css';
import { Sub } from './types';
import { getAllSubs } from './services/getAllSubs';
import List from './components/List';
import Form from './components/Form';

interface AppState {
    subs: Sub[];
    newSubsNumber: number;
}

function App() {
    const [subs, setSubs] = useState<AppState['subs']>([]);
    const [newSubsNumber, setNewSubsNumber] =
        useState<AppState['newSubsNumber']>(0);

    const handleNewSub = (newSub: Sub): void => {
        setSubs([...subs, newSub]);
        setNewSubsNumber(n => n + 1);
    };

    useEffect(() => {
        getAllSubs().then(setSubs);
    }, []);

    return (
        <div className="App">
            <h1>Subs</h1>

            <Form onNewSub={handleNewSub} />
            <List subs={subs} />
        </div>
    );
}

export default App;
