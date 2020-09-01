import React, { Component } from 'react'
import TabControl from './TabControl'

export default class Tab extends Component {
    render() {
        return (
            <div>
                <TabControl titles={['新款', '精选', '流行']} />
            </div>
        )
    }
}
