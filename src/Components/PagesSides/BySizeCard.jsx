import { useEffect, useState } from "react";

const BySizeCard = ({ category }) => {
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
  if(!categoryData || !categoryData.sections?.["by Size"])
   return null ;
  else
   return (
    <div className="bysize text-center">
      <h2 className="m-5">Shop Popular {categoryData.category} Sizes</h2>
      <div className="size-filter d-flex flex-wrap">
        {categoryData.sections["by Size"].map((item, index) => (
          <div key={index}>
            <div className="size-list">
              <img src={item.image_url} alt={item.name} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BySizeCard;

