import React, { useEffect } from 'react'
import { getProducts, productRemove } from '../store/reducers/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../store/actions/ProductActions';


function Products() {
    const dispatch = useDispatch();
    const {products} = useSelector((state)=> state.ProductReducer)
    console.log(products);
    

    const handleRemove = (index) => {
      dispatch(productRemove(index));
    }

    useEffect(()=>{
        // dispatch(getProducts());
        dispatch(asyncGetProducts());
    },[])

  return (
    <div className='m-auto container  w-full bg-blue-200 select-none'>
      <h1 className='p-3 uppercase font-bold text-2xl'>Products List </h1>
      <ul>
        {products && products.map((product, index )=>{
          return <li className='px-3' key={index} >{product.title}
                    <span onClick={()=>handleRemove(index)} className='text-xl font-extrabold text-red-500 px-2 cursor-pointer'> X </span> 
                 </li> 
        })}
      </ul>
    </div>
  )
}

export default Products