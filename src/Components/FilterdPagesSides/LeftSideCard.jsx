import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LeftSideCard = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null); // Track which category is open

  const [searchParams, setSearchParams] = useSearchParams();

  const [catVal, setcatVal] = useState(searchParams.getAll("category") || []);
  console.log(catVal);

  const handleChange = (value) => {
    let newarray = [...catVal];

    if (newarray.includes(value)) {
      newarray = newarray.filter((el) => el !== value);
    } else {
      newarray.push(value);
    }

    setcatVal(newarray);
    console.log(newarray)
  };

  useEffect(() => {
    setSearchParams({ category: catVal });

    fetch("http://localhost:3000/filterdpage")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, [catVal]);

  const selectedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  const categoryData = categories.find((c) => c.category === selectedCategory);

  if (!categoryData) return <div>Loading...</div>;

  const handleToggle = (categoryName) => {
    setOpenCategory((prev) => (prev === categoryName ? null : categoryName)); // Toggle the visibility
  };

  return (
    <div className="filteredpage">
      {categoryData &&
        categoryData?.sections["Featured Categories"].map((item, index) => (
          <div key={index}>
            <div className="filtered">
              <button onClick={() => handleToggle(item.name)}>
                {item.name}
                {openCategory === item.name ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}{" "}
                {/* Toggle icon */}
              </button>

              {openCategory === item.name && item.options && (
                <div className="dropdown-content">
                  {item.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <p
                        onClick={() => handleChange(option)}
                        style={{
                          cursor: "pointer",
                          fontWeight: catVal.includes(option)
                            ? "bold"
                            : "normal",
                          color: catVal.includes(option) ? "blue" : "black",
                        }}
                      >
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftSideCard;
