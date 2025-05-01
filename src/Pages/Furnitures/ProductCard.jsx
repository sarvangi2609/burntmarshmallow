
import React from 'react'
import '../page.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({id,image,price,saleprice,title,option,msg,rating}) => {
    const  { currentUser } = useSelector(state=>state.auth)

    // const dispatch = useDispatch()
  return (

    <>

        <div className="productcard">

        <div>

          <div className="image" style={{position:"relative"}}>
          <img src={image} alt="" height={120} width={120}  />
          <FaRegHeart style={{position:"absolute" ,right:"20px",top:"10px",fontSize:"22px"}} />
          </div>

     

      <div className="msg d-flex justify-content-between">

      <span style={{color:"#1a4e8a"}} >{msg}</span>

      <span >{option}</span>

      </div>

    <div className="prices text-start">
      <span className="saleprice pe-2 " style={{color:"#ed0000",fontSize:"16px" ,fontWeight:"700"}}>{saleprice}</span>
      <span className="price" style={{fontSize:"12px",textDecoration:"line-through",borderBottom:"1px dashed",color:"#626669"}}>{price}</span>
    </div>

    <div className='salebtn '>Sale</div>

    <div className="rate p-2">{rating}</div>

    <p>{title}</p>


      {/* <h4 className='fs-6'>{price}</h4> */}


      {currentUser ?.role =="admin" &&<button style={{ margin: '5px',
  padding: '8px 15px',
  border: 'none',
  cursor: 'pointer',
  background: 'black',
  color: 'white',
  fontSize: '14px'}}

  >
    EDIT
    </button>}
      

      {currentUser ?.role =="admin" &&<button style={{ margin: '5px',
    padding: '8px 15px',
    border: 'none',
    cursor: 'pointer',
    background: 'black',
    color: 'white',
    fontSize: '14px',}}
    
    // onClick={() => dispatch(DeleteData(id))}
    >
      DELETE
      </button>}
      
    </div>

            

        </div>

    </>
    
  )
}

export default ProductCard