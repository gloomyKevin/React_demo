import React, { Fragment } from 'react';
import './App.css';
import Button from "./Button"
import Father_to_son from './父传子通信-属性验证';
import Son_to_Father from './子传父通信';

function App() {
  return (
    <Fragment>
      <Button>
        默认按钮
    </Button>
      <Father_to_son />
      <Son_to_Father />
    </Fragment>
  );
}

export default App;
