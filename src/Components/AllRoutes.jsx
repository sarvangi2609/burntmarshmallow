

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MyAccount from './Profile/MyAccount'
import UserProfile from './Profile/UserProfile'

const AllRoutes = () => {
  return (
   <>

   <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>

   </Routes>
   
   </>
  )
}

export default AllRoutes