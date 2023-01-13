import React, { useContext, useState } from "react"
import API from "../assets/CommonAPI"

export const PageContext = React.createContext()
export const PageUpdateContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(PageContext)
}

export const useGlobalUpdateContext = () => {
    return useContext(PageUpdateContext)
}

export const PageProvider=({ children })=>{
    
    const[pageData, setPageData]=useState([])

    const homeData = () => {
        
        const home = API.filter(e=>e.page==='Home')
        setPageData(home)
    }

    const blogData = () => {
        
        const blog = API.filter(e=>e.page==='Blog')
        setPageData(blog)
    }

    const tutorialData = () => {

        const tutorial = API.filter(e=>e.page==='Tutorial')
        setPageData(tutorial)
    }

        return (
        <PageContext.Provider value={{pageData}}>
            <PageUpdateContext.Provider value={{ homeData, blogData, tutorialData }}>
              {children}
            </PageUpdateContext.Provider>
        </PageContext.Provider>
    )
}

