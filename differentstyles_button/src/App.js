import React, { Fragment } from 'react';
import './App.css';
import Button from "./Button"
import Father_to_son from './父传子通信-属性验证';
import Son_to_Father from './子传父通信';
import Tab from './组件通信案例TabControl/Tab';
import './组件通信案例TabControl/style.css'
import 跨组件通信 from './跨组件通讯/跨组件通信';
import Context from './跨组件通讯/Context-类组件';
import WhyUsesetState from './setState/为什么使用setState';

function App() {
  return (
    <Fragment>
      <Button>
        默认按钮
    </Button>
      <Father_to_son />
      <Son_to_Father />
      <Tab />
      <跨组件通信 />
      <Context />
      <WhyUsesetState />
    </Fragment>
  );
}

export default App;
