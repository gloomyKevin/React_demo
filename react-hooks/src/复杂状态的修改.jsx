import React, { useState } from 'react'

export default function ComplexHookState() {
    const [friends, setFriends] = useState(["kevin", "Carl"]);
    const [students, setStudents] = useState([
        {
            id: 110, name: "kevin", age: 18
        },
        {
            id: 112, name: "kevin", age: 30
        },
        {
            id: 114, name: "kevin", age: 40
        },
        {
            id: 116, name: "kevin", age: 50
        },
    ])

    function addFriend() {
        friends.push("gloomy");
        setFriends(friends)
    }

    function incrementAgeWithIndex(index) {
        const newStudents = [...students];
        newStudents[index].age += 1;
        setStudents(newStudents)
    }
    return (
        <div>
            <h2>好友列表:</h2>
            <ul>
                {
                    friends.map((item, index) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setFriends([...friends, "Tom"])}>添加朋友1</button>
            <button onClick={addFriend}>添加朋友2</button>

            <h2>学生列表:</h2>
            <ul>
                {
                    students.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>名字:{item.name}, 年龄:{item.age}</span>
                                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
