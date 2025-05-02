import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TopBox = () => {
    
    const { category } = useParams(); 
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/filterdpage')
          .then(response => response.json())
          .then(data =>{
            setCategories(data)
             });
      }, []);


    const selectedCategory = category?.charAt(0).toUpperCase() + category?.slice(1); 

  const categoryData = categories.find(c => c.category === selectedCategory);

  if (!categoryData) return <div>Loading...</div>

  return (

    <>

    <div className="titles">
        <h1>{category}</h1>
    </div>

<div className="filter-box">

    <h3>What design style are you looking for?</h3>

    <div className="filter-options">

    {
           categoryData && categoryData?.sections["box"].map((item, index) => (
            <div key={index}>
               <button className="filter-option">{item.title}</button>
            </div>
           
          ))
       }


    </div>


</div>
    
    </>

    
  )
}

export default TopBox