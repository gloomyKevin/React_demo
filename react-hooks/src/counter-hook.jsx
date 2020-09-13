import React, { useState } from 'react'

export default function Counter_hook() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <h2>当前计数{count}</h2>
                <button onClick={e => setCount((prevCount) => prevCount + 1)}>+1</button>
                <button onClick={e => setCount(count - 1)}>-1</button>
            </div>
        </div >
    )
}
