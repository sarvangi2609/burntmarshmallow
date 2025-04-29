

import React from 'react'
import { MdLockOutline } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
  return (
    <>

    <div className="signup">

      <form className="form-container">

        <h5 className='ps-3 pt-3'><FaUserPlus /> Create Account</h5>

        <input type="text" placeholder='Email' /> <br />

        <input type="password" placeholder='password' style={{position:"relative"}}/>
        <span style={{position:"absolute" ,top:"463px",left:"600px"}}>
          <FaEye />
        {/* <FaEyeSlash /> */}
        </span>
        <br />

        <div className="checkbox d-flex ">
        <input type="checkbox" name="" id="" style={{height:"25px",width:"25px"}} /> 
        <span style={{lineHeight:"40px"}}>Keep me signed in. 
         <IoIosInformationCircleOutline />
        </span>
        </div>

        <button><MdLockOutline /> Create Account</button>

        <div className='w-75 m-auto ps-4' style={{fontSize:"12px"}}>By creating an account, you agree to our <br />
        <a href=""> Terms & Conditions and Privacy Policy.</a>
       </div>

      </form>

    </div>
    
    </>
  )
}

export default SignUp