

import React from 'react'
import LeftsideBar from '../Components/PagesSides/LeftsideBar'
import RightSideBar from '../Components/PagesSides/RightSideBar'
import PopularCard from '../Components/PagesSides/PopularCard'
import ByPrice from '../Components/PagesSides/ByPriceCard'
import BySizeCard from '../Components/PagesSides/BySizeCard'


const MainPage = () => {
  return (

    <>

    <div className="mainpage">

        <div className="left">

            <LeftsideBar />

        </div>

        <div className="right">
              <RightSideBar />
        </div>

    </div>

    <div className="popularcat text-center">

      <h2 className='mb-4'>Popular Categories</h2>

      <PopularCard />

    </div>

    <div className="bysize text-center">
      <h2 className='m-5'>Shop Popular Rug Sizes</h2>
      <BySizeCard />
    </div>

    <div className="byprice text-center">

    <h2>Shop by Price</h2>

      <ByPrice />

    </div>





    </>
    
  )
}

export default MainPage