import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card({width, startCont, para, hover}) {
  return (
    <div className={` bg-zinc-800 p-4 rounded-xl ${hover} ${width}  min-h-[20rem] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>One Heading</h3>
            <GoArrowRight />
        </div>
        <h1 className='text-2xl mt-3 tracking-tight leading-none'>The Heading..</h1>
        </div>
        <div className=''>
            {startCont && (
                <>
                    <h1 className="text-3xl font-semibold">Start a Poject</h1>
                    <button className='px-3 py-1 border-1 rounded-full mt-3 font-semibold'>Contact Us</button>
                </>
            )}

            {para && (
                <p className='text-sm text-zinc0-400 font '>Lorem ipsum dolor sit amet consectetur </p>
            )}
        </div>
    </div>
  )
}

export default Card