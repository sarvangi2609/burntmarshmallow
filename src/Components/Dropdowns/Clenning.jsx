import React from "react";
import LeftSideDrop from './LeftSideDrop'

const Clenning = () => {
  return (
    <>
      <div className="drop">

        <ul className="drop-ul">

          <div>
            <h4>Storage and Organization</h4>
            <ul>
              <li>Outdoor Storage</li>
              <li>Laundry Room</li>
              <li>Garage Storage</li>
              <li>Decorative Storage</li>
              <li>Closet Organizers</li>
              <li>Kitchen Storage</li>
              <li>Storage Furniture</li>
              <li>Safes</li>
            </ul>
          </div>

          <div>
            <h4>Vacuums</h4>
            <ul>
              <li>Stick Vacuums</li>
              <li>Robot Vacuums</li>
              <li>Handheld Vacuums</li>
              <li>Canister Vacuums</li>
              <li>Upright Vacuums</li>
            </ul>
          </div>

          <div>
            <h4>Home Essentials</h4>
            <ul>
              <li>Heating</li>
              <li>Cooling</li>
              <li>Air Quality</li>
              <li>Sewing Machines</li>
              <li>Craft Machines</li>
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

export default Clenning;
