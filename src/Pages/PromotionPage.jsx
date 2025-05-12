import React, { useState } from 'react';
import LeftSideCard from '../Components/FilterdPagesSides/LeftSideCard';
import TopBox from '../Components/FilterdPagesSides/TopBox';
import ProductDetails from './Furnitures/ProductDetails';


const PromotionPage = () => {
  const [sortOption, setSortOption] = useState('');
  const [search, setSearch] = useState(''); // Lift search state here

  return (
    <>
      <div className="promotionmain">
        <div className="top d-flex justify-content-between">
          <TopBox />
        </div>

        <div className="filter-btns d-flex justify-content-end">
          <select name="" id="" onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Best Selling</option>
            <option value="lowToHigh">Price Low - High</option>
            <option value="highToLow">Price High - Low</option>
            <option value="rating">Customer Rating</option>
            <option value="new">New Arrivals</option>
          </select>
        </div>

        <div className="main-promo">
          <div className="leftfiltered">
            <h5>Filtered By:</h5>
            <LeftSideCard />
          </div>

          <div className="rightProducts">
            <ProductDetails 
              sortOption={sortOption} 
              search={search} // Pass search state to ProductDetails
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionPage;
