

import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BySizeCard = () => {
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
      <div className="size-filter d-flex flex-wrap">
        {categoryData &&
          categoryData?.sections["by Size"].map((item, index) => (
            <div key={index}>
  
                <div className="size-list">
                  <img
                    src={item.image_url}
                    alt="Living Room Furniture"
                  />
                  <span>{item.name}</span>
                </div>

            </div>
          ))}
      </div>
    </>
  );
};

export default BySizeCard;
