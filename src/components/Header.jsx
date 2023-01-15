import React from 'react'
import { NavLink } from 'react-router-dom'
import { MainHeader } from '../styles/MainHeader'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
      <img src='./images/logo.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

export default Header
