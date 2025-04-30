
import axios from "axios"
import { PROERROR, PROREQ, PROSUCCESS } from "../actionType"


export const getData  =(paramObj)=> (dispatch)=>{

    dispatch({type:PROREQ})
    axios.get("http://localhost:3000/furnitures",{
      params:paramObj
    })

    .then((res)=>{console.log(res)
      dispatch({type:PROSUCCESS , payload : res.data})

      }
    )
    .catch((err)=>{
      console.log(err)
      toast.error(err?.message)
      dispatch({type:PROERROR,payload:err?.message})
    })
  }

export const DeleteData =(id)=>(dispatch)=>{

  axios.delete(`http://localhost:3000/furnitures/${id}`)
  .then((res)=>{
    console.log(res)
    getData(dispatch)
  })
  .catch((err)=>console.log(err))

}


// Edit Data

export const editData  =(id,editPro)=>(dispatch)=> {

  axios.put(`http://localhost:3000/furnitures/${id}`,editPro)
  .then((res)=>{
      alert("Product Update Successfully")
      getData(dispatch)
  })
  .catch((err)=>console.log(err))


}


// Add data

export const AddData  =(addData)=>(dispatch)=> {

  axios.post("http://localhost:3000/furnitures",addData)
  .then((res)=>{
      alert("Product Added Successfully")
      getData(dispatch)
  })
  .catch((err)=>console.log(err))


}
