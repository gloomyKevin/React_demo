import React, { Component, Fragment } from 'react'

export default class 受控组件 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }
    }
    render() {
        return (
            <Fragment onClick={e => this.submitEvent(e)}>
                <form>
                    <label htmlFor="username">
                        name:
                        <input type="text" id="username" onChange={e => this.changeEvent(e)} value={this.state.username} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </Fragment>
        )
    }
    submitEvent(event) {
        event.preventDefault();
        console.log(this.state.username);
    }

    changeEvent(event) {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
        // this.setState({
        //     usrname: this.state.value
        // })
    }

}
