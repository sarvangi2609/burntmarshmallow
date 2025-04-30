import React from "react";
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import logo4 from '../../assets/logo4.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const UserProfile = () => {
  return (
    <>
      <div className="profilepage">

        <div className="linkcard mt-5 position-relative">

            <div className="linkcardlogos pt-2">

                <div className="d-flex w-75 m-auto justify-content-evenly">
                    <div className="logos">
                        
                        <img src={logo1} alt="" height={20} width={40} />

                    </div>

                    <div className="logos">
                    <img src={logo2} alt="" height={20} width={40} />

                    </div>
                    <div className="logos">
                    <img src={logo3} alt="" height={20} width={40} />

                    </div>
                    <div className="logos">
                    <img src={logo4} alt="" height={20} width={40} />
                    </div>
                </div>

            </div>

            <hr className="w-75" style={{position:"absolute",left:"12%"}} />

            <div className="linkcardtext w-75 m-auto pt-4">

                <span style={{fontSize:"12px"}}>Use your account credentials for all the Beyond brands, including Overstock and Bed Bath & Beyond.</span>

            </div>

        </div>

        <div className="userprofile">
          <SignUp />

          <hr />

          <SignIn />
        </div>

        <div className="lines">
          <div className="line1"></div>
          <span>OR</span>
          <div className="line2"></div>
        </div>

        <div className="loginbtns">

            <button><FcGoogle style={{fontSize:"25px"}} /> Continue with Google</button> <br />
            <button><FaFacebook style={{color:"#0076be",fontSize:"22px"}} /> Continue with Facebook</button>

        </div>

      </div>
    </>
  );
};

export default UserProfile;
