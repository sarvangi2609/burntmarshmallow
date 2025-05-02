

import React from 'react'
import LeftSideCard from '../Components/FilterdPagesSides/LeftSideCard'
import TopBox from '../Components/FilterdPagesSides/TopBox'
import ProductDetails from './Furnitures/ProductDetails'

const PromotionPage = () => {

  return (

    <>

    <div className="promotionmain">

      <div className="top d-flex justify-content-between">

        <TopBox />

      </div>

      <div className="filter-btns d-flex justify-content-end">

        <select name="" id="">
          <option value="">Best Selling</option>
          <option value="">Price Low - High</option>
          <option value="">Price High - Low</option>
          <option value="">Customer Rating</option>
          <option value="">New Arrives</option>
        </select>

      </div>

        <div className="main-promo">

            <div className="leftfiltered">
              <h5>Filtered By:</h5>
            <LeftSideCard />
            </div>

            <div className="rightProducts">
              <ProductDetails />
            </div>
           
        </div>

    </div>
    
    </>
    
    
  )
}

export default PromotionPage