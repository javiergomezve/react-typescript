import { Sub } from '../types';
import useNewSubForm from '../hooks/useNewSubForm';
interface FormProps {
    onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewSubForm();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: 'change_value',
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value,
            },
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onNewSub(inputValues);
        handleClear();
    };

    const handleClear = () => {
        dispatch({ type: 'clear' });
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
                <button onClick={handleClear} type="button">
                    Clear form
                </button>
                <button type="submit">Save new sub</button>
            </form>
        </div>
    );
};

export default Form;
