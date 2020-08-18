// const { Component, Fragment } = require("react")
import React, { Component, Fragment } from 'react'

class TodoListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         list
    //     }
    // }
    handleAddItem() {
        alert(this.props.index);
    }

    render() {
        return (
            <li
                onClick={this.handleAddItem.bind(this)}
            >{this.props.content}</li>
        )
    }
}

export default TodoListItem
