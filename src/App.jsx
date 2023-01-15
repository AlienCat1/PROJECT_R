import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Footer from './components/Footer'
import Header from './components/Header'
import Blog from './majorComponents/Blog'
import Community from './majorComponents/Community'
import Docs from './majorComponents/Docs'
import Error from './majorComponents/Error'
import Home from './majorComponents/Home'
import Tutorial from './majorComponents/Tutorial'
import useForceUpdate from 'use-force-update'
import Users from './user.json'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { Wrapper } from './styles/LoginWrapper'
import { GlobalStyle } from './styles/GlobalStyle'
import { Button } from './styles/Button'

const App = () => {

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

  const handleLogout=()=>{
    localStorage.removeItem('loggedin')
  }

  var user = localStorage.getItem('loggedin')
    if (user===null || user==='') {
      return(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        <Wrapper>
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
        </Wrapper>
        </ThemeProvider>
      )
    } else {
      return(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        <BrowserRouter>
          <div>
           <Header />
           <div className='welcome'>
             <a>Welcome {localStorage.getItem('loggedin')}</a>
             <Button onClick={()=>{handleLogout(); forceUpdate()}}>LOGOUT</Button>
           </div>
          </div>
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/blog' element={<Blog/>} />
           <Route path='/community' element={<Community/>} />
           <Route path='/docs' element={<Docs/>} />
           <Route path='/*' element={<Error/>} />
           <Route path='/tutorial' element={<Tutorial/>} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
      )
    }
}

export default App