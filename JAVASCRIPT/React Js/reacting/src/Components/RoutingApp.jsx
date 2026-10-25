// routing = ek package hai, jo hame pages switch karna me help karta h bina page reload ke, jo install ke liye vsCode terminal pe project folder open karke type 'npm install react-router-dom'
// fir main.jsx file me , import {BrowserRouter} from 'react-router-dom'
// fir main.jsx me hi App Component ko BrowserRouter tag me aise wrap karna hai
    // <BrowserRouter>
    //   <App />
    // </BrowserRouter>
import React from 'react'
import {Link, Route, Routes} from "react-router-dom";   // ye hame Link, Route, Routes tags avail karayega
import RoutingHome from "./RoutingHome"
import RoutingContact from "./RoutingContact"
import RoutingAbout from "./RoutingAbout";
import RoutingNav from './RoutingNav';
import Routing from "../utils/Routing";

function RoutingApp() {
  return (
    <>
      <RoutingNav />
      <Routing />
    </>
  )
}

export default RoutingApp