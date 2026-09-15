import React from 'react'

function VariableArrayMapping() {
  // if here we define a variable, it can access in return below
  // let ans = 10*86/4054+35/2;

  const data = ["roshan","prateek","laddu","jatin"]
  return (
      <div>
        {/* {ans} */}

        {data.map((elem,index)=>(    // hum array mapping ke time key isliye use karte h kyuki, react vitual dom creation pr element ko difference kar sake
          <div key={index} className='px-3 py-4 bg-zinc-300 rounded-md w-fit'>{elem}</div>
        ))}


    </div>
  )
}

export default VariableArrayMapping