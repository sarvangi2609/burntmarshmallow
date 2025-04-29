import React from "react";
import LeftSideDrop from './LeftSideDrop'

const Bedding = () => {
  return (
    <>
      <div className="drop">

        <ul className="drop-ul">

          <div>
            
              <h4>Bedding Sets</h4>
              <ul>
                <li>Comforters and Sets</li>
                <li>Bed Sheet Sets</li>
                <li>Quilts and Bedspreads</li>
                <li>Duvet Cover and Sets</li>
                <li>Bed-in-a-Bag</li>
                <li>Daybed Cover Sets</li>
              </ul>
           
          </div>

          <div>
            
              <h4>Sheets and Pillowcases</h4>
              <ul>
                <li>Sheet Sets</li>
                <li>Pillow Shams</li>
                <li>Pillowcases</li>
                <li>Fitted Bed Sheets</li>
                <li>Flat Bed Sheets</li>
              </ul>
            
          </div>

          <div>
            
              <h4>Mattresses</h4>
              <ul>
                <li>Twin Mattress</li>
                <li>Twin XL Mattress</li>
                <li>Full Mattress</li>
                <li>Queen Mattress</li>
                <li>King Mattress</li>
                <li>California King Mattress</li>
                <li>Air Mattress</li>
                <li>Mattress in a Box</li>
                <li>Best Sellers</li>
              </ul>
            
          </div>

          <div>
            <h4> Bedding Essentials</h4>
            
              <ul>
                <li>Down Comforters & Duvet Inserts</li>
                <li>Bed Pillows</li>
                <li>Pillow Protectors</li>
                <li>Bed Skirts</li>
                <li>Kids Bedding</li>
                <li>Baby Bedding</li>
                <li>Bed Canopies</li>
              </ul>
          </div>

          <div>
            
             <h4> Mattress Pads and Toppers</h4>
              <ul>
                <li>Mattress Toppers</li>
                <li>Mattress Protectors</li>
                <li>Mattress Pads</li>
              </ul>
          
          </div>

          <div>
            <h4>Blankets</h4>
              
              <ul>
                <li>Blankets and Throws</li>
                <li>Heated Blankets</li>
                <li>Weighted Blankets</li>
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

export default Bedding;
