import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Product/Action";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:3000/filterdpage")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const selectedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  const categoryData = categories.find((c) => c.category === selectedCategory);

  return !categoryData ? (
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
              justifyContent: "space-between",
              gap: "20px",
              padding: "20px",
            }}
          >
            {categoryData &&
              categoryData?.sections["products"].map((el) => (
                // <ProductCard {...data} />
                <ProductCard key={el.id} {...el} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
