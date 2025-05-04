import React from "react";

const ProfileLeftSideBar = () => {
  return (
    <>
      <div className="leftprofile">

        <div className="left-btns">
          <button>Overview</button>
          <button>Orders & Returns</button>
          <button>Welcome Rewards</button>
          <button>Reviews</button>
          <button>Lists</button>
          <button>Account Settings</button>
          <button>Gift Cards</button>
          <button>Alerts & Communications</button>
          <button>Financing & Lease-to-own</button>
          <button>Help Center</button>
        </div>

        <div className="left-Card">
            <img src="https://ak1.ostkcdn.com/img/mxc/20230727_citicards.png?imwidth=120&impolicy=mediumlow" alt="" /><br />
            <span><strong>Over the top Savings & Rewards!</strong></span>
            <p>5% back in rewards† + Special Financing^ with an Overstock Credit Card</p>
            <button>Learn More</button>
        </div>

      </div>
    </>
  );
};

export default ProfileLeftSideBar;
