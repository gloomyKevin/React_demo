import React, { Component } from 'react'

export default class WhyUsesetState extends Component {
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
                <h2>当前计数:{counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
}
