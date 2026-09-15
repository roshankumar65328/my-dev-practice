// form handling = in react form handling is needed as page is reloading at form submission, data will gone away and we need data before away so, we have go learn about form handling
// form handling in react 1st method, useRef-
// pehle useRef import karo
// fir const variable = useRef(null) , function me declare karo kyuki use
// jis jis imput ka data chahiye uspe ref={variabe daal do}
// form tag me onSubmit={(e=> e.preventDefault())}

import React,{useRef} from 'react'


function UseRef() {
    const name = useRef(null)   // useRef me hame html element dena hota hai pr useRef pehle chal jata hai html element uss time hamare paas hota nhi to hum 'null' dete hai
    const age = useRef(null)
    // console.log(name,age);   // ye null dega kyuki dom abhi load nhi hua hai, iss elem ke throw hum elements ko target karenge 

  const handleSubmit = (e=>{
  e.preventDefault();
  console.log(name.current.value, age.current.value)  // name se hame 'name' wala input tag mila , uske ander 'current' and uske ander 'value'
  })

  return (
    <form className='bg-blue-200' action="" onSubmit={handleSubmit}>
        <input ref={name} className='border-2 m-4 ' type="text" id="name" placeholder='enter name'/>
        <input ref={age} className='border-2 m-4' type="text" id="age" placeholder='enter age'/>
        <input className='border-none bg-blue-400 px-2.5 py-0.5 rounded-full' type="submit" />
    </form>
  )
}

export default UseRef