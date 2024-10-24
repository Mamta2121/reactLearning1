//undertanding sending data and taking data from url
import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userId} = useParams(); //name of this should be same as defined in path of route
  return (
    <div >
         User: {userId}
    </div>
  )
}

export default User
