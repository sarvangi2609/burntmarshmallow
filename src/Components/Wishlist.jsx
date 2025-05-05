

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wishlist = () => {

    const [list,setlist] = useState([])

    const FetchListData = async () => {
        try {
          const { data } = await axios.get("http://localhost:3000/Wishlist");
          setlist(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      const HandleRemove = async (id) => {
        try {
          axios.delete(`http://localhost:3000/Wishlist/${id}`).then((res) => {
            FetchListData();
          });
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
        FetchListData();
      })

  return (

    <div className="mx-auto p-6 mt-5 mb-5"
    style={{width:"98%"}}>
    <h1 className="text-2xl font-bold mb-4">Your WishList</h1>

    {/* List Item */}
    <div className="space-y-4">

    {list.map((item) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-white rounded shadow p-3 mb-3">
      {/* Product Info */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.proimg}
          alt="Product"
          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div>
          <h5 className="mb-1">{item.title.substring(0, 20) + "..."}</h5>
          <p className="text-muted mb-0">${item.currentprice}</p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => HandleRemove(item.id)}
        className="btn btn-link text-danger fw-semibold p-0"
      >
        Remove
      </button>
    </div>
  );
})}


    </div>

    
  </div>
    
  )
}

export default Wishlist