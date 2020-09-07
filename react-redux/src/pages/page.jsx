import React, { Component } from 'react';
import { Fragment } from 'react';

import store from '../store';
import {
    subAction
} from '../store/actionCreators'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    render() {
        return (
            <Fragment>
                <hr />
                <h2>Page</h2>
                <h2>当前数据为:{this.state.counter}</h2>
                <button onClick={e => this.subEvent(2)}>-2</button>
                <button onClick={e => this.subEvent(4)}>-4</button>
            </Fragment>
        )
    }

    subEvent(num) {
        store.dispatch(subAction(num))
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        }
        )
    }
}

export default Page;