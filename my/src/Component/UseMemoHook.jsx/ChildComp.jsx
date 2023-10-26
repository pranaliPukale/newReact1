import React,{useMemo} from 'react'

const ChildComp = ({num1,num2}) => {
  const result = useMemo(()=>{
       
    let sum =0;
    sum =num1 +num2;
    return sum

},[num1,num2])

  return (
    <>
    <h2>ChildComp</h2>
    <h2>Result:{result}</h2>
    </>
  )
}

export default ChildComp