import React, { Component } from 'react';
import { Fragment } from 'react';

import store from '../store';
import {
    addAction
} from '../store/actionCreators'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    render() {
        return (
            <Fragment>
                <h2>Home</h2>
                <h2>当前数据为:{this.state.counter}</h2>
                <button onClick={e => this.addEvent(1)}>+1</button>
                <button onClick={e => this.addEvent(3)}>+3</button>
            </Fragment>
        )
    }

    addEvent(num) {
        store.dispatch(addAction(num))
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        }
        )
    }

    componentWillUnmount() {
        this.subscribe();
    }
}

export default Home;