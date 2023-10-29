import React from 'react'

const UnControledComponent = () => {

    const userNameRef =React.createRef()
    const passwordRef =React.createRef()

    const handleSubmit =(e)=>{
        alert( `UserName : ${userNameRef.current.value}, Password :${passwordRef.current.value}`)
        e.preventDefault()
    }
  return (
    <>
        <div>
            <h4>Login Form </h4>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='five colums'>
                        <label>User Name</label>
                        <input type="text" placeholder='Enter username' ref={userNameRef}/>
                    </div>
                </div>
                <div className='row' style={{marginTop:"20px"}}>
                    <div className='five colums'>
                        <label>Password</label>
                        <input type="text" placeholder='Enter password' ref={passwordRef} />
                    </div>
                </div>
                <button type='submit'style={{marginTop:"20px"}}>Login</button>
            </form>
        </div>
    </>
  )
}

export default UnControledComponent
