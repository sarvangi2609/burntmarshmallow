
import React from 'react';
import { Link } from 'react-router-dom';

const LeftsideCard = ({ name,category,index }) => {

 const path = `/${category.toLowerCase()}/${name.toLowerCase().replace(/\s+/g, '-')}`;


  return (
    <div className="leftside-card">

      <Link  to={path} style={{textDecoration:"none",color:'black'}}>
      <span>{name}</span>
      </Link>
  
    </div>
  );
};

export default LeftsideCard;
