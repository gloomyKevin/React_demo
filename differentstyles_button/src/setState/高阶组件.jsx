import React, { Component } from 'react'
import { PureComponent } from 'react'

export default class 高阶组件 extends Component {
    render() {
        return (
            <div>
                App:{this.props.name}
            </div>
        )
    }
}

function enhanceComponent(WrappedComponent) {
    return class NewComponent extends PureComponent {
        render() {
            return <WrappedComponent />
        }
    }

    NewComponent.displayName = "Kevin";
    return NewComponent;
}

const enhanceComponent = enhanceComponent(高阶组件);