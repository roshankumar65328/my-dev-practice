// useState with array part 1, remove last element from array on click

import React, { useState } from "react"

function UseState6() {
    const [val, setVal] = useState ([1, 2, 3, 4, 5, 6])
    return (
        <div className="p-5">
            {val.map((item, index) => <h1 key={index}>{item}</h1>)}
            <button onClick={() => setVal(() => {
                return val.filter((item, index) => index != val.length - 1)
            })} className="px-2 py-1 text-xs text-white rounded-full bg-blue-600">
                Click
            </button>
        </div>
    )
}

export default UseState6;