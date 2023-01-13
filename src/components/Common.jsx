import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './Context'

const Common = () => {
 const {pageData} = useGlobalContext()
  return (    
    <section>
      <section>
        <div>
         <h1>Getting Started</h1>
         <hr/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laborum.</p><br/><br/>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quibusdam pariatur ab non magnam sequi sapiente. Doloremque voluptate aliquid placeat.</p><br/><br/>
         <h2>Heading</h2><hr/>
          {pageData.map((curElem)=>{
            return(
              <div key={curElem.id}>
               <h3>{curElem.heading}</h3><br/>
               <p>{curElem.description}</p><br/>
               <img src={curElem.image} alt='image' className=''/><br/>
               <p>{curElem.description}</p>
              </div>
            )
          })}          
        </div>
        <div>
          <NavLink>
            <h3>Topic</h3>
          </NavLink>
          <NavLink>Quick links</NavLink>
        </div>
      </section>
    </section>
  )
}

export default Common
