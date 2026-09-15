import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className='w-[12vw] px-3 py-1 bg-zinc-100 text-black  rounded-full font-medium flex items-center justify-center gap-0.5 '>
        <span className=" whitespace-nowrap">{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button