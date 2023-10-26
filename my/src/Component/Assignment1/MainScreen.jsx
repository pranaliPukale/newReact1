import React from 'react'
import LeftHand from "./LeftHand"
import RightHand from './RightHand'
function MainScreen() {
  return (
    <div>
        <div style={{ color:"red",  width:"30%"}}>
      {/*<LeftHand/>*/}
      </div>
      <div>
        <RightHand/>
      </div>
    </div>
  )
}

export default MainScreen
