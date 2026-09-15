import React from 'react'

function Card() {
  return (
    <div>
      <div className='w-60 h-80 bg-zinc-300 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-52 bg-zinc-200 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>

          <div className='w-full h-32 bg-zinc-300'>
            <img className='w-full object-cover ' src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/bbff8599d5ab4e6a9423dc02c3cd11b2_197d4d66add_Battery.jpg.jpeg?q=90" alt="" />
          </div>
          <div className='w-full px-3 py-4'>
            <h2 className='text-xs mt-5'>Amazon Basics</h2>
            <p className='text-xs mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur corporis possimus fugit, maiores illo!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;