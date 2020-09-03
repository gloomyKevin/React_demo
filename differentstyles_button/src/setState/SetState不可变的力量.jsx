import React, { Component } from 'react'

export default class SetState不可变的力量 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {
                    name: "kevin1", age: 18
                }, {
                    name: "Lily", age: 30
                }, {
                    name: "Lucy", age: 40
                }
            ]
        }
    }

    render() {
        const { friends } = this.state;
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        friends.map((item, index) => {
                            return (
                                <li key={item.name}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => this.insertData()}>添加数据</button>
            </div>
        )
    }

    insertData() {
        console.log('click')
    }
}
