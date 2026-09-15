import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data = [
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_Gk9QzD65r8nSssCvUQ7bbA9SLTB-x7l8RrBZGJAnQ&s=10", number: 48},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfc0R0DGhINgKVK0ZXL59bRskyd3PPnEhnJAG1M5Skw&s", number: 2},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xUk-Vf8HeZ3MBuzsC51MVZcaQt7SN6Lfw2ps2VXgbg&s=10", number: 11},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUQ0VWVLuIsIZmuX0-tcLoUvP5Ex5VmjI36yyS6yWEw&s=10", number: 48},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVAFHy2hmJ8FfBKvDAZAvuKx_yEUFNRbw8zI_RT7oNw&s=10", number: 2},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsigJ0Xe0Y8wVavTawwYZhgoOwx2JYeonSC4nxf7rdaA&s=10", number: 11}

    ]
  return (
    <div className='w-full mt-20 flex '>
        {data.map((elem, index)=>(
            <Stripe key={index} val={elem}/>
        ))}
    </div>
  )
}

export default Stripes