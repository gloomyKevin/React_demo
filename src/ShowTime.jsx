import React, { Component, Fragment } from "react";

class ShowTime extends Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}

// ReactDOM.render(<ShowTime />, mountNode);
export default ShowTime