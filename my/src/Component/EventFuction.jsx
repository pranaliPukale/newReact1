import React from 'react'
import { useState } from 'react'

function EventFuction() {
    const [userName,setUserName]=useState('Reyansh')
   const  UpdateUserName=()=>{
        setUserName("Sharvi");
    }

  return (
    <div>
      <p>UserName:{userName}-<button onClick={UpdateUserName}>Update user</button></p>
    </div>
  )
}

export default EventFuction
