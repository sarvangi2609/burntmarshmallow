import React from "react";
import LeftSideDrop from './LeftSideDrop'

const Rugs = () => {
  return (
    <>
      <div className="drop">

        <ul className="drop-ul">
          <div>
            <h4>All Rugs</h4>
            <ul>
              <li>Traditional Rugs</li>
              <li>Modern Rugs</li>
              <li>Transitional Rugs</li>
              <li>Performance Rugs</li>
              <li>Washable Rugs</li>
              <li>Natural Fiber Rugs</li>
              <li>Rug Pads</li>
              <li>Rug Samples</li>
            </ul>
          </div>

          <div>
            <h4> Shop by Material</h4>
            <ul>
              <li>Wool Rugs</li>
              <li>Jute Rugs</li>
              <li>Sisal Rugs</li>
              <li>Cotton Rugs</li>
              <li>Silk Rugs</li>
              <li>Leather Rugs</li>
              <li>Synthetic Rugs</li>
            </ul>
          </div>

          <div>
            <h4>Shop by Size</h4>
            <ul>
              <li>2x3 Rugs</li>
              <li>3x5 Rugs</li>
              <li>4x6 Rugs</li>
              <li>5x8 Rugs</li>
              <li>6x9 Rugs</li>
              <li>8x10 Rugs</li>
              <li>9x12 Rugs</li>
              <li>10x14 Rugs</li>
              <li>Runners</li>
              <li>Round Rugs</li>
            </ul>
          </div>

          <div>
            <h4>Shop by Room</h4>
            <ul>
              <li>Living Room Rugs</li>
              <li>Bedroom Rugs</li>
              <li>Dining Room Rugs</li>
              <li>Entryway Rugs</li>
              <li>Kitchen Rugs</li>
              <li>Bathroom Rugs</li>
              <li>Kids Room Rugs</li>
              <li>Office Rugs</li>
            </ul>
          </div>

          <div>
            <h4>Shop by Color</h4>
            <ul>
              <li>Blue Rugs</li>
              <li>Gray Rugs</li>
              <li>White Rugs</li>
              <li>Black Rugs</li>
              <li>Beige Rugs</li>
              <li>Green Rugs</li>
              <li>Red Rugs</li>
              <li>Multicolor Rugs</li>
            </ul>
          </div>

          <div>
            <h4>Other Links</h4>
            <ul>
              <li>Rug Buying Guide</li>
              <li>Rug Size Guide</li>
              <li>Free Rug Swatches</li>
              <li>Clearance Rugs</li>
              <li>New Arrivals</li>
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

export default Rugs;
