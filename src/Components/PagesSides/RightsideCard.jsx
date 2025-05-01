

import React from 'react'

const RightsideCard = ({name,banner_url,img1,img1_title,img1_title2,img2,img2_title,img2_title2}) => {
  return (

    <>

    <div className="righsidecard">

        <div className="banners d-flex">

            <div className="banner1">
                <img src={banner_url} alt="not found" />
                <div>
                    <h1 style={{fontSize:"32px"}}>Shop Top-Rated</h1>
                    <span className='d-block'>{name}</span>
                    <button>Shop Now</button>
                </div>

            </div>

            <div className="banner2">
               <div> 
                <span>{img1_title}</span>
                <span style={{fontWeight:"700"}}>Confidently</span>
                <img src={img1} alt="" /></div>

               <div>

               <img src={img2} alt="" />
               <span>{img2_title}</span>
                <span style={{fontWeight:"700"}}>{img2_title2}</span>
               </div>
            </div>

        </div>

    </div>

    </>

  )
}

export default RightsideCard