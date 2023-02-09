import React from 'react'
import Users from '../user.json'
import { useState } from 'react'
import { Wrapper } from '../styles/LoginWrapper'
import useForceUpdate from 'use-force-update'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'

const Login = () => {

 const forceUpdate = useForceUpdate()

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
    <section>
     <div>
         <h2 className='common-heading'>LOGIN</h2>
         <hr/>
         <div className='container'>
             <div className='login-form'>
                 <div className='login-inputs'>
                     <input type='text' placeholder='Username' value={username} onChange={e=>setUsername(e.target.value)} /> <br/>

                     <input type={displayType? 'password':'text'} placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
             
                     <Button onClick={()=>{setDisplayType(!displayType)}}>{displayType? 'Show password':'Hide password'}</Button>
                     <Button onClick={()=>{handleLogin(); forceUpdate()}}>LOGIN</Button>
                 </div>
             </div>
         </div>     
     </div><br/>
     <div>
        <NavLink to='/'>Go to Home</NavLink><br/>
        <p>New here?</p>
        <NavLink>Sign Up Now</NavLink>

     </div>
     </section>
    )
}

export default Login
