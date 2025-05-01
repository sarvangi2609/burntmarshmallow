

import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ByShopCard = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dynamicPage")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const selectedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  const categoryData = categories.find((c) => c.category === selectedCategory);

  if (!categoryData) return <div>Loading...</div>;

  return (
    <>
    <div className="shop-more">
    <h2 className="m-5 text-center">Shop More {categoryData.category}</h2>
    <div className="category-filter d-flex flex-wrap">
        {categoryData &&
          categoryData?.sections["Shop More"].map((item, index) => (
            <div key={index}>
  
                <div className="cat-list">
                  <img
                    src={item.image_url}
                    alt="not found"
                  />
                  <span>{item.name}</span>
                </div>

            </div>
          ))}
      </div>

    </div>

    </>
  );
};

export default ByShopCard;
