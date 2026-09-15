import React, { useContext } from 'react'
import { Link , useLocation} from 'react-router-dom'
import { ProductsContext } from '../utils/Context'

function Nav() {

  const  {search, pathname} = useLocation()
  // console.log(search);
  // console.log(search.length);
  // console.log(pathname);
  
  const [products] = useContext(ProductsContext);

  let distict_category = products && products.reduce((acc,curr)=>[...acc, curr.category],[])
  console.log(distict_category)
  distict_category = [...new Set(distict_category)]
  // console.log(distict_category)

const getRandomColor = () => {
  return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
};

  return (
      <nav className="w-[15%] h-screen flex flex-col items-center bg-zinc-300 ">
        <a href="/create" className='p-1 w-[80%] my-8 rounded-full border-1 text-blue-500 font-semibold flex justify-center'>Add New Product</a>
        <hr className='w-full mt-2' />

        <h1 className='w-full mt-5 mb-3 text-2xl text-center'>Category</h1>

        {(pathname != "/" || search.length >0) && (
        <Link to='/' className='absolute top-[5%] left-[20%] text-lg font-semibold border-1 px-3 rounded-full bg-blue-300'>Home</Link>
        )}
        
        {/* <div className='flex flex-cols'> */}
          <div className='flex flex-col '>
            {distict_category.map((cat,index)=>(
              <div className='flex items-center' key={index}>
              <span className='w-[1vw] h-[1vw] rounded-full mr-2 mt-1 flex' style={{ backgroundColor: getRandomColor() }}></span>
              <Link to={`/?category=${cat}`} className='text-sm'>{cat}</Link>
              </div>
            ))}
          </div>

        {/* </div> */}

        {/* <Link to='/women'>Women</Link>
        <Link to='/child'>Child</Link> */}


      </nav>
  )
}

export default Nav