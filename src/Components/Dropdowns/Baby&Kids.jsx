import React from "react";
import LeftSideDrop from './LeftSideDrop'

const BabyKids = () => {
  return (
    <>
      <div className="drop">
        <ul className="drop-ul">
          <div>
            <h4> Baby Furniture</h4>
            <ul>
              <li>Cribs</li>
              <li>Bassinets and Cradles</li>
              <li>Crib Mattresses</li>
              <li>Baby Bedding</li>
              <li>Nursery Seating</li>
              <li>Changing Tables</li>
              <li>Nursery Decor</li>
            </ul>
          </div>

          <div>
            <h4>Baby Travel</h4>
            <ul>
              <li>Car Seats and Bases</li>
              <li>Infant Car Seats</li>
              <li>Convertible Car Seats</li>
              <li>Booster Car Seats</li>
              <li>Car Seat Accessories</li>
              <li>Baby Carriers and Wraps</li>
              <li>Diaper Bags</li>
              <li>Baby Travel Cribs</li>
            </ul>
          </div>

          <div>
            <h4>Strollers</h4>
            <ul>
              <li>Full Size Strollers</li>
              <li>Double Strollers</li>
              <li>Travel Systems</li>
              <li>Jogging Strollers</li>
              <li>Lightweight Strollers</li>
              <li>Stroller Accessories</li>
            </ul>
          </div>

          <div>
            <h4>Nursing and Feeding</h4>
            <ul>
              <li>Bottle Warmers</li>
              <li>Bottle Feeding</li>
              <li>High Chairs & Boosters</li>
              <li>Baby Tableware</li>
            </ul>
          </div>

          <div>
            <h4>Kids</h4>
            <ul>
              <li>Kids Beds</li>
              <li>Twin Mattresses</li>
              <li>Kids Bedding</li>
              <li>Kids Desks</li>
              <li>Beanbags</li>
              <li>Kids Dressers</li>
              <li>Kids Bookshelves</li>
              <li>Toy Boxes & Storage</li>
            </ul>
          </div>

          <div>
            <h4>Baby Gear</h4>
            <ul>
              <li>Playmats</li>
              <li>Baby Activity Centers</li>
              <li>Baby Bouncers</li>
              <li>Baby Walkers</li>
            </ul>
          </div>

          <div>
            <h4>More Ways to Shop</h4>
            <ul>
              <li>Featured Sales</li>
              <li>New Arrivals</li>
              <li>Flash Price Drops</li>
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

export default BabyKids;
