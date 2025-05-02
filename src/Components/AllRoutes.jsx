

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MyAccount from './Profile/MyAccount'
import UserProfile from './Profile/UserProfile'
import ProductDetails from '../Pages/Furnitures/ProductDetails'
import MainPage from '../Pages/MainPage'
import More from '../Pages/More'
import PromotionPage from '../Pages/PromotionPage'



const AllRoutes = () => {
  return (
   <>

   <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        {/* <Route path="/:category" element={<LeftsideBar />} /> */}
        <Route path='/:category' element={<MainPage />}></Route>
        <Route path='/furnitureproduct' element={<ProductDetails />}></Route>
        <Route path='/more' element={<More />}></Route>

        <Route path='/:category/:semicategory' element={<PromotionPage />} />


        

   </Routes>
   
   </>
  )
}

export default AllRoutes