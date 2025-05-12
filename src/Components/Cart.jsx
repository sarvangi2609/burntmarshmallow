import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { FaPaypal } from "react-icons/fa6";
import axios from "axios";
import{ PaymentQRCode }from "./Stripe";

export default function Cart() {
  const [cart, setcart] = useState([]);
  const [isFirstPayment, setIsFirstPayment] = useState(true);


  const FetchCartData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/cart");
      setcart(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleRemove = async (id) => {
    try {
      axios.delete(`http://localhost:3000/cart/${id}`).then((res) => {
        FetchCartData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdateQty = async (id, type) => {
    let { data } = await axios.get(`http://localhost:3000/cart/${id}`);

    const updateQty =
      type == "increment" ? data.quantity + 1 : data.quantity - 1;

    axios
      .patch(`http://localhost:3000/cart/${id}`, { quantity: updateQty })
      .then((res) => {
        FetchCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // payment Gateway
  const handleClick = () => {
    window.location.href = "https://buy.stripe.com/test_28ofZwgougFQ8lq288"; // Replace with your real Stripe Payment Link
  };


  useEffect(() => {
    FetchCartData();
  }, []);

  let totalOriginal = cart.reduce(
    (acc, item) => acc + item.currentprice * item.quantity,
    0
  );
  let totalSavings = cart.reduce(
    (acc, item) => acc + item.saving * item.quantity,
    0
  );
  let totalPrice = totalOriginal - totalSavings;



  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 d-flex">
      {/* Cart Items */}
      <div className="md:col-span-2 w-75">
        <h1 className="text-2xl font-semibold m-3">Your Cart</h1>
        <div className="space-y-4 w-75">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-5 fs-1">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 m-3 border rounded-xl"
              >
                <div className="flex items-center gap-4 d-flex m-3">
                  <img
                    src={item.proimg}
                    alt={item.title}
                    className="object-cover rounded-md"
                    style={{ width: "200px", height: "200px" }}
                  />

                  <div>
                    <h4 className="font-medium">{item.title.substring(0,20)}...</h4>
                    <p className="text-sm text-gray-500 ">
                      ${item.currentprice}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-2 quanbtn">
                        <button
                          disabled={item.quantity == 1}
                          onClick={() => HandleUpdateQty(item.id, "decrement")}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="text-base font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => HandleUpdateQty(item.id, "increment")}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          padding: "20px 20px",
                          textDecoration: "underline",
                        }}
                        onClick={() => HandleRemove(item.id)}
                      >
                        Remove
                      </button>

                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          padding: "20px 0px",
                          textDecoration: "underline",
                        }}
                      >
                        Save For Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="p-6 rounded-xl shadow-md h-fit w-50 mt-5">
        <button
          style={{
            height: "50px",
            width: "98%",
            backgroundColor: "#f9fafb",
            border: "none",
            marginBottom: "20px",
          }}
        >
          <FaPlus /> Add a Promo Code
        </button>

        <div className="space-y-2 text-sm cart-card">
          <button
            style={{
              height: "50px",
              width: "100%",
              backgroundColor: "#0079D2",
              border: "none",
              margin: "20px 5%",
              color: "white",
            }}
            onClick={handleClick}
          >
            <IoIosLock />
            Check Out
          </button>

          <button
            style={{
              height: "50px",
              width: "100%",
              backgroundColor: "#ffc439",
              border: "none",
              margin: "0px 5%",
              color: "white",
            }}
          >
            <FaPaypal /> PayPal
          </button>

          <p className="ps-4">You will save $16.57 on this order!</p>

          <div className="d-flex justify-content-between ps-3 pe-3 pb-1">
            <span>item:</span>
            <span>${totalOriginal.toFixed(2)}</span>
          </div>

          <div className="d-flex justify-content-between ps-3 pe-3 pb-1">
            <span>Sale Savings:</span>
            <span style={{ color: "red" }}>-${totalSavings}</span>
          </div>

          <div className="d-flex justify-content-between ps-3 pe-3">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between ps-3 pe-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="d-flex justify-content-between ps-3 pe-3 pb-4 fs-4 fw-bold">
            <span>Your Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      
        <PaymentQRCode />
      </div>
    </div>

   

    </>
  );
}
