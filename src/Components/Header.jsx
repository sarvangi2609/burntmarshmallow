

import React from 'react'
import '../Components/style.css'
import { FaTruckFast } from "react-icons/fa6";
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'


const Header = () => {
  return (

    <>

        <div className="header">

            <div className="left">
            <ul className="logolist">
                <li><a href=""><img src={logo1} alt="" /></a></li>
                <li><a href=""><img src={logo2} alt="" /></a></li>
                <li><a href=""><img src={logo3} alt="" /></a></li>
                <li><a href=""><img src={logo4} alt="" /></a></li>
            </ul>
            </div>

            <div className="right">
            
            <span> <FaTruckFast /> Free Shipping* with Beyond+ <a href="">Learn More</a></span>

            </div>
        </div>


    </>

  )
}

export default Header