import React from 'react'
import DH_navBar from '../components/driverhomepage/DH_navbar'
import Earnings from '../components/driverhomepage/Earnings'
import RideRequests from '../components/driverhomepage/RideRequests'
const Driverpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/driverhomepage" element={<DriverHomepage />} />
        <Route path="/driverProfile" element={<DriverProfile />} />
        <Route path="/earnings" element={<Earnings />} />

        
        <Route path="/riderequests" element={<RideRequests />} />
      </Routes>
      <DH_navBar />
      
    </div>
  )
}

export default Driverpage
