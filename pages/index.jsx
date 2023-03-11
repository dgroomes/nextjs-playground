import {useState} from 'react';

function Header({title}) {
    return <h1>{title}</h1>;
}

/**
 * This example is from the Next.js docs.
 *
 * The name "HomePage" is arbitrary. While the component name is not important, it is important that this component is
 * a default export.
 */
export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="nextjs-playground"/>
            This is a "hello world" Next.js example project. Click the like button to increment the number of likes.
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
