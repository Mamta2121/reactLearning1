import React, {useState, useContext} from 'react'

import userContext from '../context/userContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  //const value = useContext(userContext)  //way1
  const {setUser} = useContext(userContext) //setUser was passed to userContext.Provider inside value //way2
  const handleSubmit = (e) => {

    e.preventDefault()

    setUser({username, password})
    //value.setUser({username, password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' 
      value = {username}
      onChange = { (e) => setUsername(e.target.value)}/>
      <input type="text" 
      placeholder='
      password'
      value = {password}
      onChange = { (e) => setPassword(e.target.value)}/>
      <button onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;
