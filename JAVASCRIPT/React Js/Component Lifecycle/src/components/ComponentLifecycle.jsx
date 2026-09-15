import React, { useEffect, useState } from 'react'

function ComponentLifecycle() {
  const[normal,setNormal] = useState("normal data ")
  const[large,setLarge] = useState("large data ")

  useEffect(()=>{
    console.log("component lifecycle has been created successfully & this line run automatically without event")

    return()=>{
      console.log("Component Lifecycle has been deleted when user moved to another component")
    }
  },[])           // [] -> for No Rerendering in page  ,  [variable] -> matlab wo variable har baar update hoga jab ye rerender hoga
  // },[large])   //  yaha pe useEffect ke end se pehle ,[] lagane se Redendering nhi hogi kahi bhi , pr bade data me Rerendering karni hoti hai to iske [] ander uss useState variable ka name de denge jisko Rerender karwana hai

  return (
    <div className='m-10'>
      <div >ComponentLifecycle</div>

      <div> { normal } </div>
      <button onClick={()=>setNormal("Normal data has been changed")} className='m-10 p-2 bg-blue-100 rounded-lg' >change data</button>

      <div> { large } </div>
      <button onClick={()=>setLarge("Large data has been changed")} className='m-10 p-2 bg-blue-100 rounded-lg' >change data</button>
    </div>
  )
}

export default ComponentLifecycle


// Reconcilation Updating
// aisa change jisse page me reload nahi hota


// Reconcilation Rerendering
// aisa change page me jisse wo particular component Delete -> then -> Create ho
// useState change hone pe , page view change hone pe Reconcilation Rerendering hota hai
// component update/refresh  = component delete + component create

// by default har case me component me change karne me rerendering hota hai

// Best Practices 
// Chhote change me update kare 
// bade change me rerender kare 