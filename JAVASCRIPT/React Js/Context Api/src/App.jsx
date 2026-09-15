import React from 'react'
import Home from './component/Home'
import User from './component/User'
import About from './component/About'
import {Routes, Route, Link} from 'react-router-dom'
import UserDetails from './component/UserDetails'

function App() {
  return (
    <div className='p-5'>

      <nav className='flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>





      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/:id" element={<UserDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>


    </div>
  )
}

export default App




// why need context = abhi hum data ko app me define karte hai , props ke throw children ko dete jate hai, niche ke children ko data chahiye tab bhi bich ke children se hote huye hi ayega data
// context api = isme hum website ke data ko centralize kr rhe hote hai
// see Context.jsx
