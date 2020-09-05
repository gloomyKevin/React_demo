import React, { Component } from 'react'
import { PureComponent } from 'react'

function withAuth(WrapperComponent) {
    return props => {
        return <WrapperComponent />
    }
}
class CartPage extends PureComponent {
    render() {
        return (
            <h2>CartPage</h2>
        )
    }
}

export default class 渲染判断鉴权 extends PureComponent {
    render() {
        return (
            <div>
                <CartPage isLogin={false} />
            </div>
        )
    }
}
