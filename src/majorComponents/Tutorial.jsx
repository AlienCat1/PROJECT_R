import React, { useEffect } from 'react'
import Common from '../components/Common'
import { useGlobalUpdateContext } from '../components/Context'

const Tutorial = () => {

  const {tutorialData} = useGlobalUpdateContext()

  useEffect(()=>tutorialData(),[])

  return (<Common />)
}

export default Tutorial
