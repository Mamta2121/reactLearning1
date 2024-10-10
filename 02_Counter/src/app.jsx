
import {useState} from 'react'

function App() {
  

    //let counter = 5;
    let [counter, setCounter] =  useState(5);

  const addValue = () => {
    //counter = counter + 1;
    //setCounter(counter)

    
    setCounter ( prevCounter => prevCounter+1 )
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    /*
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    */
    console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
       <h1>Counter Value: {counter}</h1>

       <button onClick = {addValue}>Add Value {counter}</button>
       <br />
       <button onClick = {removeValue}>Remove Value {counter}</button>

       <footer>{counter}</footer>
    </>
  )
}


export default App

