import React from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
   
  const [user, setUser] = React.useState(null) //kya cheez provide krna hai

  //value attribute we will pass the data we want to give access of
  return (
    <userContext.Provider value = {{user,setUser}}> 
      {children}
    </userContext.Provider>
  )

}

export default UserContextProvider