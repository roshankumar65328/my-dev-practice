import React from 'react'
import {Route, Routes} from "react-router-dom"
import RoutingHome from '../Components/RoutingHome'
import RoutingContact from '../Components/RoutingContact'
import RoutingAbout from '../Components/RoutingAbout'
import RoutingDetails from '../Components/RoutingDetails'

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutingHome />} />
        <Route path="/routingcontact" element={<RoutingContact />} />
        <Route path="/routingabout" element={<RoutingAbout />} />

        <Route path="/routingcontact/:name" element={<RoutingDetails />} />
      </Routes>



        {/* child routing wale component ko same page me kholne ke liye  */}
        {/* <Routes>
        <Route path="/" element={<RoutingHome />} />
        <Route path="/RoutingContact" element={<RoutingContact />} >
        <Route path="/RoutingContact/:name" element={<RoutingDetails />} />
        </Route>
        <Route path="/RoutingAbout" element={<RoutingAbout />} />
        </Routes> */}
    </>
  )
}

export default Routing