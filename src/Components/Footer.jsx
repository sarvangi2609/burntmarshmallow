
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";


import React from 'react'

const Footer = () => {
  return (

    <>

        <div className="footer">

          <div className="media">
            <div className="social">SHOP SOCIAL <sup>®</sup>
                <div className="media-icons">
                  <ul>

                    <li><a href=""><FaFacebookF /></a></li>
                    <li><a href=""><FaInstagram /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                    <li><a href=""><FaPinterest /></a></li>
                    <li><a href=""><FaYoutube /></a></li>

                  </ul>
                </div>
            </div>
            <div className="mobile">MOBILES APP
            <div className="media-icons">
                  <ul>

                    <li><a href=""><FaApple /> <div>Download on the App Store</div></a></li>
                    <li><a href=""><DiAndroid /><div>Download on Google Play</div></a></li>

                  </ul>
          </div>
            </div>
           
          </div>

          <div className="footer-container"></div>

          <div className="applinks"></div>

          <div className="legalcontainer"></div>


            
        </div>

    </>

  )
}

export default Footer