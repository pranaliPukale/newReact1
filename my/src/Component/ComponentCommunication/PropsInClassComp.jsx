import React from "react";
class PropsInClassComp extends React.Component
{
    // eslint-disable-next-line react/require-render-return
    render()
    {
        console.log(this.props)
        return(
     <>
        <h1>Class Component</h1>
        <h2>My name:{this.props.My}</h2>
        <h2>Company Name:{this.props.company}</h2>
        <h3>Personal Details:{JSON.stringify(this.props.personObj)}</h3>
        </>)
    }
}
export default PropsInClassComp;