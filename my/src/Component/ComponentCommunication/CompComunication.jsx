import React from 'react'

 const CompComunication = (props) => {
    console.log(props);
    console.log("Hello");
    const {My,company,personObj}=props
    return (
        <div>
            <h1>Functional Component</h1>
            <h3>My Name={My}</h3>
            <h3>Company Name:{company}</h3>
            <h3>Person object:{JSON.stringify(personObj)}</h3>
        </div>
    )
}
export default CompComunication;