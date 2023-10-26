import React, { useState } from 'react'
import MyContext from './MyContext'
import Child1 from './Child1'

const Parent = () => {
    const [message,setMessage]=useState("Welcome to React")
  return (
    <div>Parent
        <h2>Parent</h2>
        <MyContext.Provider value={message}>
            <Child1/>
        </MyContext.Provider>

    </div>
  )
}

export default Parent