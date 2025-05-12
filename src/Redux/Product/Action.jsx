import axios from "axios";
import { PROERROR, PROREQ, PROSUCCESS } from "../ActionType";

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
