import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full py-20'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-semibold'>{val.title}</h1>
            <div className='w-1/2'>
                <p className="details mb-10"> {val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button title='Start' />}
                    {val.case && <Button title='Case Study' />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product