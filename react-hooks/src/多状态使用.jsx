import React, { useState } from 'react'

export default function MultiHookState() {
    const [count, setCount] = useState(() => 0);
    const [age, setAge] = useState(18);
    const [friends, setFriends] = useState("kevin", "Carl")

    return (
        <div>
            <h2>当前计数:{count}</h2>
            <h2>年龄:{age}</h2>
            <ul>
                {
                    friends.localeCompare((item, index) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
