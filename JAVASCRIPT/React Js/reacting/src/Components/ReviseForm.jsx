import React from 'react'
import { useForm } from 'react-hook-form';

function ReviseForm({FormHandleSubmitData}) {
  const{register, handleSubmit, reset} = useForm()
  const handleFormSubmit = (data)=>{
    console.log(data);
    
    FormHandleSubmitData(data);
    reset();    
  }
  return (
    <div className='pt-20 flex justify-center items-center'>
      <form className='flex items-center justify-center gap-5' onSubmit={handleSubmit(data=>{handleFormSubmit(data)})} action="">     // gives a object which contain all the data in format of key: value pair
        <input {...register('imgUrl')} className='border-2 rounded-lg' type="text" placeholder='Enter your image url' />
        <input {...register('name')} className='border-2 rounded-lg' type="text" placeholder='Enter your name' />
        <input {...register('email')} className='border-2 rounded-lg' type="text" placeholder='Enter your email' />
        <input className='border-2 px-4 py-1 bg-blue-400 text-sm rounded-lg ' type="Submit" />
      </form>
    </div>
  )
}

export default ReviseForm;