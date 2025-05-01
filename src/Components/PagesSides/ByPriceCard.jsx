import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ByPriceCard = () => {
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
      <section className="shop-by-price">
        {categoryData &&
          categoryData?.sections["by Price"].map((item, index) => (
            <div key={index}>
              <div className="price-list">
                <div className="pricecard">
                  <div>{item.title}</div>
                  <span>{item.limit}</span>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default ByPriceCard;
