import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to='/docs' className=''>Docs</NavLink>
          </li>
          <li>
            <NavLink to='/tutorial' className=''>Tutorial</NavLink>
          </li>
          <li>
            <NavLink to='/blog' className=''>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/community' className=''>Community</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
