import React, { Component } from 'react'
import TabControl from './TabControl'

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.titles = ['新款', '精选', '流行']
        this.state = {
            currentIndex: 0,
            currentTitle: "新款"
        }
    }

    render() {
        return (
            <div>
                <TabControl />
            </div>
        )
    }
}
