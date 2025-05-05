
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LeftsideCard from './LeftsideCard.jsx';
import Menu from '../Menu.jsx';

const LeftsideBar = () => {

    const { category } = useParams(); 
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/dynamicPage')
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


    <div className="left-sidebar">
    <h2 className='pt-4 pb-4'>{selectedCategory}</h2>
    <h3>Featured Categories</h3>
      <ul className="category-list">
        {
           categoryData && categoryData?.sections["Featured Categories"].map((item, index) => (
            <li key={index}>
              <LeftsideCard name={item.name} category={categoryData.category}   />
            </li>
          ))
       }
      </ul>
    </div>

    
    </>

  )
}

export default LeftsideBar