

import React, { useState } from 'react'
import { MdLockOutline } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { handleSignUp } from '../../Redux/Auth/Action';


const SignUp = () => {

  const initialState = {
    email:"",
    password :""
  }

  const [formdata,setformdata] = useState(initialState)
  const {email,password} = formdata;
  const  datafromstore = useSelector(state=>state.auth)
  console.log(datafromstore)
  const dispatch = useDispatch()

  const handleChange = (e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(handleSignUp(formdata))
    alert("Your was Profile Created")
    setformdata(initialState);
 
  }

  
    //  password show/hide:
  
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);


  return (
    <>

    <div className="signup" onSubmit={handleSubmit}>

      <form className="form-container">

        <h5 className='ps-3 pt-3'><FaUserPlus /> Create Account</h5>

        <input type="email" placeholder='Email'
        value={email} name="email" onChange={handleChange} /> <br />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            style={{ paddingRight: "40px" }}
          />
          <span
            onClick={togglePassword}
            style={{
              position: "absolute",
              right: "35px",
              top: "28px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
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