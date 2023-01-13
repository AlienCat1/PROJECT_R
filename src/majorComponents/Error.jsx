import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <img src='./images/error.webp' alt='error' className='error' />
      <NavLink to='/'>
        <button className='btn'>Go Back</button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .error {
    width: 25%;
  }
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`


export default Error