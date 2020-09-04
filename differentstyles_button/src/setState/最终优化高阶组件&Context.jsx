import React, { PureComponent, createContext } from 'react';

// 定义一个高阶组件
function withUser(WrapperComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrapperComponent {...props} {...user} />
                    }
                }
            </UserContext.Consumer>
        )
    }
}

// 创建Context
const UserContext = createContext({
    nickname: "默认",
    level: -1,
    区域: "中国"
});
class Home extends PureComponent {
    render() {
        return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
    }
}

class About extends PureComponent {
    render() {
        return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
    }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

class 高阶组件_Context extends PureComponent {
    render() {
        return (
            <div>
                App
                <UserContext.Provider value={{ nickname: "why", level: 90, region: "中国" }}>
                    <UserHome />
                    <UserAbout />
                </UserContext.Provider>
            </div>
        )
    }
}

export default 高阶组件_Context

