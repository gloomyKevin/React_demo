import React, { Component } from 'react'

function ProfileHeader(props) {
    return (
        <div>
            <h2>昵称{props.nickName}</h2>
            <h2>等级{props.level}</h2>
        </div>
    )
}

function Profile(props) {
    return (
        <div>
            <ProfileHeader {...props} />
            <ul>
                <li>设置</li>
                <li>设置</li>
                <li>设置</li>
            </ul>
        </div>
    )
}

export default class 跨组件通信 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: "kevin",
            level: 99
        }
    }
    render() {
        // const { nickName, level } = this.state;
        return (
            <Profile {...this.state} />
        )
    }
}
