import React, { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { HandleSignIn } from "../../Redux/Auth/Action";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formdata, setformdata] = useState(initialState);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const { email, password } = formdata;

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(HandleSignIn(formdata));
    setformdata(initialState);
  };

  //  password show/hide:

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="signin">
        <form className="form-container" onSubmit={handleSubmit}>
          <h5 className="ps-3 pt-3">
            <FaUserEdit /> Sign In
          </h5>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />{" "}
          <br />
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
            <input
              type="checkbox"
              name=""
              id=""
              style={{ height: "25px", width: "25px" }}
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
              color: "white",
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
    </>
  );
};

export default SignIn;
