import React from 'react'
import Product from './Product'

function Products() {
    const products = [
        {title: "Ariquel", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque impedit commodi optio aliquam nostrum", live: true, case: false},
        {title: "Biquel", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque impedit commodi optio aliquam nostrum", live: true, case: false},
        {title: "Criquel", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque impedit commodi optio aliquam nostrum", live: true, case: true},
        {title: "Driquel", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque impedit commodi optio aliquam nostrum", live: true, case: false},
        {title: "Eriquel", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque impedit commodi optio aliquam nostrum", live: true, case: true},
        
    ]
  return (
    <div className="px-3 mt-10">
        {products.map((elem, index)=>(
            <Product val={elem} key={index} />
        ))}
    </div>
  )
}



export default Products