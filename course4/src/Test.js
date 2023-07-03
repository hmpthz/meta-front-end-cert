import { useState } from 'react';

export default function Test() {
    const [val, setVal] = useState(0);
    console.log('re-render');

    return (
        <div>
            <p>{val}</p>
            <button onClick={() => setVal(1)}>SetOne</button>
        </div>
    )
}