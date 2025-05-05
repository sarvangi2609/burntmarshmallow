


import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivatePage = ({children}) => {

    const {isAuth}= useSelector((state)=>state.auth)

    if(!isAuth){
        return <Navigate to={"/userprofile"}/>
    }
    return children 

    
}

export default PrivatePage


