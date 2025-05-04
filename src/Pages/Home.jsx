import React from "react";
import { HeroSection, HostingPro, LimitedPro, TrendingPro } from "../Components/Home/Slider";
import UnderFooter from "../Components/UnderFooter";

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

      {/* <div className="salepro">
        <Salpro />
      </div> */}

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

          <div className="limit-protext d-flex justify-content-between">
            <div className="protext w-25 text-center">
              {" "}
              Save on Safavieh rugs & <br />
              patio furniture
            </div>
            <div className="protext  w-25 text-center">Bedding</div>
            <div className="protext  w-25 text-center">Bath</div>
            <div className="protext  w-25 text-center">Kitchen & Dining</div>
          </div>
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

      {/* things we know you'll love */}

      <div className="think-product">
        <div className="contnent text-center">
          <h1>things we know you'll love</h1>
        </div>

        <div className="think-pro">
          
        </div>
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

      <div className="category-product">

      <div className="contnent text-center">
          <h1>shop by category</h1>
        </div>

        <div className="category-pro">

          <div className="cat-product">
            <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame3.jpg?imwidth=1920" alt="" />
            <span>Bedding</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame6.jpg?imwidth=1920" alt="" />
          <span>Kitchen</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/07252023_MOPS_HP_Bath.jpg?imwidth=1920" alt="" />
          <span>Bath</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame7.jpg?imwidth=1920" alt="" />
          <span>Outdoor</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame1.jpg?imwidth=1920" alt="" />
          <span>Furniture</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame2.jpg?imwidth=1920" alt="" />
          <span>Area Rugs</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame8.jpg?imwidth=1920" alt="" />
          <span>Home Improvement</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame10.jpg?imwidth=1920" alt="" />
          <span>Mattresses</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame4.jpg?imwidth=1920" alt="" />
          <span>Home Decor</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame11.jpg?imwidth=1920" alt="" />
          <span>Lighting</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/02132023-MOPS-HP-Redesign-Frame9_v2.jpg?imwidth=1920" alt="" />
          <span>Storage</span>
          </div>

          <div className="cat-product">
          <img src="https://ak1.ostkcdn.com/img/mxc/07272023_516x516_BeautifulFinds_ShopAllDeals.jpg?imwidth=1920" alt="" />
          <span>Shop All Deals</span>
          </div>
          
        </div>

      </div>



      {/* trending searches */}

      <div className="trending-serch">
        <div className="contnent text-center">
          <h1>trending searches</h1>
        </div>

        <div className="tre-search">
        
          <div className="search-box"><span>Garden Sculptures</span></div>

          <div className="search-box"><span>Patio Coffee Tables</span></div>

          <div className="search-box"><span>Outdoor Daybeds</span></div>

          <div className="search-box"><span> Adirondack Chairs</span></div>

          <div className="search-box"><span>Gazebos</span></div>

          <div className="search-box"><span>Outdoor Rocking Chairs</span></div>

          <div className="search-box"><span>Outdoor Sectional Sofas</span></div>

          <div className="search-box"><span>Gas Grills</span></div>

          <div className="search-box"><span>Patio Furniture Covers</span></div>

          <div className="search-box"><span>Trampolines</span></div>

          <div className="search-box"><span>Sheds</span></div>

          <div className="search-box"><span>Outdoor Lighting</span></div>
          
        </div>
      </div>

        <div className="semifooter">
          <UnderFooter />
        </div>

    </>
  );
};

export default Home;
