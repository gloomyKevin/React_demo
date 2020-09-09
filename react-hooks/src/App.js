import React from 'react'
import Counter_class from './counter-class'
import Counter_hooks from './counter-hooks'
import Counter_hook from './counter-hook'
import MultiHookState from './多状态使用'
import ComplexHookState from './复杂状态的修改'

export default function App() {
  return (
    <div>
      {/* <Counter_class /> */}
      {/* <Counter_hooks /> */}
      {/* <Counter_hook /> */}
      {/* <MultiHookState /> */}
      <ComplexHookState />
    </div>
  )
}
