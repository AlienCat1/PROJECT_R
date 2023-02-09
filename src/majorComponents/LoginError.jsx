import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginError = () => {
  return (
    <section>
      <h2>Aww... Snap!</h2><br/>
      <p>Login to continue</p>
      <NavLink to='/user'><button>LOGIN</button></NavLink>
    </section>
  )
}

export default LoginError
