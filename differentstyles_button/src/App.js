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
import setState是异步更新 from './setState/setState是异步更新';
import setState数据的合并 from './setState/setState数据的合并';
import 列表中keys的作用 from './setState/列表中keys的作用';
import 高阶组件memo from './setState/高阶组件memo';
import SetState不可变的力量 from './setState/SetState不可变的力量.jsx';
import Ref from './setState/Ref';

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
      <setState是异步更新 />
      <setState数据的合并 />
      <列表中keys的作用 />
      <高阶组件memo />
      <SetState不可变的力量 />
      <Ref />
    </Fragment>
  );
}

export default App;
