import React from 'react'

class ChildComp extends React.Component
{constructor(props){
    super(props)
    this.state={
        message:"welcome"
    }
}
sendMessage=()=>{
    this.props.sendDataToParentComp(this.state.message)
}
    render()
    {
        return(
            <>
            <h2>Child Component</h2>
            <button onClick={this.sendMessage}>Send message to parent comp</button>
            </>
        )
    }
}
export default ChildComp
