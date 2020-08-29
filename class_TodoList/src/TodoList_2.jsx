import React, { Component, Fragment } from 'react'
import './TodoList.css'
class TodoList_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleDelete(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <input
                    className="input"
                    type="text"
                    value={this.inputValue}
                    onChange={this.handleInput.bind(this)}
                />
                <button
                    onClick={this.handleSubmit.bind(this)}
                >提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li
                                key={index}
                                onClick={this.handleDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList_2