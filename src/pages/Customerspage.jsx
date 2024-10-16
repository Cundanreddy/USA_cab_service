import React from 'react'
import Booking from '../components/ridershomepage/Booking'
import SearchBar from '../components/ridershomepage/SearchBar'

const Customerpage = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Booking/>
      <Routes>
        <Route path="/" element={<RiderHomepage />} />
        
      </Routes>
      <DH_navBar />
      
    </div>
  )
}

export default Customerpage
