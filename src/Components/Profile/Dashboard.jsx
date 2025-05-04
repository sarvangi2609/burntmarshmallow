import React from "react";
import { BsBox2 } from "react-icons/bs";
import { LuUserCog } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineSound } from "react-icons/ai";
import { RiCoupon4Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard ps-4">
        <h3>Dashboard</h3>
        <hr />

        <div className="dashboard-box">

          <div className="dashbox">
            <div className="dash-icons">
              <BsBox2 />
            </div>
            <div className="text">
              <span>Orders & Returns</span>
              <p>Check order status, make a return or write a review</p>
            </div>
          </div>

          <div className="dashbox">
            <div className="dash-icons">
              <LuUserCog />
            </div>
            <div className="text">
              <span>Account Settings</span>
              <p>Change personal information, update address book and add authorized users</p>
            </div>
          </div>

          <div className="dashbox">
            <div className="dash-icons">
              <CiCreditCard1 />
            </div>
            <div className="text">
              <span>Payments & Balances</span>
              <p> Payment Settings and Credit & Gift Card Balances</p>
            </div>
          </div>

          <div className="dashbox">
            <div className="dash-icons">
              <CiGift />
            </div>
            <div className="text">
              <span>Gift Cards</span>
              <p>Buy Gift Cards, Apply Gift Cards, & Check Balances</p>
            </div>
          </div>

          <div className="dashbox">
            <div className="dash-icons">
              <LiaCertificateSolid />
              </div>
              <div className="text">
                <span>Welcome Rewards</span>
                <p>Join, renew membership and view your Rewards</p>
             
            </div>
          </div>

          <div className="dashbox">
            <div className="dash-icons">
              <AiOutlineSound />
            </div>
            <div className="text">
              <span>Alerts & Communications</span>
              <p>Manage email subscriptions, update content preferences and product alerts</p>
            </div>
          </div>
        </div>

        <div className="dash">

            <div className="dashes" style={{border:"4px dashed rgb(218, 220, 223)"}}>
            

                <div className="dashtext">
                <RiCoupon4Line style={{fontSize:"22px"}} />
                <span className="ps-2">Welcome Back!</span>
                <p className="ps-4">Take 10% off your next order.</p>
                </div>

                <span>Activate <IoIosArrowForward /></span>

            </div>

            <div className="dashes">

                <div className="dashtext">
                <h4 className="fs-6">Order tracking made easy with our app!</h4>
                <span style={{fontSize:"11px"}}>Download by scanning the QR code with your phone.</span>
                </div>

                <img src="https://ak1.ostkcdn.com/img/mxc/20211115-MyAccountQR-min.png?impolicy=high&imwidth=75" alt="" />

            </div>

        </div>


      </div>
    </>
  );
};

export default Dashboard;
