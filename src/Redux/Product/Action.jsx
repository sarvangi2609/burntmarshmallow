
// import axios from "axios"
// import { PROERROR, PROREQ, PROSUCCESS } from "../actionType"
// import { useParams } from "react-router-dom";
// import { useState } from "react";




// export const getData  =(paramObj)=> (dispatch)=>{

// const fromdata = useParams();
// console.log(fromdata)
// const [categories, setCategories] = useState([]);

// const selectedCategory =
// category?.charAt(0).toUpperCase() + category?.slice(1);

// const categoryData = categories.find((c) => c.category === selectedCategory);

// console.log(categoryData)

//     dispatch({type:PROREQ})
//     axios.get("http://localhost:3000/filterdpage",{
//       params:paramObj
//     })

//     .then((res)=>{console.log(res)
//       dispatch({type:PROSUCCESS , payload : res.data})
//       setCategories(res.data)
//       }
//     )
//     .catch((err)=>{
//       console.log(err)
//       // toast.error(err?.message)
//       dispatch({type:PROERROR,payload:err?.message})
//     })
//   }

// export const DeleteData =(id)=>(dispatch)=>{

//   axios.delete(`http://localhost:3000/filterdpage/${id}`)
//   .then((res)=>{
//     console.log(res)
//     getData(dispatch)
//   })
//   .catch((err)=>console.log(err))

// }


// // Edit Data

// export const editData  =(id,editPro)=>(dispatch)=> {

//   axios.put(`http://localhost:3000/filterdpage/${id}`,editPro)
//   .then((res)=>{
//       alert("Product Update Successfully")
//       getData(dispatch)
//   })
//   .catch((err)=>console.log(err))


// }


// // Add data

// export const AddData  =(addData)=>(dispatch)=> {

//   axios.post("http://localhost:3000/furnitures",addData)
//   .then((res)=>{
//       alert("Product Added Successfully")
//       getData(dispatch)
//   })
//   .catch((err)=>console.log(err))


// }




import axios from "axios";
import { PROERROR, PROREQ, PROSUCCESS } from "../actionType";

// Get data
export const getData = (paramObj = {}) => async (dispatch) => {
  dispatch({ type: PROREQ });
  try {
    const res = await axios.get("http://localhost:3000/products", {
      params: paramObj,
    });
    dispatch({ type: PROSUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: PROERROR, payload: err.message });
  }
};

 

// Delete data
// export const DeleteData = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`http://localhost:3000/filterdpage/${id}`);
//     dispatch(getData());
//   } catch (err) {
//     console.log(err);
//   }
// };

// Edit data
// export const editData = (id, editPro) => async (dispatch) => {
//   try {
//     await axios.put(`http://localhost:3000/filterdpage/${id}`, editPro);
//     alert("Product updated successfully");
//     dispatch(getData());
//   } catch (err) {
//     console.log(err);
//   }
// };

// Add data
// export const AddData = (addData) => async (dispatch) => {
//   try {
//     await axios.post("http://localhost:3000/furnitures", addData);
//     alert("Product added successfully");
//     dispatch(getData());
//   } catch (err) {
//     console.log(err);
//   }
// };
