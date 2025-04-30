

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MyAccount from './Profile/MyAccount'
import UserProfile from './Profile/UserProfile'
import PopUp from './PopUp'

const AllRoutes = () => {
  return (
   <>

   <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/popup' element={<PopUp />}></Route>

   </Routes>
   
   </>
  )
}

export default AllRoutes