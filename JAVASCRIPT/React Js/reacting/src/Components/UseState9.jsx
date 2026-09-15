import React, { useState } from 'react'

function UseState9() {
    const [val, setVal] = useState([
        { name: "roshan", age: 21 },
        { name: "prateek", age: 12 },
        { name: "Prithvi", age: 8 },
    ]);
    return (
        <div className='p-5 mt-5'>
            {val.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>

                </div>
            ))}
            <div> The age of roshan will be change </div>
            <button onClick={() => setVal(()=> val.map(item => item.name === "roshan" ? {name : "roshan", age : 22} : item ))} className='px-3 bg-blue-600 rounded-full'>Click</button>

        </div>
    )
}

export default UseState9;