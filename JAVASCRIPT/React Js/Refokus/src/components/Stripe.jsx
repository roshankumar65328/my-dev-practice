import React from 'react'

function Stripe({val}) {
  return (
    <div className="min-w-[16.66%] h-[5vw]  p-[0.8vw] border-t-1 border-b-1 border-r-1 flex items-center justify-between">
        <img className='w-[80%] h-[100%] object-cover' src={val.url} alt="" />
        <span className='font-semibold'> {val.number}</span>
    </div>
  )
}

export default Stripe 