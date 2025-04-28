import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="media">
          <div className="social">
            SHOP SOCIAL <sup>®</sup>
            <div className="media-icons">
              <ul>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile">
            MOBILES APP
            <div className="media-icons">
              <ul>
                <li>
                  <a href="">
                    <FaApple /> <div>Download on the App Store</div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <DiAndroid />
                    <div>Download on Google Play</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="foot">
            <ul className="footul" style={{ listStyle: "none" }}>
              <h4>MY ACCOUNT</h4>

              <li>
                <a href="">
                  <span>Orders & Returns</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>My Reviews</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Email Preferences</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Beyond+™</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Welcome Rewards™</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Gift Card</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Manage My Overstock™ Store Credit Card</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Manage My Overstock™ Credit Cards</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="foot">
            <ul className="footul" style={{ listStyle: "none" }}>
              <h4>LET US HELP</h4>

              <li>
                <a href="">
                  <span>
                  Help Center</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Contact Customer Care</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Shipping Information</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Return Policy</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>International Help</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Accessibility</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Frequently Asked Questions</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Beyond Protection Powered by Extend</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="foot">
          <ul className="footul" style={{ listStyle: "none" }}>
              <h4>COMPANY INFORMATION</h4>

              <li>
                <a href="">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Investor Relations</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Sell Your Products</span>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <span>Affiliate Program</span>
                </a>
              </li>
              
            </ul>
          </div>

          <div className="foot">

          <ul className="footul" style={{ listStyle: "none" }}>
              <h4>MORE WAYS TO SHOP</h4>

              <li>
                <a href="">
                  <span>Coupons</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Deals</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>New Arrivals</span>
                </a>
              </li>
              
            </ul>

            <ul className="footul" style={{ listStyle: "none" }}>
              <h4>OVERSTOCK™ CREDIT & LEASE-TO-OWN</h4>

              <li>
                <a href="">
                  <span>Apply for New Overstock™ Credit Card</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Apply for Lease-to-Own</span>
                </a>
              </li>
             
              
            </ul>

          </div>
        </div>

        <div className="applinks">

          <ul className="applinkul" style={{listStyle:"none",display:'flex'}}>
            <li><a href="">Bed Bath & Beyond</a></li> |
            <li><a href="">buybuy BABY</a></li> |
            <li><a href="">Overstock</a></li> |
            <li><a href="">Beyond Inc.</a></li>
          </ul>

        </div>

        <div className="legalcontainer">

          <div className="legalcontains">
          <div className="container">
              <span style={{fontSize:"22px"}}>BedBathandBeyond.com</span>
              <p>Shop BedBathAndBeyond.com and find the best online deals on everything for your home. We work every day to bring you discounts on new products across our entire store. Whether you're looking for memorable gifts or everyday essentials, you can buy them here for less.</p>
            </div>

            <div className="container">
            <span>SIMPLE, INSPIRED LIVING<sup>®</sup></span>
            </div>

            <div className="container">
            <p>© Copyright 2025, Beyond, Inc.</p>
            <p>433 W Ascension Way, Suite 300, Murray, UT 84123 | 1-800-843-2446</p>
            </div>

            <div className="container">
                <ul className="containar-ul" style={{listStyle:"none",display:"flex"}}>
                  <li><a href="">Do Not Share My Information/SPI.</a></li>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                  <li><a href="">*Promotion Terms</a></li>
                  <li><a href=""  style={{display:"flex",alignItems:"center"}}>Ship to: <div><img src="https://ak1.ostkcdn.com/img/mxc/intFlag_US.gif" height={18} width={18} style={{borderRadius:"50%"}} alt="" /></div></a></li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
