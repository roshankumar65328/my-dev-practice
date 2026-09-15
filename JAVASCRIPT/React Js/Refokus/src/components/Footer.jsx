import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto pt-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11vw]'>Refokus.</h1>
            </div>
            <div className='basis-1/2 flex  '>
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-400 capitalize'>social</h4>
                    {["instagram","twitter","linkedin",].map((item, index)=> <a className='basis-1/2 block text-zinc-600'> {item}</a>)}
                </div>
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-400 capitalize'>social</h4>
                    {["instagram","twitter","linkedin",].map((item, index)=> <a className='basis-1/2 block text-zinc-600'> {item}</a>)}
                </div>
                <div className='w-1/2 flex flex-col items-end'>
                    <p className='text-sm text-right pt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sapiente?</p>
                    <img className='w-[70%] pt-3' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer 