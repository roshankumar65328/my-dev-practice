import React from 'react'
import {Link, NavLink} from 'react-router-dom'    // ye hame Link, Navlink tag awail karayega
import RoutingHome from './RoutingHome'
import RoutingContact from './RoutingContact'
import RoutingAbout from './RoutingAbout'

function RoutingNav() {
  return (
        <nav className='h-12 flex items-center justify-center gap-10 bg-zinc-400'>
          <NavLink to="/" style={(e)=> {       // routing me NavLink ke text me css lagane ke liye    style={}   wala tarika
            return {
                color: e.isActive ? "red" : ""
            }
          }} > Routing Home </NavLink>  


          <NavLink to="/routingcontact" className={(e)=>{     // routing me NavLink ke text me css lagane ke liye    className=''   wala tarika
            return [
                e.isActive ? "text-red-500" : ""
            ].join(" ")
          }} > Roting Contact </NavLink>


          <NavLink to="/routingabout">
            {(e)=>{                         // inside NavLink openin & closing add   {(e)=>{ <span> </span> }}   and className in span tag to add css to Nav text on opening particular component
                return (
                    <span className={[
                        e.isActive ? "text-red-500" : ""
                    ].join(" ")} > RoutingAbout</span>
                )
            }}
          </NavLink>
        </nav>
  )
}

export default RoutingNav