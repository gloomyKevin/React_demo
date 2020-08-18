import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.jsx';
import TodoList_2 from './TodoList_2.jsx'

// function tick() {
//   const ele = (
//     <div>
//       <div>时间展示</div>
//       <div>showTime:{new Date().toLocaleTimeString()}</div>
//     </div>
//   )
//   ReactDOM.render(ele, <TodoList />, document.getElementById("root"));
// }
// setInterval(tick, 1000);

ReactDOM.render(
  <TodoList_2 />,
  document.getElementById("root"));




