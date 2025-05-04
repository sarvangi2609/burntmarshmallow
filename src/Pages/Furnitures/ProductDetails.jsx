

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Product/Action";
import ProductCard from "./ProductCard";

const ProductDetails = ({ sortOption }) => {
  const { category, semicategory } = useParams();
  const dispatch = useDispatch();
  const { isloading, iserror, data } = useSelector((state) => state.product);

  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();


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

            const categoryFilters = searchParams.getAll("category");

            const paramObj = {
              categories_like: categoryFilters.length ? categoryFilters : formattedCategory,
              ...(semicategory && { semicategory_like: formattedSemiCategory }),
              _sort: sort ? "currentprice" : undefined,
              _order: sort,
              q: search,
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


