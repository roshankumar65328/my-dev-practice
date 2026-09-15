import React, { useState } from 'react'

function UseState5() {
    const [val,setVal] = useState({name : "roshan", age :21});
  return (
    <div className='border-2 rounded-md w-90 m-10 p-5'>
      <div>Check Console After Click</div>
        <button onClick={()=> {      // iss function ke khatam hone ke baad hi useState update hoga, aur agar dono useState alag hoga tabhi update hoga warna nhi hoga
            setVal({...val, gender: "male"});  // ye state function khatam hone ke baad update hoga
          {/*  console.log(val);     // "setVal kehta hai, Next render me state ko is value se update kar dena. to console me val abhi kaha se mil jayega updated"   */}
          }}  className='bg-blue-600 px-4 rounded-full'>Click</button>
        {/* <div> {console.log(val)} </div> */}    {/*   ye state update ke bahar hai ye print kr dega console val ko   */}
    </div>
  )
}

export default UseState5