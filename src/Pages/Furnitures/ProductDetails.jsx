// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../Redux/Product/Action";
// import ProductCard from "./ProductCard";

// const ProductDetails = () => {
  // const { category } = useParams();
  // const [categories, setCategories] = useState([]);

  // const { isloading, iserror, data } = useSelector((state) => state.product);
  // const [sort, setSort] = useState(null);
  // const [search,setsearch] =useState("")

  // const [searchParams , setSearchParams] = useSearchParams()

  // const paramObj = {

  //     category:searchParams.getAll("category"),
  //     _sort:  sort ? "price" : undefined,
  //     _order: sort,
  //     q:search

  //   }

  // const dispatch = useDispatch();

  // useEffect(() => {

  //     const id = setTimeout(()=>{

  //       dispatch(getData());

  //     },500)
  //     return (() => {
  //       clearTimeout(id)
  //     })

  // dispatch(getData(paramObj));

  // }, [ ]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/filterdpage")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  // const selectedCategory =
  //   category?.charAt(0).toUpperCase() + category?.slice(1);

  // const categoryData = categories.find((c) => c.category === selectedCategory);

  // return   (
  //   <h1>Loading...</h1>
  // ) : iserror ? (
  //   <h1>Somthing Went Wrong !</h1>
  // ) : (
//     <>
//       <div className="main">
//         <div className="productdetails">
//           <div
//             className="product-container"
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "space-between",
//               gap: "20px",
//               padding: "20px",
//             }}
//           >
//             {/* {categoryData &&
//               categoryData?.sections["products"].map((el) => (
//                 <ProductCard key={el.id} {...el} />
//               ))} */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../Redux/Product/Action";
// import ProductCard from "./ProductCard";

// const ProductDetails = () => {
//   const { category,semicategory } = useParams(); // move this here
//   const dispatch = useDispatch();
//   const { isloading, iserror, data } = useSelector((state) => state.product);

//   const [searchParams] = useSearchParams();
// const [sort, setSort] = useState(null);
// const [search, setSearch] = useState("");

// const paramObj = {
//   category: category?.charAt(0).toUpperCase() + category?.slice(1),
//   semicategory: semicategory?.charAt(0).toUpperCase() + semicategory?.slice(1),
//   _sort: sort ? "currentprice" : undefined,
//   _order: sort,
//   q: search,
//   ...Object.fromEntries([...searchParams])
// };


// useEffect(() => {
//   const delay = setTimeout(() => {
//     dispatch(getData(paramObj));
//   }, 400);
//   return () => clearTimeout(delay);
// }, [category, semicategory, sort, search, searchParams]);



//   if (isloading) return <h1>Loading...</h1>;
//   if (iserror) return <h1>Something went wrong!</h1>;


  

//   return (
//     <div className="main">
//       <div className="productdetails">
//         <div className="product-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", padding: "20px" }}>
//           {data && data.map((el) => <ProductCard key={el.id} {...el} />)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Product/Action";
import ProductCard from "./ProductCard";

const ProductDetails = ({ sortOption }) => {
  const { category, semicategory } = useParams();
  const dispatch = useDispatch();
  const { isloading, iserror, data } = useSelector((state) => state.product);

  // const [sort, setSort] = useState(null); 
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  // const formattedCategory = category?.charAt(0).toUpperCase() + category?.slice(1);
  const formattedCategory = category?.toLowerCase().split("-").join(" ");
  const formattedSemiCategory = semicategory?.split("-").join(" ").toLowerCase();

  // in promotion page

  const sort = sortOption === 'lowToHigh' ? 'asc' 
            : sortOption === 'highToLow' ? 'desc' 
            : null;

            const sortedProducts = [...data].sort((a, b) => {
              if (sortOption === 'lowToHigh') return a.price - b.price;
              if (sortOption === 'highToLow') return b.price - a.price;
              return 0;
            });

  const paramObj = {
    categories_like: formattedCategory,
    ...(semicategory && { semicategory_like: formattedSemiCategory }),
    _sort: sort ? "currentprice" : undefined,
    _order: sort,
    q: search,
    ...Object.fromEntries([...searchParams]),
  };


  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(getData(paramObj));
    }, 400);
    return () => clearTimeout(id);
  }, [category, semicategory, sort, search, searchParams]);

  if (isloading) return <h1>Loading...</h1>;
  if (iserror) return <h1>Something went wrong!</h1>;

  return (
    <div className="main">
      <div className="productdetails">
        <div className="product-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", padding: "20px" }}>
          {data && data.map((el) => <ProductCard key={el.id} {...el} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


