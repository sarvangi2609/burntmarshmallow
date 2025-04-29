

import React from 'react'
import LeftSideDrop from './LeftSideDrop'

const Furniture = () => {
  return (

    <>

    <div className="drop">

    <ul className='drop-ul'>
                  <div>
                    <h4>Living Room Furniture</h4>
                    <ul>
                      <li>Sofas and Couches</li>
                      <li>Sectionals</li>
                      <li>Benches</li>
                      <li>Ottomans and Poufs</li>
                      <li>Accent Chairs</li>
                      <li>Recliners</li>
                      <li>Coffee and Accent Tables</li>
                      <li>TV Stands</li>
                      <li>Best Sellers</li>
                    </ul>
                  </div>

                  <div>
                    <h4>Bedroom Furniture</h4>
                    <ul>
                      <li>Beds</li>
                      <li>Bedroom Sets</li>
                      <li>Headboards</li>
                      <li>Bed Frames</li>
                      <li>Dressers and Chests</li>
                      <li>Nightstands</li>
                      <li>Armoires and Wardrobes</li>
                      <li>Mattresses</li>
                      <li>Kids Beds</li>
                    </ul>
                  </div>

                  <div>
                    <h4>Dining, Kitchen and Bar</h4>
                    <ul>
                      <li>Kitchen and Dining Sets</li>
                      <li>Kitchen and Dining Chairs</li>
                      <li>Kitchen and Dining Tables</li>
                      <li>Counter and Bar Stools</li>
                      <li>Bar Tables</li>
                      <li>Buffets and Sideboards</li>
                      <li>Home Bars</li>
                      <li>Kitchen Islands and Carts</li>
                      <li>Kitchen Furniture</li>
                      <li>Best Sellers</li>
                    </ul>
                  </div>
    </ul>

    <div className="leftdrop">
    <LeftSideDrop />
    </div>

    </div>

    </>
    
  )
}

export default Furniture