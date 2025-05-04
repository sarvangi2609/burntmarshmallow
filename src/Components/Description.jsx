import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiGift } from "react-icons/ci";

const Description = () => {
  const [oneData, setoneData] = useState([]);
//   const [decdata,setdecdata] = useState([])
  const { id } = useParams();


//   getproduct for description page
  const getProduct = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)

      .then((res) => {
        setoneData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// handle cart

const HandleCart = async()=>{


    try {
      const {data} = await axios.get(` http://localhost:3000/cart`)
      console.log(data)
      const cartItem =data.find((item)=>item.id ==id)

      if(cartItem){
        alert("Product Is Already Exist in Your cart")
      }else{

        axios.post("http://localhost:3000/cart",{...oneData, quantity:1})
        .then((res)=>{
          console.log(res.data)
          alert("Product Added to Cart")
        })
        .catch((error)=>{
          console.log(error)
        })
        
      }

    } catch (error) {
      
    }

  }


  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <div className="desc">
        <div className="product-page">
          {/* Product Image */}
          <div className="product-image">
            <img src={oneData.proimg} alt={oneData.title} />
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="title">{oneData.title}</h1>
            <p> Brand: {oneData.brand}</p>
            <div className="price">${oneData.currentprice}</div>
            <div className="meta">Item # 35789461 | Model # 17010</div>

            {/* for add to cart */}

            <div className="cartsbtns d-flex">
              <select
                name="quantity"
                style={{
                  width: "15%",
                  paddingLeft: "15px",
                  marginRight: "20px",
                }}
              >
                <option label="1" value="1">
                  1
                </option>
                <option label="2" value="2">
                  2
                </option>
                <option label="3" value="3">
                  3
                </option>
                <option label="4" value="4">
                  4
                </option>
                <option label="5" value="5">
                  5
                </option>
                <option label="6" value="6">
                  6
                </option>
                <option label="7" value="7">
                  7
                </option>
                <option label="8" value="8">
                  8
                </option>
                <option label="9" value="9">
                  9
                </option>
                <option label="10" value="10">
                  10
                </option>
                <option label="11" value="11">
                  11
                </option>
                <option label="12" value="12">
                  12
                </option>
                <option label="13" value="13">
                  13
                </option>
                <option label="14" value="14">
                  14
                </option>
                <option label="15" value="15">
                  15
                </option>
                <option label="16" value="16">
                  16
                </option>
                <option label="17" value="17">
                  17
                </option>
                <option label="18" value="18">
                  18
                </option>
                <option label="19" value="19">
                  19
                </option>
                <option label="20" value="20">
                  20
                </option>
              </select>

              <button className="add-to-cart w-75"
              onClick={HandleCart}>
                <FaCartPlus /> Add to Cart
              </button>
            </div>

            <div className="listbtns d-flex mt-4 mb-4 justify-content-between">
              <button>
                <CiHeart style={{ fontSize: "23px" }} /> Add To List
              </button>
              <button>
                <CiGift style={{ fontSize: "23px" }} /> Add To Registry
              </button>
            </div>

            <div className="plans-container">
              <h2 className="plans-title">BEYOND Plans & Services</h2>

              <div className="plan">
                <label>
                  <input type="radio" name="plan" />
                  <span className="plan-text">
                    Add 2-Year Protection Plan - $17.99
                  </span>
                </label>
              </div>

              <div className="plan">
                <label>
                  <input type="radio" name="plan" />
                  <span className="plan-text">
                    Add 1-Year Product Protection - $10.99
                  </span>
                </label>
              </div>

              <div className="plan badge">
                <label>
                  <input type="radio" name="plan" />
                  <span className="plan-text">
                    Add 2-Year Product Protection - $17.99{" "}
                    <span className="tag">Best Seller</span>
                  </span>
                </label>
              </div>

              <div className="plan badge">
                <label>
                  <input type="radio" name="plan" />
                  <span className="plan-text">
                    Add 3-Year Product Protection - $26.99{" "}
                    <span className="tag">Best Value</span>
                  </span>
                </label>
              </div>

              <button className="add-plan-button">Add for $17.99</button>

              <a href="" className=" d-block text-center">
                See what is covered
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="desc-page">
          <h2>Product OverView</h2>

          <h3>Description</h3>

          <div>
            <p>{oneData.description}</p>
          </div>
        </div>

        <div className="page-section">
          <h2>Shipping & Returns</h2>
          <p>
            Free shipping on orders over $39. Returns accepted within 30 days of
            delivery.
          </p>
        </div>

      </div>
    </>
  );
};

export default Description;
