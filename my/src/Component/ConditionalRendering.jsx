
import React,{useState} from 'react'

const ConditionalRendernig = () => {
    
    const [isLoggedIn, setIsloggedIn] = useState(true)
 
    //1. ------------------conditional rendering using if/else statements
    // if(isLoggedIn){
    //     return <Login/>
    // }else{
    //     return <SignUp/>
    // }
  
    //2. ------------------conditional rendering using variable
     
    // let tempComponent;
    // if(isLoggedIn){
    //     tempComponent = <Login/>
    // }else{
    //     tempComponent = <SignUp/>
    // }
    //  return tempComponent

    //3. conditional redering using ternary operator  
    // return isLoggedIn ? <Login/> : <SignUp/>


    //4. conditional redering using short circuit

    return isLoggedIn && <Login/>
 
}

const Login =()=>{
    return(
        <>
          <h5>Login </h5>
          <p>User Name : <input type="text" /></p>
          <p>Password : <input type="text" /></p>
        </>
    )
}
const SignUp =()=>{
    return(
        <>
          <h5>Sign Up </h5>
          <p>Enter User Name : <input type="text" /></p>
          <p>Password : <input type="text" /></p>
          <p>email : <input type="text" /></p>
          <p>Mobile number : <input type="text" /></p>
        </>
    )
}

export default ConditionalRendernig


