


import axios from "axios";
import { LOGOUT, PROERROR, SIGNIN, SIGNUP } from "../ActionType";



// SignUp 

export const handleSignUp = (formdata)=>(dispatch)=>{

    console.log(formdata)

    axios.post(" http://localhost:3000/Auth",{...formdata,role:"user"})
    .then((res)=>dispatch({type: SIGNUP,payload:formdata}))
    .catch((err)=>console.log(err))


  }


//   SignIn

export const HandleSignIn =  (formdata)=>(dispatch)=>{
   const { email , password } = formdata
    axios.get("http://localhost:3000/Auth")
    .then((res)=>{
      const usersArray = res.data
      const currentUser = usersArray.find((el)=>el.email == email && el.password == password)

      if (currentUser) {
        dispatch({ type: SIGNIN, payload: currentUser });
        alert("You are signed in");
      } else {
        alert("User not found. Please check your credentials.");
        dispatch({ type: SIGNIN, payload: null }); 
      }
     
    })
    .catch((err)=>({type:PROERROR,payload:err?.message}))
  }


  // logout
  export const HandleLogOut = () => (dispatch) => {
    axios
      .post("http://localhost:3000/Auth") 
      .then((res) => {
        dispatch({ type: LOGOUT });
      })
      .catch((err) => console.log("Logout Error:", err));
  };
  