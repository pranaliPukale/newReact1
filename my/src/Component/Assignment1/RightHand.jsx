import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import ReactIntro from './ReactIntro'

function RightHand() {
  return (
    <div>
      <h1>
       <Router>
        <Routes>
          <Route exact path="/React" element={<ReactIntro/>}></Route>
        </Routes>
       </Router>
      </h1>
    </div>
  )
}

export default RightHand
