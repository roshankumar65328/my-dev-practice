import React from 'react'
import {Link, Routes, Route, useLocation } from 'react-router-dom'
import Home from './component/Home'
import Details from './component/Details'
import Create from './component/Create'
import Edit from './component/Edit'



function App() {
  // const  {search, pathname} = useLocation()
  // console.log(search);    // jab main home link chal rha hoga jaise http://localhost:5173/  to ye dega  ->       , blank space console dega aur agar humne jwelery pe click kiya query chali to ye doga  ->  ?category=jewelery
  // console.log(pathname);  // jab main home link chal rha hoga jaise http://localhost:5173/  to ye dega  ->  /    , ek slash  , jab koi page ko open kr rahe honge jaise add to product pe click kiya to dega  ->  /create    , slash/pathname 
  


  return (
    <div className='w-[100%] h-screen flex border-box'>

      {/* {(pathname != "/" || search.length >0) && (

      <Link to='/' className='absolute top-20 left-[6%]'>Home</Link>
      )} */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  )
}

export default App