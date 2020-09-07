import React, { Component } from 'react';
import { Fragment } from 'react';
import Home from './pages/home'
import Page from './pages/page'
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