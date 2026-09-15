import Button from './Button'
import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-xl h-[10vh] mx-auto p-3 flex items-center justify-between border-b-[1px]'>
        <div className='flex items-center'>
            <img className='h-[3vw] w-[5vw] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADtPEhtiU6tOtDXazHIXYWGBI1KZOWyjO-RLv7a1Few&s=10" alt="" />        
            <div className='links flex gap-15 ml-20'>
                {["Home", "Work", "Culture","" , "News"].map((elem,index) => (
                    elem.length == 0 ? <span className='w-[0.1vw] h-6 bg-zinc-600' key={index}></span> :
                    <a className='text-sm flex items-center gap-1' href="#" key={index}>
                        {index == 1 && <span style={{boxShadow: "0 0 0.45em $00ff19"}} className='inline-block w-2 h-2 bg-green-400 rounded-full'></span>}
                        {elem}
                    </a>
                ))}
            </div>
        </div>
        <Button  title="Get Started" /> 
    </div>
  )
}

export default Navbar