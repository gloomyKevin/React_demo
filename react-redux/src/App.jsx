import React, { Component } from 'react';
import { Fragment } from 'react';

import store from './store/index';
import {
  addAction,
  subAction
} from './store/actionCreators'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h2>Home</h2>
        <h2>当前数据为:</h2>
        <button>+1</button>
        <button>+3</button>
      </Fragment>
    )
  }
}


class Page extends Component {
  render() {
    return (
      <Fragment>
        <hr />
        <h2>Page</h2>
        <h2>当前数据为:</h2>
        <button>-2</button>
        <button>-4</button>
      </Fragment>
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