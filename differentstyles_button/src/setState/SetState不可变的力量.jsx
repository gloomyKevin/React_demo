import React, { Component } from 'react'

export default class SetState不可变的力量 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
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
        const { list } = this.state;
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        list.map((item, index) => {
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
        console.log('click');

        // 错误的做法
        // const newPerson = { name: "Tom", age: 18 }
        // this.state.list.push(newPerson);
        // this.setState({
        //     list: this.state.list
        // })

        // 正确的做法
        // const newPerson = { name: "Tom", age: 18 }
        // const newList = [...list];
        // newList.push(newPerson);
        // this.setState({
        //     list: newList
        // })
    }

}
