import React from "react";
import Furniture from "./Dropdowns/Furniture";
import Rugs from "./Dropdowns/Rugs";
import OutDoor from "./Dropdowns/OutDoor";
import Bedding from "./Dropdowns/Bedding";
import Bath from "./Dropdowns/Bath";
import Kitchen from "./Dropdowns/Kitchen";
import Decore from "./Dropdowns/Decore";
import Clenning from "./Dropdowns/Clenning";
import Lighting from "./Dropdowns/Lighting";
import BabyKids from "./Dropdowns/Baby&Kids";
import More from "./Dropdowns/More";
import Ideas from "./Dropdowns/Ideas";
import { Link } from "react-router-dom";

const Menu = () => {
  
  return (
    <>
      <div className="menu">
        <ul className="menu-list">

          <li>
            <Link to="/furniture" style={{textDecoration:"none"}}>
            <span >Furniture</span>
            </Link>
            <div className="menu-dropdown">
              <Furniture />
            </div>
          </li>

          <li>
          <Link to="/rugs" style={{textDecoration:"none"}}>
          <span>Rugs</span>
          </Link>
            <div className="menu-dropdown">
              <Rugs />
            </div>
          </li>

          <li>
          <Link to="/outdoor" style={{textDecoration:"none"}}>
          <span>Outdoor</span>
          </Link>
            
            <div className="menu-dropdown">
              <OutDoor />
            </div>
          </li>

          <li>
          <Link to="/bedding" style={{textDecoration:"none"}}>
          <span>Bedding</span>
          </Link>
            <div className="menu-dropdown">
              <Bedding />
            </div>
          </li>

          <li>
          <Link to="/bath" style={{textDecoration:"none"}}>
          <span>Bath</span>
          </Link>
            
            <div className="menu-dropdown">
              <Bath />
            </div>
          </li>

          <li>
          <Link to="/kitchen" style={{textDecoration:"none"}}>
          <span>Kitchen</span>
          </Link>
            
            <div className="menu-dropdown">
              <Kitchen />
            </div>
          </li>

          <li>
          <Link to="/decor" style={{textDecoration:"none"}}>
          <span>Decor</span>
          </Link>
            
            <div className="menu-dropdown"
            style={{left:"-200px"}}>
              <Decore />
            </div>
          </li>

          <li>
          <Link to="/storage/promotion" style={{textDecoration:"none"}}>
          <span>Storage & Cleaning</span>
          </Link>
            
            <div className="menu-dropdown"
            style={{left:"-250px"}}>
              <Clenning />
            </div>
          </li>

          <li>
          <Link to="/lighting" style={{textDecoration:"none"}}>
          <span>Lighting</span>
          </Link>
            
            <div className="menu-dropdown"
            style={{left:"-450px"}}>
              <Lighting />
            </div>
          </li>

          <li>
          <Link to="/Baby and Kids Home Goods/promotion" style={{textDecoration:"none"}}>
          <span>Baby&Kids</span>
          </Link>
           
            <div className="menu-dropdown"
            style={{left:"-550px"}}>
              <BabyKids />
            </div>
          </li>

          <li>
            <Link to="/more"  style={{textDecoration:"none"}}><span>More</span></Link>
            
            <div className="menu-dropdown"
            style={{left:"-600px"}}>
              <More />
            </div>
          </li>

          <li>
            <span>Ideas</span>
            <div className="menu-dropdown"
            style={{left:"-700px"}}>
              <Ideas />
            </div>
          </li>

          <li>
            <span>Sales & Deals</span>
            <div className="menu-dropdown"
            style={{left:"-750px"}}>
              <Ideas />
            </div>
          </li>

        </ul>
      </div>

    </>
  );
};

export default Menu;
