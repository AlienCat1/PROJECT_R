import React, { useEffect, useState } from 'react'
import Login from './majorComponents/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginError from './majorComponents/LoginError'
// import Footer from './components/Footer'
import Header from './components/Header'
import Blog from './majorComponents/Blog'
import Community from './majorComponents/Community'
import Docs from './majorComponents/Docs'
import Error from './majorComponents/Error'
import Home from './majorComponents/Home'
import Tutorial from './majorComponents/Tutorial'
import useForceUpdate from 'use-force-update'

const App = () => {

  const forceUpdate = useForceUpdate()

  const[loggedinMode, setLoggedinMode]=useState(false)

  const handleLogout=()=>{
    localStorage.removeItem('loggedin')
  }

  useEffect(()=>{
    var user = localStorage.getItem('loggedin')
    if (user===null || user==='') {
      setLoggedinMode(false)
    } else {
      setLoggedinMode(true)
    }
  },[])
  
  return (    
    <BrowserRouter>
     {loggedinMode?
     <div>
     <Header />
     <h3>Welcome {localStorage.getItem('loggedin')}</h3><button onClick={handleLogout}>LOGOUT</button></div>:''}
        <Routes>
          <Route exact path='/' element={(loggedinMode?(<Home/>):(<Login/>))} />
          <Route exact path='/blog' element={(loggedinMode?(<Blog/>):(<LoginError/>))} />
          <Route exact path='/community' element={(loggedinMode?(<Community/>):(<LoginError/>))} />
          <Route exact path='/docs' element={(loggedinMode?(<Docs/>):(<LoginError/>))} />
          <Route exact path='/*' element={(loggedinMode?(<Error/>):(<LoginError/>))} />
          <Route exact path='/tutorial' element={(loggedinMode?(<Tutorial/>):(<LoginError/>))} />
        </Routes>
    </BrowserRouter>
  )
}

export default App