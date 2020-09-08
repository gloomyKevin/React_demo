import React, { Component } from 'react';
import { Fragment } from 'react';

import store from '../store';
import {
    addAction
} from '../store/actionCreators'

class Home2 extends Component {

    render() {
        return (
            <Fragment>
                <h2>Home</h2>
                <h2>当前数据为:{this.props.counter}</h2>
                <button onClick={e => this.subNumber(1)}>+1</button>
                <button onClick={e => this.subNumber(3)}>+3</button>
            </Fragment>
        )
    }
}

export default Home;