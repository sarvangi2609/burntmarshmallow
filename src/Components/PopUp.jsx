import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const PopUp = () => (
  <>
    <div className="popup">

      <div className="profilepage" style={{ width: "98%" }}>

        <div
          className="linkcard mt-5 position-relative"
          style={{ height: "60px" }}
        >
          <div className="linkcardtext w-75 m-auto pt-3">
            <span style={{ fontSize: "12px" }}>
              Use your account credentials for all the Beyond brands, including
              Overstock and Bed Bath & Beyond.
            </span>
          </div>
        </div>

        <div className="userprofile">

          <div className="popup-signup">
            <div className="signup"
            style={{width:"300px"}}
            >
              <form className="form-container">
                <h5 className="ps-3 pt-3">
                  <FaUserPlus /> Create Account
                </h5>
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: "80%" }}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="password"
                  style={{ position: "relative", width: "80%" }}
                />
                <span
                  style={{ position: "absolute", top: "285px", left: "320px" }}
                >
                  <FaEye />
                  {/* <FaEyeSlash /> */}
                </span>
                <br />
                <div className="checkbox d-flex ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    style={{ height: "18px", width: "18px" }}
                  />
                  <span style={{ lineHeight: "40px" }}>
                    Keep me signed in.
                    <IoIosInformationCircleOutline />
                  </span>
                </div>
                <button style={{ width: "80%" }}>
                  <MdLockOutline /> Create Account
                </button>
                <div className="w-75 m-auto ps-4" style={{ fontSize: "12px" }}>
                  By creating an account, you agree to our <br />
                  <a href=""> Terms & Conditions and Privacy Policy.</a>
                </div>
              </form>
            </div>
          </div>


          <div className="popup-signin">
            <div className="signin"
            style={{width:"300px"}} 
            >
              <form className="form-container">
                <h5 className="ps-3 pt-3">
                  <FaUserEdit /> Sign In
                </h5>
                <input
                  type="text"
                  placeholder="Email"
                  style={{ width: "80%" }}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="password"
                  style={{ position: "relative", width: "80%" }}
                />
                <span
                  style={{ position: "absolute", top: "285px", left: "680px" }}
                >
                  <FaEye />
                  {/* <FaEyeSlash /> */}
                </span>
                <br />
                <div className="checkbox d-flex ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    style={{ height: "18px", width: "18px" }}
                  />
                  <span style={{ lineHeight: "40px" }}>
                    Keep me signed in.
                    <IoIosInformationCircleOutline />
                  </span>
                </div>
                <button
                  style={{
                    backgroundColor: "#0079d2",
                    border: "none",
                    width: "80%",
                  }}
                >
                  <MdLockOutline />
                  Sign In
                </button>
                <div className="w-75 m-auto ps-5" style={{ fontSize: "14px" }}>
                  <a href="">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line1"></div>
          <span>OR</span>
          <div className="line2"></div>
        </div>

        <div className="loginbtns">
          <button style={{margin:"10px 40px"}}>
            <FcGoogle style={{ fontSize: "25px" }} /> Continue with Google
          </button>{" "}
          <br />
          <button style={{margin:"10px 40px"}}>
            <FaFacebook style={{ color: "#0076be", fontSize: "22px" }} />{" "}
            Continue with Facebook
          </button>
        </div>

      </div>
    </div>
  </>
);

export default PopUp;
