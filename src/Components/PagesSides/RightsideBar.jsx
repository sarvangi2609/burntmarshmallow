

import React, { useEffect, useState } from 'react'
import RightsideCard from './RightsideCard'
import { useParams } from 'react-router-dom';

const RightSideBar = () => {

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


  return (

    <>

    <div className="rightsidebar">

    {
           categoryData && categoryData?.sections["Banners"].map((item, index) => (
            <div key={index}>
              <RightsideCard name={item.name}
              banner_url ={item.banner_url}
              img1 ={item.img1}
              img1_title={item.img1_title}
              img1_title2={item.img1_title2}
              img2={item.img2}
              img2_title={item.img2_title}
              img2_title2={item.img2_title2}
              />
            </div>
          ))
       }

    </div>
    
    </>
    
  )
}

export default RightSideBar