import React from "react";
import LeftSideDrop from './LeftSideDrop'

const Bath = () => {
  return (
    <>
      <div className="drop">

        <ul className="drop-ul">

          <div>
            <h4>Bathroom Rugs and Bath Mats</h4>
            <ul>
              <li>Microfiber</li>
              <li>Cotton</li>
              <li>Memory Foam</li>
              <li>Chenille</li>
              <li>Teak</li>
            </ul>
          </div>

          <div>
            <h4>Towels</h4>
            <ul>
              <li>Bath Towel Sets</li>
              <li>Bath Towels</li>
              <li>Beach Towels</li>
              <li>Hand Towels</li>
              <li>Washcloths</li>
              <li>Bathrobes</li>
            </ul>
          </div>

          <div>
            <h4>Bathroom Furniture</h4>
            <ul>
              <li>Double Bathroom Vanities</li>
              <li>Single Bathroom Vanities</li>
              <li>Bathroom Vanities</li>
              <li>Linen Tower</li>
              <li>Medicine Cabinets</li>
              <li>Bathroom Wall Shelves</li>
              <li>Over the Toilet Storage</li>
              <li>Vanity Mirrors</li>
            </ul>
          </div>

          <div>
            <h4>Bathroom Accessories</h4>
            <ul>
              <li>Bathroom Accessory Sets</li>
              <li>Bathroom Trash Cans</li>
              <li>Shower Stools</li>
              <li>Shower and Bath Caddies</li>
              <li>Soap Dishes and Dispensers</li>
              <li>Tissue Box Covers</li>
              <li>Personal Care Appliances</li>
              <li>Tub and Shower Mats</li>
            </ul>
          </div>

          <div>
            <h4> Shower Curtains and Accessories</h4>
            <ul>
              <li>Shower Curtains</li>
              <li>Shower Curtain Hooks</li>
              <li>Shower Curtain Liners</li>
              <li>Shower Curtain Rods</li>
            </ul>
          </div>

          <div>
            <h4>Bathroom Renovation</h4>
            <ul>
              <li>Bathroom Sinks</li>
              <li>Bathroom Faucets</li>
              <li>Bathroom Wall Cabinets</li>
              <li>Tubs</li>
              <li>Showers</li>
              <li>Toilets & Bidets</li>
            </ul>
          </div>

        </ul>

        <div className="leftdrop">
          <LeftSideDrop />
        </div>

      </div>
    </>
  );
};

export default Bath;
