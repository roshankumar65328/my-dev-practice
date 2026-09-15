import React, { useContext, useEffect, useState } from 'react'
import { useNavigate , Link, useParams} from 'react-router-dom'
import { ProductsContext } from '../utils/Context'
import {nanoid} from 'nanoid'

function Edit() {
    const [products, setProducts] = useContext(ProductsContext);
    const [product, setProduct] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        description: "",
    });

    const changeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const {id} = useParams()



    useEffect(()=>{
        setProduct(products.filter((p)=> p.id == id)[0])
    },[id])
    console.log(product);
    

    const AddProductHandler = (e)=>{
        e.preventDefault()



        const pi = products.findIndex((p)=> p.id == id);
        console.log(pi);

        const copyData = [...products];
        copyData[pi] = {...products[pi], ...product}
        console.log(copyData);
        setProducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData))
        navigate(-1)
       
        
        // const product = {
        //     id:nanoid(), title, image, category, price, description
        // }
        // console.log(product);
        // setProducts([...products,product])

        // if form element are empty, then
        // console.log(product.title.trim().length);
        // if(product.title.trim().length <5 || product.image.trim().length <5 || product.category.trim().length <5 || product.price.trim().length <1 || product.description.trim().length <5 ){
        //     alert("anyone of field has been empty or less length 5")
        //     return;
        // }
        
        // localStorage.setItem("products", JSON.stringify([...products,product]))
        // navigate("/")
        
        
    }

    
  return (
    <form onSubmit={AddProductHandler} action="" className='w-screen h-screen p-[5%] flex gap-2 flex-col items-center'>
        <Link to="/" className=''>Home</Link>
        <h1 className='text-3xl font-semibold'>Edit Your Product</h1>
        <input 
        type="url" placeholder='Enter product url' className='border bg-zinc-100 w-1/2 h-fit text-[2vw] py-1 px-3 rounded-xl'
        name="image"
        onChange={changeHandler}
        value={product && product.image} autoFocus
        />
        <input 
        type="text" placeholder='Enter product title' className='border bg-zinc-100 w-1/2 h-fit text-[2vw] py-1 px-3 rounded-xl'
        name="title"
        onChange={changeHandler}
        value={product && product.title} autoFocus
        />
        <div className='w-[50%] flex justify-between'>
            <input 
            type="text" placeholder='Enter product category' className='border bg-zinc-100 w-[48%] h-fit text-[2vw] py-1 px-3 rounded-xl'
            name="category"
            onChange={changeHandler}
            value={product && product.category} autoFocus
            />
            <input 
            type="number" placeholder='Enter product price' className='border bg-zinc-100 w-[48%] h-fit text-[2vw] py-1 px-3 rounded-xl'
            name="price"
            onChange={changeHandler}
            value={product && product.price} autoFocus
            />
        </div>
        <textarea rows='8'
        type="text" placeholder='Enter product description' className='border bg-zinc-100 w-1/2 h-fit text-[1.6vw] py-1 px-3 rounded-xl'
        name="description"
        onChange={changeHandler}
        value={product && product.description} autoFocus
        />
        <button type='submit' className='px-4 border rounded-2xl bg-blue-300 py-1'>Add New Product</button>
    </form>
  )
}

export default Edit