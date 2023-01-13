import React, { useEffect } from 'react'
import { useGlobalUpdateContext } from '../components/Context'
import HomeSection from '../components/HomeSection'

const Home = () => {

  const {homeData} = useGlobalUpdateContext()

  useEffect(()=>homeData(),[])
  
  return (<HomeSection />)
}

export default Home
 