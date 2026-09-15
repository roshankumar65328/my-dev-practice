import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { Link, useParams , useLocation, useNavigate} from 'react-router-dom'
import Loading from './Loading';
import { useContext } from "react";
import { ProductsContext } from "../utils/Context";
import { toast } from 'react-toastify';

function Details() {
  const [products, setProducts] = useContext(ProductsContext);
  const [product,setProduct] = useState(null);
  const {search, pathname} = useLocation()
  const {id} = useParams();   // ye link ke sath aaya hua variable dega
  const navigate = useNavigate()

  // const getSingleProduct = async () => {
  //   // pehle context me dekho
  //   const foundProduct = products.find((p)=> String(p.id) === String(id))
  //   if(foundProduct){
  //     setProduct(foundProduct)
  //     return;
  //   }

  //   try{
  //     const {data} = await axios.get(`/products/${id}`)
  //     // console.log(data)
  //     setProduct(data);
  //   }catch(err){
  //     console.log(err)
  //   }
  // };
 
  useEffect(()=>{
    if(!product){
      // console.log(products);
      // console.log(products.filter((p)=> p.id == id));
      setProduct(products.filter((p)=> p.id == id)[0])     
    }
      // getSingleProduct();
  },[id, products]);


  const productDeleteHandler = ()=>{
    const filteredProduct = products.filter((p)=> p.id !== id);
    setProducts(filteredProduct);
    localStorage.setItem("products", JSON.stringify(filteredProduct));
    toast.error("Product Deleted");
    navigate("/")
  }

  return ( product ?
    <div className='w-[70vw] h-[100vh] flex justify-center relative top-[20%]'>

        {(pathname != "/" || search.length >0) && (
        <Link to='/' className='absolute top-[-15%] left-[28%] text-lg font-semibold border-1 px-3 rounded-full bg-blue-300'>Home</Link>
        )}

        <div className='w-[20vw] relative top-[10%]'>
            <img src={product.image} alt="" />
        </div>
        <div className=' relative h-[60%] w-[55%] left-[5%] leading-[4vw] '>
            <h1 className='text-[2.5vw] leading-[2.6vw] font-semibold pt-[10%]'>{product.title}</h1>
            <h2 className='text-[2vw] opacity-60 '>{product.category}</h2>
            <h3 className='text-[2.5vw] font-bold '>₹ {product.price}</h3>
            <p className='text-md font-thin leading-[2vw] '>{product.description}</p>
        <div>
          <Link to={`/edit/${product.id}`} className='py-2 px-3 mx-2 mt-5  leading-none border-1 rounded-full bg-blue-400'>Edit</Link>
          <button onClick={()=> productDeleteHandler(product.id)} className='py-2 px-3 mx-2 mt-5  leading-none border-1 rounded-full bg-red-400'>Remove</button>
        </div>
        </div>
        
    </div>
     : <Loading />
  )
}

export default Details













// yaha tak api se data & form se fill kiya hua card dono show ho rahe hai, ha refresh par ja rahe hai par show ho rahe hai
// import React, { useEffect, useState } from 'react'
// import axios from '../utils/axios'
// import { Link, useParams , useLocation} from 'react-router-dom'
// import Loading from './Loading';
// import { useContext } from "react";
// import { ProductsContext } from "../utils/Context";

// function Details() {
//   const [products] = useContext(ProductsContext);
//   const [product,setProduct] = useState(null);
//   const {search, pathname} = useLocation()

//   const {id} = useParams();

//   const getSingleProduct = async () => {

//     // pehle context me dekho
//     const foundProduct = products.find((p)=> String(p.id) === String(id))
//     if(foundProduct){
//       setProduct(foundProduct)
//       return;
//     }

//     try{
//       const {data} = await axios.get(`/products/${id}`)
//       // console.log(data)
//       setProduct(data);
//     }catch(err){
//       console.log(err)
//     }
//   };
 
//   useEffect(()=>{
//       getSingleProduct();
//   },[id, products]);


//   return ( product ?
//     <div className='w-[70vw] h-[100vh] flex justify-center relative top-[20%]'>

//         {(pathname != "/" || search.length >0) && (
//         <Link to='/' className='absolute top-[-15%] left-[28%] text-lg font-semibold border-1 px-3 rounded-full bg-blue-300'>Home</Link>
//         )}

//         <div className='w-[20vw] relative top-[10%]'>
//             <img src={product.image} alt="" />
//         </div>
//         <div className=' relative h-[60%] w-[55%] left-[5%] leading-[4vw] '>
//             <h1 className='text-[2.5vw] leading-[2.6vw] font-semibold pt-[10%]'>{product.title}</h1>
//             <h2 className='text-[2vw] opacity-60 '>{product.category}</h2>
//             <h3 className='text-[2.5vw] font-bold '>₹ {product.price}</h3>
//             <p className='text-md font-thin leading-[2vw] '>{product.description}</p>
//         <div>
//           <button className='py-2 px-3 mx-2 mt-5  leading-none border-1 rounded-full bg-blue-400'>Edit</button>
//           <button className='py-2 px-3 mx-2 mt-5  leading-none border-1 rounded-full bg-red-400'>Remove</button>
//         </div>
//         </div>
        
//     </div>
//      : <Loading />
//   )
// }

// export default Details