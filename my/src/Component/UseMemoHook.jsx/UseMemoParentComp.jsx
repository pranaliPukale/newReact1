import React, { useState } from 'react'
import ChildComp from './ChildComp'
const UseMemoParentComp = () => {
  const [count,setCount]=useState(0)
 const incriment=()=>
 {
  setCount(count+1);
 }
  return (
    <>
    <h4>Parent Comp</h4>
    Count:{count}<button onClick={incriment}> ++</button>
    <ChildComp num1={10} num2={20}/>
    </>
  )
}
export default UseMemoParentComp
