import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setCount(old => old + 1);
  }

  function toggleClick() {
    setClicked(old => !old);
  }
  
  // run some code as a side effect
  useEffect(() => {
    document.title = "Effects page";
  }, [/* dependency array, looks for dependencies on each render. if empty, renders only once ever. */]);

  return (
    <>
      <h1>This is my effects page.</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
      <button onClick={toggleClick}>Click me! {clicked.toString()}</button>
    </>
  )
}
export default App
