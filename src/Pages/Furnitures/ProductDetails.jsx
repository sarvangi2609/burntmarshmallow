
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/Product/Action';
import ProductCard from './ProductCard';

const ProductDetails = () => {

    const { isloading, iserror, data } = useSelector((state) => state.product);
    // const [sort, setSort] = useState(null); 
    // const [search,setsearch] =useState("")
  
    // const [searchParams , setSearchParams] = useSearchParams()

    // const paramObj = {

    //     category:searchParams.getAll("category"),
    //     _sort:  sort ? "price" : undefined, 
    //     _order: sort,
    //     q:search
    
    //   }
  
  
    const dispatch = useDispatch();

    useEffect(() => {

        const id = setTimeout(()=>{
    
          dispatch(getData());
    
        },500)
        return (() => {
          clearTimeout(id)
        })
    
        // dispatch(getData(paramObj));
        
      }, [ ]);

      return isloading ? (
        <h1>Loading...</h1>
    
      ) : iserror ? (
        <h1>Somthing Went Wrong !</h1>
      ) : (
        <>

        <div className="main">

        <div className="productdetails">

        <div
    className="product-container"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    }}
  >
    {data.length > 0 &&
      data.map((el) => (
        <ProductCard
          key={el.id}
          title={el.title}
          image={el.progressiveImageLoader_img}
          id={el.id}
          price={el.currentPrice}
        />
      ))}
</div>



        </div>

        </div>


    
    </>
   
  )
}

export default ProductDetails