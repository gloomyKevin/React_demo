import React, { Component } from 'react'

export default class Son_to_Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h2>当前计数{counter}</h2>
                {/* <button onClick={e => this.increment()}>+</button> */}
                <CounterButton btnClick={e => this.increment()} />
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

class CounterButton extends Component {
    render() {
        const { btnClick } = this.props;
        return (
            <button onClick={btnClick}>+1</button>
        )
    }
}
