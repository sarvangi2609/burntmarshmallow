
import React from 'react'
import ProfileLeftSideBar from './ProfileLeftSideBar'
import Dashboard from './Dashboard'

const MyAccount = () => {
  return (

    <div className="myaccount mt-5 mb-5">

      <div className="acc-left">
        <ProfileLeftSideBar />
      </div>

      <div className="acc-right">

        <Dashboard />

      </div>

    </div>
    
  )
}

export default MyAccount