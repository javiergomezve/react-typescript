import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import { Sub, SubsResponseFromApi } from './types';
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
        const fetchSubs = (): Promise<SubsResponseFromApi> => {
            return axios
                .get('http://localhost:9001/subs')
                .then(response => response.data);
        };

        const mapFromApiToSubs = (
            apiResponse: SubsResponseFromApi
        ): Array<Sub> => {
            return apiResponse.map(subFromApi => ({
                nick: subFromApi.nick,
                subMonths: subFromApi.months,
                avatar: subFromApi.profileUrl,
                description: subFromApi.description,
            }));
        };

        fetchSubs().then(mapFromApiToSubs).then(setSubs);
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
