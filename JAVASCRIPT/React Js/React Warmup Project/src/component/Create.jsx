import React, { useContext, useState } from 'react'
import {ProductsContext} from '../utils/Context'
import {nanoid} from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Create() {
    const navigate = useNavigate()
    const [products, setProducts] = useContext(ProductsContext)

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    const AddProductHandler = (e)=>{
        e.preventDefault()


        // if form element are empty, then
        if(title.trim().length <5 || image.trim().length <5 || category.trim().length <5 || price.trim().length<=1 || description.trim().length <5 ){
            alert("anyone of field has been empty or less length 5")
            return;
        }

        const product = {
            id:nanoid(), title, image, category, price, description
        }
        console.log(product);
        setProducts([...products,product])
        
        localStorage.setItem("products", JSON.stringify([...products,product]))
        toast.success("Product Added Successfully");
        navigate("/")
        
        
    }
    console.log(products);

  return (

    <form onSubmit={AddProductHandler} action="" className='w-screen h-screen p-[5%] flex gap-2 flex-col items-center'>
        <Link to="/" className=''>Home</Link>
        <h1 className='text-3xl font-semibold'>Add New Product</h1>
        <input 
        type="url" placeholder='Enter product url' className='border bg-zinc-100 w-1/2 h-fit text-[2vw] py-1 px-3 rounded-xl'
        onChange={(e)=> setimage(e.target.value)}
        value={image} autoFocus
        />
        <input 
        type="text" placeholder='Enter product title' className='border bg-zinc-100 w-1/2 h-fit text-[2vw] py-1 px-3 rounded-xl'
        onChange={(e)=> settitle(e.target.value)}
        value={title} autoFocus
        />
        <div className='w-[50%] flex justify-between'>
            <input 
            type="text" placeholder='Enter product category' className='border bg-zinc-100 w-[48%] h-fit text-[2vw] py-1 px-3 rounded-xl'
            onChange={(e)=> setcategory(e.target.value)}
            value={category} autoFocus
            />
            <input 
            type="number" placeholder='Enter product price' className='border bg-zinc-100 w-[48%] h-fit text-[2vw] py-1 px-3 rounded-xl'
            onChange={(e)=> setprice(e.target.value)}
            value={price} autoFocus
            />
        </div>
        <textarea rows='8'
        type="text" placeholder='Enter product description' className='border bg-zinc-100 w-1/2 h-fit text-[1.6vw] py-1 px-3 rounded-xl'
        onChange={(e)=> setdescription(e.target.value)}
        value={description} autoFocus
        />
        <button type='submit' className='px-4 border rounded-2xl bg-blue-300 py-1'>Add New Product</button>
    </form>

  )
}

export default Create