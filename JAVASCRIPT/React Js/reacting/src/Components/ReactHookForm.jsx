// for react-hook-form for the 3rd form handling method
// for package search 'react hook form' , go react-hook-form.com & go to get started & run 'npm install react-hook-form' in vsCode terminal
//   attribute register, handleSubmit, onBlur, onChange, ref ' 3 cheeze deta hai jisse hum ... karke spread kr rhe h, aur ('name') se hum isse pehchan sakte hai


import React from 'react'
import {useForm} from 'react-hook-form'

function ReactHookForm() {
    const {register, handleSubmit} = useForm();
  return (
    <div>
        <form action="" className='bg-yellow-300 ' onSubmit={handleSubmit(data=> console.log(data))} >
            <input {...register('name')} type="text" placeholder='enter name' className='border-2 m-5' />        
            <input {...register('age')} type="text" placeholder='enter age' className='border-2 m-5' />
            <input type="submit" className='px-3 py-1 rounded-full bg-blue-400 '  />
        </form>
    </div>
  )
}

export default ReactHookForm;