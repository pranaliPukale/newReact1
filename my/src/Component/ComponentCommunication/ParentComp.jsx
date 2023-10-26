import React from 'react'
import ChildComp from './ChildComp'

class ParentComp extends React.Component{
  constructor(props){
    super(props)
    this.state={
        messageFromChild:''
     }
  }
  handleDataFromChild=(message)=>{
    this.setState({messageFromChild:message})
  }
  render(){
    return(
    <>
    <h2>Parent Component</h2>
    <h2>message from child comp:{this.state.messageFromChild}</h2>
    <h2><ChildComp sendDataToParentComp={this.handleDataFromChild}/> </h2>
    </>
  )
}
}

export default ParentComp;
