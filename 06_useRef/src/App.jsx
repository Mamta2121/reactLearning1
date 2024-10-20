
import './App.css'
import {useRef, useState} from 'react'

//understanding how is useRef different->It is a great example explaining what exactly is useRef and how is it different from useState
function App() {
  
  const intervalRef = useRef(0);
  const [state, setState] = useState(0);

  const handleClick = () => {

    setState(state+1)
    console.log(state)
  }

  const handleInterval = () => {
    intervalRef.current += 1
    console.log(intervalRef.current)
  }

  return (
    <>
    <h1>Hello</h1>
    <button onClick={handleClick}>US</button>
    <button onClick = {handleInterval}>UR</button>
    <p>{state}</p>
    <p>{intervalRef.current}</p> {/* Not Recommended to do this reading current value while rendering */}
    </>
  )
}

export default App
