import React from "react";
import Salpro from "../Components/Home/Salpro";
import Slider from "../Components/Home/Slider";
// import SimpleSlider from '../Components/Slider'

const Home = () => {
  return (
    <>

      <div
        className="slider"
        style={{
          height: "450px",
          width: "95%",
          backgroundColor: "red",
          margin: "35px",
        }}
      >
        <Slider />
      </div>

      <div className="salepro">
        <Salpro />
      </div>

      <div className="section">
        <div className="section1">
          <img
            src="https://ak1.ostkcdn.com/img/mxc/20250426_MOPS_1400x250_VP_MultiBanner_Medium_Desktop_ChrisKnight.svg?imwidth=1920"
            height={220}
            width={1233}
            alt=""
          />
        </div>

        <div className="section2">
          <img
            src="https://ak1.ostkcdn.com/img/mxc/04082025-MOPS-1400x250_HP_MultiBanner_Medium_Desktop_BBB_FlashPriceDrops.svg?imwidth=1920"
            alt=""
            height={220}
            width={1233}
          />
        </div>
      </div>

      {/* limited-time deals */}

      {/* must-haves for hosting */}

      <div className="banner">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_1400x550_HP_MultiBanner_Large_Desktop_Rugs_34995756.svg?imwidth=1920"
          alt=""
          height={485}
          width={1233}
        />
      </div>

      <div className="section3">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_1400x250_VP_MultiBanner_Medium_Desktop_MothersDay.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      <div className="section4">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/04222025_VP_MOPS_1400x250_VP_MultiBanner_Medium_Desktop_BuiltInUSA.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      {/* things we know you'll love */}

      {/* trending this season */}

      <div className="section5">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/03192025_VP_BuyBuy_Banner_Desktop.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      <div className="section6">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/20250421-NONMEMBER_WR_50off250_HP_1400x250.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      <div className="section7">
        <img
          src="https://ak1.ostkcdn.com/img/mxc/08212023-MOPS-SFwR-HomepagePromoBanner-1400x250_Desktop.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      {/* shop by category */}

      {/* trending searches */}

    </>
  );
};

export default Home;
