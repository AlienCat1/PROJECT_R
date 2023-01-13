import React, { useEffect } from 'react'
import Common from '../components/Common'
import { useGlobalUpdateContext } from '../components/Context'


const Blog = () => {

  const {blogData} = useGlobalUpdateContext()

  useEffect(()=>blogData(),[])
  
  return (<Common />)
}

export default Blog
