import { useEffect, useState } from 'react';

import './App.css';
import { Sub } from './types';
import List from './components/List';
import Form from './components/Form';

interface AppState {
    subs: Sub[];
}

const INITIAL_STATE = [
    {
        nick: 'dapelu',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=dapelu',
        description: 'Moderator',
    },
    {
        nick: 'javiergomezve',
        subMonths: 12,
        avatar: 'https://i.pravatar.cc/150?u=javiegomezve',
    },
];

function App() {
    const [subs, setSubs] = useState<AppState['subs']>([]);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    });

    const handleNewSub = (newSub: Sub): void => {
        setSubs([...subs, newSub]);
    };

    return (
        <div className="App">
            <h1>Subs</h1>

            <Form onNewSub={handleNewSub} />
            <List subs={subs} />
        </div>
    );
}

export default App;
