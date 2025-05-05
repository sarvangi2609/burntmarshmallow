import React, { useState } from "react";
import "../page.css";
import { useDispatch, useSelector } from "react-redux";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = ({
  id,
  title,
  saleprice,
  currentprice,
  rating,
  proimg,
  sale,
}) => {
  const { currentUser } = useSelector((state) => state.auth);

  const [liked, setLiked] = useState(false); // Track heart toggle

  const handleHeartClick = async() => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="productcard">
        <div>

             
          <div className="image" style={{ position: "relative" }}>
          <Link to={`/description/${id}`}>   <img src={proimg} alt="" height={120} width={120} />       </Link>

          <PiHeartStraightDuotone
          onClick={handleHeartClick}
          style={{
            position: "absolute",
            right: "-10px",
            top: "10px",
            fontSize: "30px",
            color: liked ? "red" : "black", // Toggle color
            cursor: "pointer",
          }}
        />
            
            </div>
 

          <div className="msg d-flex justify-content-between">
           
          </div>

          <div className="prices text-start">

            <span
              className="saleprice pe-2 "
              style={{ color: "#ed0000", fontSize: "16px", fontWeight: "700" }}
            >
              {saleprice}
            </span>

            {sale ? <span
              className="price"
              style={{
                fontSize: "12px",
                textDecoration: "line-through",
                borderBottom: "1px dashed",
                color: "#626669",
              }}
            >
              {currentprice}
            </span>: 
            <span
            className="price"
            style={{
              fontSize: "16px",
              color: "#626669",
            }}
          >
            {currentprice}
          </span> }

          </div>

          {sale ? <div className="salebtn">Sale</div> : <div></div>}
          <div className="rate p-2">{rating}</div>

          <p>{title}</p>

          {currentUser?.role == "admin" && (
            <button
              style={{
                margin: "5px",
                padding: "8px 15px",
                border: "none",
                cursor: "pointer",
                background: "black",
                color: "white",
                fontSize: "14px",
              }}
            >
              EDIT
            </button>
          )}

          {currentUser?.role == "admin" && (
            <button
              style={{
                margin: "5px",
                padding: "8px 15px",
                border: "none",
                cursor: "pointer",
                background: "black",
                color: "white",
                fontSize: "14px",
              }}

              // onClick={() => dispatch(DeleteData(id))}
            >
              DELETE
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
