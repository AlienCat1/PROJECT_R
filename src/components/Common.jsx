import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from '../styles/CommonWrapper'
import { useGlobalContext } from './Context'

const Common = () => {
 const {pageData} = useGlobalContext()
  return (    
    <Wrapper className='main-container'>
      <section className='container grid grid-two-column'>
        <div className='page-elements'>
         <h1>Getting Started</h1><br/>
         <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laborum.</h4><br/>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quibusdam pariatur ab non magnam sequi sapiente. Doloremque voluptate aliquid placeat.</p><hr/>
         <h3>Heading</h3><br/>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quibusdam pariatur ab non magnam sequi sapiente. Doloremque voluptate aliquid placeat.</p><br/>
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
        <div className='quick-links'>
         <NavLink>
           <h3>Topic</h3>
         </NavLink>
          {pageData.map((curElem)=>{
            return(
              <div key={curElem.id}>                
                <NavLink>{curElem.heading}</NavLink>
              </div>
            )
          })}          
        </div>
      </section>
    </Wrapper>
  )
}

export default Common
