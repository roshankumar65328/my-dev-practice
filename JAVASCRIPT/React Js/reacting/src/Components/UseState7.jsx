// useState with array part 2 , for show odd elements from an array

import React, { useState } from "react"

function UseState7() {
    const [val, setVal] = useState ([1, 2, 3, 4, 5, 6])
    return (
        <div className="p-5">
            {val.map((item, index)=> <h1 key={index}>{item}</h1>)}    
            {/* <div>for skip index 2 in array in useState </div> */}
            {/* <button onClick={()=> setVal(()=> val.filter((item, index)=> index !=2 ))}  className="px-2 py-1 text-xs text-white rounded-full bg-blue-600"> */}          
            <div> for show only odd number from array in useState </div>
            <button onClick={()=> setVal(()=> val.filter((item, index)=> item%2 != 0))}  className="px-2 py-1 text-xs text-white rounded-full bg-blue-600">
                Click
            </button>
        </div>
    )
}

export default UseState7;