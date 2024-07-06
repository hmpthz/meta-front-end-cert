import { default as React, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);
  function toggleComponent() {
    setToggle(prev => !prev);
  }

  return (
    <div className="App">
      <button onClick={toggleComponent}>Toggle</button>
      {toggle ? <MemoTest></MemoTest> : null}
    </div>
  )
}

const MemoTest = React.memo(Test);

function Test() {
  const [val, setVal] = useState(0);
  const refVal = useRef<number>();
  function changeVal() {
    setVal(1);
  }

  useEffect(() => {
    refVal.current = val;
    console.log('ref now:', refVal.current);
  }, [val]);
  console.log('ref:', refVal.current);

  return (
    <div>
      <p>Test: {val}</p>
      <button onClick={changeVal}>Change Val</button>
    </div>
  )
}

export default App
