
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PopularCard = () => {
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
      <div className="popular">
        <h2 className='mb-4'>Popular {categoryData.category} Categories</h2>
        <div className="popular-categories d-flex flex-wrap justify-content-center">
          {categoryData &&
            categoryData?.sections["Popular Categories"].map((item, index) => (
              <div key={index}>
                <div className="category-card">
                  <Link to={`/${category.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <img src={item.image_url} alt="Living Room Furniture" />
                  </Link> 
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularCard;
