// useState with array part 2 , addition of element in array

import React, { useState } from "react"

function UseState8() {
    const [val, setVal] = useState ([1, 2, 3, 4, 5, 6])
    return (
        <div className="p-5">
            {val.map((item, index)=> <h1 key={index} >{item}</h1>)}
            <div>for adding a element to the array in useState </div>
            <button onClick={()=> setVal([...val, 7])}  className="px-2 py-1 text-xs text-white rounded-full bg-blue-600">
                Click
            </button>
        </div>
    )
}

export default UseState8;