import { Sub } from '../types';

interface Props {
    subs: Sub[];
}

export default function List({ subs }: Props) {
    return (
        <ul>
            {subs.map(sub => (
                <li key={sub.nick}>
                    <img src={sub.avatar} alt={sub.nick} />
                    <h3>
                        {sub.nick} (<small>{sub.subMonths}</small>)
                    </h3>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            ))}
        </ul>
    );
}
