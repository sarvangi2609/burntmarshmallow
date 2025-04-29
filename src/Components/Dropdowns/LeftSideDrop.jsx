import React from "react";

const LeftSideDrop = () => {
  return (
    <>
      <div className="leftsidedrop">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/04082025_320x320_Domestic_Desktop_CatFlyout_BeyondStealsFurniture.jpg?imwidth=320"
          height={231}
          width={231}
          alt=""
        />
        <div>
          <h5>Our latest exclusive markdowns.</h5>
          <span>Shop Now</span>{" "}
        </div>

        <div>
        <h6>More Ways to Shop</h6>

          <ul style={{listStyle:"none"}}>
            
            <li><a href="">Featured Sales</a></li>
            <li><a href="">New Arrivals</a></li>
            <li><a href="">Best Selling Rugs</a></li>
            <li><a href="">Flash Price Drops</a></li>
            <li><a href="">Built In The USA</a></li>

          </ul>

        </div>
      </div>
    </>
  );
};

export default LeftSideDrop;
