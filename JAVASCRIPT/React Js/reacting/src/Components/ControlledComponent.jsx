// controlled component form handling 2nd method 
// use useState and declare '' to all input values and , add attribute on inputs onChange={event=> setVal({...val, change you current input})}
// on form tag onSubmit={event=> event.preventDefault()}

import React, { useState } from 'react';

function ControlledComponent(){
const [val, setVal] = useState({name: "", age: ""})

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(val);
}

    return (
        <form className='bg-gray-300' action="" onSubmit={handleSubmit}>
            <input onChange={(event)=>setVal({...val, name: event.target.value})} className='border-2 m-5' type="text" id="name" placeholder='enter your name' />
            <input onChange={(event)=>setVal({...val, age: event.target.value})} className='border-2 m-5' type="text" id="age" placeholder='enter your age' />
            <input className='px-3 py-0 rounded-full bg-blue-400' type="submit" />
        </form>
    )
}

export default ControlledComponent;