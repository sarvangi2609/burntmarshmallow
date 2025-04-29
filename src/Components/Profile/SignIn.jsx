

import React from 'react'
import { MdLockOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignIn = () => {
  return (
    <>

    <div className="signin">

        <form className="form-container">
      
              <h5 className='ps-3 pt-3'><FaUserEdit  /> Sign In</h5>
      
              <input type="text" placeholder='Email' /> <br />
      
              <input type="password" placeholder='password' style={{position:"relative"}}/>
              <span style={{position:"absolute" ,top:"463px",left:"970px"}}>
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
      
              <button style={{backgroundColor:"#0079d2",border:"none"}}><MdLockOutline />Sign In</button>
      
              <div className='w-75 m-auto ps-5' style={{fontSize:"14px"}}>
              <a href="">Forgot your password?</a>
             </div>
      
            </form>

    </div>

    </>
  )
}

export default SignIn