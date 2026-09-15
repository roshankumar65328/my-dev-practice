import React from 'react'
import { Link , Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import Products from './components/Products'
import Home from './components/Home'


function App() {
  return (
    <div className='w-full h-screen'>
        <nav className='flex justify-center gap-10 py-2'>
          <Link to='/'> Home </Link>
          <Link to='/users'> Users </Link>
          <Link to='/products'> Products </Link>
        </nav>
        <hr />


        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>


    </div>
  )
}

export default App