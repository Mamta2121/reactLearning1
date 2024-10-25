import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"
import React from "react"

import Profile from "./components/Profile"
function App() {
  

  return (
    <UserContextProvider>
      <h1>Understanding context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
