import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(10);

  // let count = 20;

  function addValue(){
    // console.log('value increased')
    if(count < 20){
      setCount(count+1);
    }
  }

const removeValue = () =>{
  if(count > 0){
    setCount(count-1)
  }
}

  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={
        addValue
      }>Increase counter</button>
      <br />

      <button onClick={
        removeValue
      }>Increase counter</button>

      <footer>{count}</footer>
    </>
  )
}

export default App
