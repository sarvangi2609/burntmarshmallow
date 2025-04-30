

import React from 'react'

const UnderFooter = () => {
  return (

    <>

        <div className="underfooter">

            <div className="footer-boxes">

            <div className="underfooterbox" style={{width:"70px"}}>
                <img src="https://ak1.ostkcdn.com/img/mxc/BBB_EmailCouponIcon_07252023.svg" height={70} width={70} alt="" />
            </div>

            <div className="underfooterbox "  style={{width:"300px",textAlign:"center"}}>
                <h2 style={{fontSize: "20px"}}>Take 20% off entire order*</h2>
                <span style={{fontSize: "16px"}}>Plus, get exclusive offers & savings!</span>  <br />  
                <span style={{fontSize: "12px"}}>*Some Exclusions Apply. <a href="" className='text-dark'>See Details</a></span>
            </div>

            <div className="underfooterbox "  style={{width:"330px"}}>
                <div className="inp" style={{height:"45px",margin:"20px 0px",}}>
                <input type="email" placeholder='Your Email Address' style={{height:"45px",paddingLeft:"10px",border:"1px solid grey",borderRadius:"5px"}} />

                <input type="button" value="Sign Up" style={{height:"45px",padding:"0px 20px",margin:"0px 10px",backgroundColor:"#0079D2",border:"none",borderRadius:"5px"}} />
                </div>
            </div>
            </div>

        </div>

    </>

  )
}

export default UnderFooter