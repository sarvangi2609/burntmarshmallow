

import React from 'react'
import LeftsideBar from '../Components/PagesSides/LeftsideBar'
import RightSideBar from '../Components/PagesSides/RightSideBar'
import PopularCard from '../Components/PagesSides/PopularCard'
import ByPrice from '../Components/PagesSides/ByPriceCard'
import BySizeCard from '../Components/PagesSides/BySizeCard'
import { useLocation } from 'react-router-dom'
import ByColorCard from '../Components/PagesSides/ByColorCard'
import ByBrandCard from '../Components/PagesSides/ByBrandCard'
import ByShopCard from '../Components/PagesSides/ByShopCard'


const MainPage = () => {

  const location = useLocation();
   const showRug = location.pathname === "/rugs"
   const showBed = location.pathname === "/bedding"
   const showBath = location.pathname === "/bath"
   const showKitchen = location.pathname === "/kitchen"
  

  return (

    <>

    <div className="mainpage mb-5">

        <div className="left">

            <LeftsideBar />

        </div>

        <div className="right">
              <RightSideBar />
        </div>

    </div>

    <div className="popularcat text-center">

      <PopularCard />

    </div>


    <div className="bysize text-center">
    {showRug && <BySizeCard category="rugs" />}
    {showBed && <BySizeCard category="bedding" />}
    </div>

    <div className="bycolor">
    {showRug && <ByColorCard category="rugs" />}
    </div>

    <div className="bybrand">
    {showBed && <ByBrandCard category="bedding" />}
    {showBath && <ByBrandCard category="bath" />}
    {showKitchen && <ByBrandCard category="kitchen" />}
    </div>

    <div className="byprice text-center mt-5">

      <ByPrice />

    </div>

    <div className="shopmore">
        <ByShopCard />
    </div>








    </>
    
  )
}

export default MainPage