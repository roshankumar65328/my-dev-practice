import React from 'react'

function Propsdrillingexercise({datas, handleClick1, index}) {
  const {image, name, artist, added} = datas;
  return (
    <div className='w-60 bg-zinc-200 p-4 rounded-md flex gap-4 relative mt-5'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover ' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick1(index)} className={`px-3 py-1 ${added === true ? "bg-teal-500": "bg-orange-600"} text-white text-xs rounded-full absolute bottom-0 left-1/2  -translate-x-[50%] translate-y-[50%] whitespace-nowrap`}> {added === false ? "Add to Favourate": "Added"}</button>
    </div>
  )
}

export default Propsdrillingexercise