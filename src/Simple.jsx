import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Footer from './components/Footer'
// import Header from './components/Header'
import Blog from './majorComponents/Blog'
import Community from './majorComponents/Community'
import Docs from './majorComponents/Docs'
import Home from './majorComponents/Home'
import Tutorial from './majorComponents/Tutorial'

const Simple = () => {
  
  return (    
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/community' element={<Community />} />
        </Routes>
  )
}

export default Simple
