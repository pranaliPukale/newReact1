
import React,{useState} from 'react'

const ControledComponent = () => {
  const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit =(e)=>{
        alert( `UserName : ${userName}, Password :${password}`)
        e.preventDefault()
    }

  return (
    <>
      
      <h4>Login Form</h4>
        <form onSubmit={handleSubmit}>
            <div className='row'>
                    <div className='five columns'>
                        <label>UserName </label>
                        <input type='text' placeholder='Enter user Name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                    </div>
            </div>
            <div className='row'>
                <div className='five columns' style={{marginTop:"20px"}}>
                    <label>Password </label>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
            <button  style={{marginTop:"20px"}} type='submit'> Login</button>
        </form>
    
    </>
  )
}

export default ControledComponent
