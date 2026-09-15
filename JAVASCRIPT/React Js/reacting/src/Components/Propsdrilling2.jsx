import React from 'react'

function Propsdrilling2({values, handleClick, index}) {
    const {name, profession, image, friends} = values;
  return (
    <div className='w-52 h-64 bg-white-200 rounded-md overflow-hidden border-2'>
        <div className='w-full h-32 bg-sky-200'>
            <img className='w-full h-full object-cover ' src={image} alt="" />
        </div>
        <div className='w-full p-3 '>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleClick(index)} className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>{friends === true ? "Friends" : "Add Friends"}</button>
        </div>
    </div>
  )
}

export default Propsdrilling2