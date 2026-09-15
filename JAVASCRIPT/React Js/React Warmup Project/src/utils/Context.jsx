import React, { createContext, useState, useEffect } from "react"
import axios from './axios'

export const ProductsContext = createContext();

const Context = (props) =>{
    const [products, setProducts] = useState( JSON.parse(localStorage.getItem("products") || null))

    // const getProducts = async () =>{
    //     try{
    //         const data = await axios("/products")
    //         // console.log(data.data)
    //         setProducts(data.data)
    //     localStorage.setItem("products", JSON.stringify(data.data))

    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])

    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default Context;










// yaha tak api se data & form se fill kiya hua card dono show ho rahe hai, ha refresh par ja rahe hai par show ho rahe hai
// import React, { createContext, useState, useEffect } from "react"
// import axios from './axios'

// export const ProductsContext = createContext();

// const Context = (props) =>{
//     const [products, setProducts] = useState([])

//     const getProducts = async () =>{
//         try{
//             const data = await axios("/products")
//             // console.log(data.data)
//             setProducts(data.data)
//         }catch(err){
//             console.log(err)
//         }
//     }

//     useEffect(()=>{
//         getProducts()
//     },[])

//     return(
//         <ProductsContext.Provider value={[products, setProducts]}>
//             {props.children}
//         </ProductsContext.Provider>
//     )
// }

// export default Context;