import React from "react";
import { useEffect, useState } from "react";


const ByColorCard = ({ category }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dynamicPage")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const selectedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  const categoryData = categories.find((c) => c.category === selectedCategory);

  // Don't render if "by Size" section does not exist
  if (!categoryData || !categoryData.sections?.["Popular Colors"]) return null;
  else
    return (
      <>
        <div className="by-color text-center">
          <h2 className="m-5">Shop Popular Rug Colors</h2>
         <div className="color-filter d-flex flex-wrap justify-content-between">

         {categoryData.sections["Popular Colors"].map((item, index) => (
          <div key={index}>
            <div className="color-list">
              <img
                src={item.image_url}
                alt="Grey Rugs"
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

export default ByColorCard;
