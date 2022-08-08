import { useState } from 'react';

import { Sub } from '../types';

interface FormState {
    inputValues: Sub;
}

interface FormProps {
    onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, setInputValues] = useState<FormState['inputValues']>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onNewSub(inputValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nick"
                    placeholder="nick"
                    value={inputValues.nick}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="subMonths"
                    placeholder="subMonths"
                    value={inputValues.subMonths}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="avatar"
                    placeholder="avatar"
                    value={inputValues.avatar}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="description"
                    value={inputValues.description}
                    onChange={handleChange}
                />
                <button type="submit">Save new sub</button>
            </form>
        </div>
    );
};

export default Form;
