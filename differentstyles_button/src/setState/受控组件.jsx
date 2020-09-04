import React, { Component } from 'react'

export default class 受控组件 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="username">
                        名字:
                        <input type="text" id="username" />
                    </label>
                    <input type="submit" value="" 提交 />
                </form>
            </div>
        )
    }
}
