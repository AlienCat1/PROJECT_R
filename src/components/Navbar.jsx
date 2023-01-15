import React from 'react'
import {NavLink} from 'react-router-dom'
import { Nav } from '../styles/Nav'

const Navbar = () => {
  return (
    <Nav>
      <div className='page'>
        <ul className='navbar-list'>
          <li>
            <NavLink to='/docs' className='navbar-link'>Docs</NavLink>
          </li>
          <li>
            <NavLink to='/tutorial' className='navbar-link'>Tutorial</NavLink>
          </li>
          <li>
            <NavLink to='/blog' className='navbar-link'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/community' className='navbar-link'>Community</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar
