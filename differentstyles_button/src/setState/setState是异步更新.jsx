import React, { Component } from 'react'

export default class setState是异步更新 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "旧的文本"
        }
    }
    render() {
        const { message } = this.state;
        return (
            <div>
                <h2>currentText:{message}</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        )
    }

    changeText() {
        this.setState({
            message: "text2"
        })
        console.log(this.state.message)
    }
}
