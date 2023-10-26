import React, { useState } from 'react'
import ChildCompFunction from './ChildCompFunction'
const ParentCompFunction = () => {
    const [msg,setMsg]=useState(' ')
   const hendleDataFromChild=(msg)=>
    {
        setMsg({setMsg:msg})
    }
  return (
    <div>
<h2>Parent Component</h2>
<h2>Message from Child:{setMsg}</h2>
<h2><ChildCompFunction sendDataToParentComp={hendleDataFromChild}/></h2>
    </div>
  )
}
export default ParentCompFunction
