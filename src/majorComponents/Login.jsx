import React from 'react'
import { useState } from 'react'
import Users from '../user.json'

const Login = () => {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[displayType, setDisplayType] = useState(true)

    const handleLogin = () => {
      const auth = Users.filter(curElem=>curElem.username===username)
        if (auth.length!==0) {
          if (auth[0].password===password) {
            localStorage.setItem('loggedin', username)
            setUsername('')
            setPassword('')
          }else{
            alert('Invalid Password!')
          }
        }else{
          alert('No User Found!')
        }
    }

  return (
    <>
      <h2>LOGIN</h2>
      <hr/>
      <input type='text' placeholder='Username' value={username} onChange={e=>setUsername(e.target.value)} /> <br/>

      <input type={displayType? 'password':'text'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={()=>{setDisplayType(!displayType)}}>{displayType? 'Show':'Hide'}</button> <br/>

      <button onClick={handleLogin}>LOGIN</button>
    </>
  )
}

export default Login