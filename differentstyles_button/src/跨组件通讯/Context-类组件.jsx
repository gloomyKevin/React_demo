import React, { Component, Fragment } from 'react'

// 创建Context对象
const UserContext = React.createContext({
    nickName: "aaa",
    level: "-1"
})

// function ProfileHeader(props) {
//     return (
//         <div>
//             <h2>昵称{props.nickName}</h2>
//             <h2>等级{props.level}</h2>
//         </div>
//     )
// }

class ProfileHeader extends Component {
    render() {
        console.log(this.Context);
        return (
            <div>
                <h2>昵称{this.context.nickName}</h2>
                <h2>等级{this.context.level}</h2>

            </div>
        )
    }
}

ProfileHeader.contextType = UserContext;

function Profile(props) {
    return (
        <div>
            <ProfileHeader />
            <ul>
                <li>设置</li>
                <li>设置</li>
                <li>设置</li>
            </ul>
        </div>
    )
}

export default class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: "kevin",
            level: 99
        }
    }
    render() {
        return (
            <Fragment>
                <UserContext.Provider value={this.state}>
                    <Profile />
                </UserContext.Provider>

            </Fragment>
        )
    }
}
