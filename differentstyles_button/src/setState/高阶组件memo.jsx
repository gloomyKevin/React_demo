import React, { Component, Fragment } from 'react'
import { PureComponent } from 'react'
import { memo } from 'react'

const MemoHeader = memo(
    function Header() {
        console.log('Header被调用');
        return <div>我是Header组件</div>
    }
)


export function Main() {
    console.log('Main被调用');
    return <div>我是Main组件</div>
}

const MemoFooter = memo(
    function Footer() {
        console.log('Footer被调用');
        return <div>我是Footer组件</div>
    }
)

export default class 高阶组件memo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        const { counter } = this.state;
        return (
            <Fragment>
                <div>{counter}</div>
                <button onClick={e => this.increment()}>+1</button>
                <MemoHeader />
                <Main />
                <MemoFooter />
            </Fragment>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}