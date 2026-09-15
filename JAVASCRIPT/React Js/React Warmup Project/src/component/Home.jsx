import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductsContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

function Home() {
  const [products] = useContext(ProductsContext);
  // console.log(products)

  const [filterProducts, setFilterProducts] = useState(null)

  let {search} = useLocation();
  // console.log(search)
  // let category = search.split("=")[1]
  // category = decodeURI(category)
  // console.log(category)
  // category = decodeURIComponent(search)
let category = search ? decodeURIComponent(search.split("=")[1]) : undefined;
// console.log(category);



  // const getProductCategory = async () => {
  //   try {
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     console.log(data);
  //     setFilterProducts(data);
      
      
  //     // filterProducts = data;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  useEffect(()=>{
    // console.log(products);
    if(!category) setFilterProducts(products);    // when we don't have category then, show all products on home screen
    if(category != undefined) setFilterProducts(products.filter((p)=> p.category == category));    // when we have particularly category
    
  },[category, products])


  return filterProducts ? (
    <>
      <Nav />

      <div className='w-[85%] h-full bg-zinc-200 overflow-y-auto p-5 '>
        <Link to='/' className='text-4xl text-center flex justify-center mt-2 uppercase'>Catalogue</Link>
        <div className='w-100% h-fit flex flex-wrap justify-center '>
            {filterProducts.map((product,index)=>(
                <Link to={`/details/${product.id}`} className='w-[18vw] h-[50vh]  mt-8' key={product.id}>
                <div className='w-[92%] h-[100%] bg-zinc-300 flex flex-col items-center '>
                    <div className='w-[92%] h-[70%] bg-zinc-100 mt-2 p-1'> 
                        <img className='w-100% h-full object-contain object-center hover:scale-[1.1]' src={product.image} alt="" /> 
                    </div>
                    <h4 className='text-[1vw] mt-2 mx-4 text-center'>{product.title}</h4>
                </div>
                </Link>
            ))}
            </div>
      </div>
    </>
  ) : <Loading />
}

export default Home