import React, { Component } from "react"

class ComponentLife extends Component {
    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        return (
            <div>生命周期函数</div>
        )
    }
}

export default ComponentLife