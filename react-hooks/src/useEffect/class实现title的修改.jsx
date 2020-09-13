import React, { PureComponent } from 'react'

export default class ClassCounterChangeTitle extends PureComponent {
    componentDidMount() {
        document.title = this.state.counter
    }

    componentDidUpdate() {
        document.title = this.state.counter
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
