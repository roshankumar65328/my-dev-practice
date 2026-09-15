import React from 'react'

function ReviseCard({user, handleRemoveCard, index}){
    return (
        <div className='w-52 h-70 bg-sky-400 rounded flex flex-col items-center pt-5' key='index'>
        <div className='w-16 h-16 bg-blue-800 rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.imgUrl} alt="" />
        </div>
        <h1 className='text-2xl font-semibold p-1'>{user.name}</h1>
        <h4 className='opacity-60 text-sm '>{user.email}</h4>
        <p className='text-center text-sm leading-4.5 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et praesentium quo? Labore, totam nam.</p>
        <button onClick={()=>handleRemoveCard(index)} className='px-3 py-1 bg-red-500 text-sm rounded-lg font-semibold text-zinc-100 mt-4'>Remove it</button>
        </div>
    )
}

export default ReviseCard;