import React from 'react'
const ChildCompFunction = (props) => {
     const Message=("Welcome");
    const  sendMessge=()=>{
       props.sendDataToParentComp(Message);     
   }
  return (
    <div>
      <>Child Component</>
      <button onClick={sendMessge}>Send message to Parent</button>
    </div>
  )
}
export default ChildCompFunction
