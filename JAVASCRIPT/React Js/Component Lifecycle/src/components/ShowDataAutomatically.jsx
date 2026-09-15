import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import axios from '../utils/axios'

function ShowDataAutomatically() {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        console.log("its is created")
        getData();
    },[])
    
    const getData = ()=>{
        const api = "/products"
        axios.get(api)
        .then(product=> {
            console.log(product.data)
            setProduct(product.data) })
        .catch(err=>{console.log(err)})
    }

  return (
    <div className='m-10'>
        <div className='m-10'>ShowDataAutomatically</div>

        <div>
        {product.length >0 ? product.map((item, index)=><li type="1" key={index}> {item.title} </li>) : "Loading..."  }
        </div>
    </div>
  )
}

export default ShowDataAutomatically



// baar baar different component me axios ko import karne se session create karna mushkil hota hai iss liye 
// utils folder banaya component level pe 
// uske ander axios.jsx banaya 

// 'import axios from 'axios'

// const instance = axios.create({
//     baseURL : 'https://fakestoreapi.com/'
// })

// export default instance'

// jaha axios use karna hai wha import this axios file and 
// axios.get("/contact")