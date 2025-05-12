import {
  HeroSection,
  HostingPro,
  LimitedPro,
  TrendingPro,
} from "../Components/Home/Slider";
import UnderFooter from "../Components/UnderFooter";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="slider"
        style={{
          height: "450px",
          width: "98%",
          margin: "2% 1%",
        }}
      >
        <HeroSection />
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

      <div className="limited-product ">
        <div className="contnent text-center">
          <h1>limited-time deals</h1>
        </div>

        <div className="limited-pro">
          <LimitedPro />
        </div>
      </div>

      {/* must-haves for hosting */}

      <div className="hosting-product">
        <div className="contnent text-center">
          <h1>must-haves for hosting</h1>
        </div>

        <div className="hosting-pro">
          <HostingPro />
        </div>
      </div>

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

      {/* trending this season */}

      <div className="trending-product">
        <div className="contnent text-center">
          <h1>trending this season</h1>
        </div>

        <div className="trending-pro">
          <TrendingPro />
        </div>
      </div>

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
          src="https://ak1.ostkcdn.com/img/mxc/11052024-V2-MOPS-beyond+_NONMember_Desktop1.svg?imwidth=1920"
          alt=""
          height={220}
          width={1233}
        />
      </div>

      {/* shop by category */}

      <div className="category-product">
        <div className="content text-center">
          <h1>shop by category</h1>
        </div>

        <div className="row container text-center mx-auto">
          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/bedding">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame3.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Bedding</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/kitchen">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame6.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Kitchen</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/bath">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/07252023_MOPS_HP_Bath.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Bath</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/outdoor">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame7.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Outdoor</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/furniture">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame1.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Furniture</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/rugs">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame2.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Area Rugs</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/kitchen">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame8.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Home Improvement</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/rugs">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame10.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Mattresses</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/decor">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame4.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Home Decor</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/lighting">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame11.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Lighting</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/storage">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame9_v2.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Storage</span>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
            <Link to="/more">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/07272023_516x516_BeautifulFinds_ShopAllDeals.jpg?imwidth=1920"
                alt=""
                className="img-fluid"
              />
            </Link>
            <span>Shop All Deals</span>
          </div>
        </div>
      </div>

      {/* trending searches */}

      <div className="trending-serch">
        <div className="contnent text-center">
          <h1>trending searches</h1>
        </div>

        <div className="tre-search text-center pt-3 row">
          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Garden Sculptures</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Patio Coffee Tables</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Outdoor Daybeds</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span> Adirondack Chairs</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Gazebos</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Outdoor Rocking Chairs</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Outdoor Sectional Sofas</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Gas Grills</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Patio Furniture Covers</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Trampolines</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Sheds</span>
          </div>

          <div className="search-box col-lg-4 col-md-6 col-12 mb-3">
            <span>Outdoor Lighting</span>
          </div>
        </div>
      </div>

      <div className="semifooter">
        <UnderFooter />
      </div>
    </>
  );
};

export default Home;
