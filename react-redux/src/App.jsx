import React, { Component } from 'react';
import { Fragment } from 'react';

import store from './store';
import {
  addAction,
  subAction
} from './store/actionCreators'

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
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    }
    )
  }
}


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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <Fragment>
        <Home />
        <Page />
      </Fragment>
    );
  }
}

export default App;