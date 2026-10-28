import React from 'react'
import { ImGift } from 'react-icons/im'

function Marquee({imageurl}) {
  return (
    <div className='marquee-container flex w-max py-5 gap-16 '>
     {imageurl.map((url, index)=> <img src={url} className='w-[10vw] shrink-0'/>)} 
     {imageurl.map((url, index)=> <img src={url} className='w-[10vw] shrink-0'/>)} 
    </div>
  )
}

export default Marquee