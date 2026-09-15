import React from 'react'
import { ImGift } from 'react-icons/im'

function Marquee({imageurl}) {
  return (
    <div className='flex w-full py-5 gap-16 whitespace-nowrap overflow-hidden '>
     {imageurl.map((url, index)=> <img src={url} className='w-[10vw]'/>)} 
     {imageurl.map((url, index)=> <img src={url} className='w-[10vw]'/>)} 
    </div>
  )
}

export default Marquee