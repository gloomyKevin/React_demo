import React, { PureComponent } from 'react'

// 定义一个高阶组件
function enhanceRegionProps(WrapperComponent) {
    return props => {
        return <WrapperComponent {...props} region={"中国"} />
    }
}

class Home extends PureComponent {
    render() {
        const { name, level } = this.props;
        return (
            <h2>昵称:{name}, 等级:{level}, 区域:{this.props.region}</h2>
        )
    }
}

class About extends PureComponent {
    render() {
        const { name, level } = this.props;
        return (
            <h2>昵称:{name}, 等级:{level}, 区域:{this.props.region}</h2>
        )
    }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

export default class 高阶组件应用_props extends PureComponent {
    render() {
        return (
            <div>
                Root:
                <EnhanceHome name={"kevin"} level={99} />
                <EnhanceAbout name={"kevin"} level={99} />
            </div>
        )
    }
}
