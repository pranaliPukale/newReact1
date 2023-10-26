import React, { useContext } from 'react'
import MyContext from './MyContext'

const Child3 = () => {
    const message=useContext(MyContext)
  return (
    <div>Child3
<h2>Child3</h2>
<h2>Message from Parent:{message}</h2>
    </div>
    
  )
}

export default Child3