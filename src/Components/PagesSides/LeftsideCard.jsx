
import React from 'react';
import { Link } from 'react-router-dom';

const LeftsideCard = ({ name,category,index }) => {

  return (
    <div className="leftside-card">

      <Link  to={`/${category.toLowerCase()}/promotion`} style={{textDecoration:"none",color:'black'}}>
      <span>{name}</span>
      </Link>
  
    </div>
  );
};

export default LeftsideCard;
