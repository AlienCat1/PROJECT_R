import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { Wrapper } from '../styles/HomeSectionWrapper'
import { useGlobalContext } from './Context'

const HomeSection = () => {
  const {pageData} = useGlobalContext()
  return (
    <Wrapper>
      <div className='home-mainheading'>
        <h1>React</h1>
        <h3>A JavaScript library for building user interfaces</h3><br/>
        <div className='grid-two-column'>
          <div>
            <Button><NavLink to='/docs'>Get Started</NavLink></Button>
          </div>
          <div className='home-tutorialnavlink'>
            <NavLink to='/tutorial'>Take the Tutorial</NavLink>
          </div>
        </div>
      </div>
      <div className='container grid grid-three-column'>
        {
          pageData.map((curElem)=>{
            return(
              <div>
                <div key={curElem.id}>
                <h3>{curElem.heading}</h3><br/><br/>
                <p>{curElem.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export default HomeSection
