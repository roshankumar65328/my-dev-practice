import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";

function UseState10Hooks() {
  const [val,setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='w-60 h-32 bg-zinc-500 rounded overflow-hidden flex relative'>
            <img className={` shrink-0 w-full h-full transition-translate duration-500 ${val === false ? "translate-x-[0%]" : "-translate-x-[100%]" } object-cover `} src="https://images.unsplash.com/photo-1758887371504-6473fa9ff96b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={` shrink-0 w-full h-full transition-translate duration-500 ${val === false ? "translate-x-[0%]" : "-translate-x-[100%]" } object-cover `} src="https://images.unsplash.com/photo-1758967905380-f62a8c8fd373?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=> setVal(()=> !val)} className='w-10 h-6 p-1 bg-gray-300  border-1 absolute flex justify-center align-center rounded-full bottom-[0%]  top-1/2 left-1/2 -translate-[50%] '>
            <GoArrowRight />
            </span>
        </div>
    </div>
  )
}

export default UseState10Hooks;



// for using react-icons.github.io/react-icons
// copy npm-install react-icons & paste in vs code terminal
// how to use , 
// search icon, seclect icon, 
// copy import line & paste it on react component top after import react
// issi import wali line me hamara icon h, usse jaha component ke jaise use karenge wha icon aa jayega
