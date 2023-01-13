import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './Context'

const HomeSection = () => {
  const {pageData} = useGlobalContext()
  return (
    <section>
      <div>
        <h1>React</h1>
        <h3>A JavaScript library for building user interfaces</h3>
        <div>
          <div>
            <button>Get Started</button>
          </div>
          <div>
            <NavLink>Take the Tutorial</NavLink>
          </div>
        </div>
      </div>
      <div>
        {
          pageData.map((curElem)=>{
            return(
              <div>
                <div key={curElem.id}>
                <h2>{curElem.heading}</h2><br/><br/>
                <p>{curElem.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default HomeSection
