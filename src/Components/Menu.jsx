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

const Menu = () => {
  return (
    <>
      <div className="menu">
        <ul className="menu-list">

          <li>
            <span>Furniture</span>
            <div className="dropdown">
              <Furniture />
            </div>
          </li>

          <li>
            <span>Rugs</span>
            <div className="dropdown">
              <Rugs />
            </div>
          </li>

          <li>
            <span>Outdoor</span>
            <div className="dropdown">
              <OutDoor />
            </div>
          </li>

          <li>
            <span>Bedding</span>
            <div className="dropdown">
              <Bedding />
            </div>
          </li>

          <li>
            <span>Bath</span>
            <div className="dropdown">
              <Bath />
            </div>
          </li>

          <li>
            <span>Kitchen</span>
            <div className="dropdown">
              <Kitchen />
            </div>
          </li>

          <li>
            <span>Decor</span>
            <div className="dropdown">
              <Decore />
            </div>
          </li>

          <li>
            <span>Storage & Cleaning</span>
            <div className="dropdown">
              <Clenning />
            </div>
          </li>

          <li>
            <span>Lighting</span>
            <div className="dropdown">
              <Lighting />
            </div>
          </li>

          <li>
            <span>Baby&Kids</span>
            <div className="dropdown">
              <BabyKids />
            </div>
          </li>

          <li>
            <span>More</span>
            <div className="dropdown">
              <More />
            </div>
          </li>

          <li>
            {/* <ul>
  <li>Living Room</li>
  <li>Bedroom</li>
  <li>Dining Room</li>
  <li>Patio</li>
</ul> */}
            <span>Ideas</span>
            <div className="dropdown">
              <Ideas />
            </div>
          </li>

          <li>
            <span>Sales & Deals</span>
          </li>

        </ul>
      </div>

    </>
  );
};

export default Menu;
