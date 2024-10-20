
import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =  useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook 
  const passwordRef = useRef(null)

  //memoization concept->Optimise
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if( charAllowed) str += "!@#$%^&*_-+=[]{}~`"

    for( let i = 1; i <= length; i++)
    {
       let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass) //
  }, [length, numberAllowed, charAllowed, setPassword])
  
  //passwordGenerator()-> Cannot directly call it

  useEffect( ()=>{
    passwordGenerator();
  }, [length,numberAllowed,charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback ( ()=>{

        //give some effect when copy is clicked->Highlighting the password text or input field
         passwordRef.current?.select();
         passwordRef.current?.setSelectionRange(0,3)


         window.navigator.clipboard.writeText(password)
  }, [password])  //dependency array

  return (
    <>
    <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' > Test</div>

<div className = 'flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"  value = {password} className = 'outline-none w-full py-1 px-3'
   placeholder = 'password' readOnly 
   ref = {passwordRef}/>
</div>
   <button 
   onClick = {copyPasswordToClipboard}
   className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

   <div>
    <div className = 'flex text-sm gap-x-2'>
      <div className = 'flex items-center gap-x-1'>
        <input type="range"
        min = {6}
        max = {100}
        value = {length}
        className = 'cursor-pointer' 
        onChange = {(e) => {setLength(e.target.value)}}
        />
        <label > length: {length}</label>
      </div>
      <div className = "flex items-center gap-x-1">
        <input type="checkbox"
           defaultChecked = {numberAllowed} 
           id = "numberInput"
           onChange={()=>{
            setNumberAllowed ((prev)=> !prev);
           }}/>
           <label htmlFor="numberInput">Numbers</label>

      </div>

      <div className = "flex items-center gap-x-1">
        <input type="checkbox"
           defaultChecked = {charAllowed} 
           id = "numberInput"
           onChange={()=>{
            setCharAllowed ((prev)=> !prev);
           }}/>
           <label htmlFor="charInput">Characters</label>

      </div>
    </div>
   </div>
    </>
  )
}

export default App
