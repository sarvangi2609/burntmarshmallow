

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MyAccount from './Profile/MyAccount'
import UserProfile from './Profile/UserProfile'
import ProductDetails from '../Pages/Furnitures/ProductDetails'
import MainPage from '../Pages/MainPage'
import More from '../Pages/More'
import PromotionPage from '../Pages/PromotionPage'
import Description from './Description'
import Cart from './Cart'
import Registry from '../Pages/Registry'
import PrivatePage from './PrivatePage'
import Wishlist from './Wishlist'



const AllRoutes = () => {
  return (
   <>

   <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/myaccount' element={<PrivatePage><MyAccount /></PrivatePage>}></Route>

        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/:category' element={<MainPage />}></Route>
        <Route path='/furnitureproduct' element={<ProductDetails />}></Route>
        <Route path='/more' element={<More />}></Route>

        <Route path='/:category/:semicategory' element={<PromotionPage />} />

        <Route path='/description/:id' element={<PrivatePage><Description /></PrivatePage>} />

        <Route path='/cartpage' element={<Cart />}/>
        <Route path='/listpage' element={<Wishlist />}/>
        <Route path='/registry' element={<Registry />}/>        


        

   </Routes>
   
   </>
  )
}

export default AllRoutes