import React, { useState } from "react";

function UseState2 (){
    const [val,setVal] = useState(12);

    return (
        <div className="border-2 rounded-md w-90 m-10 p-5">
            <h1 className="p-4"> {val } </h1>
            {/* <h1 className="p-4"> {val.toString() } </h1> */}      {/* agar number/boolean data ho direct print na ho rha ho to fir   val.toString();   use karo ho jayega   */}
            <button onClick={()=> setVal(20)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"> Change Data </button>
            {/* <button onClick={()=> setVal((prev)=> prev+1)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"> Change Data </button> */}

        </div>    
    )
}

export default UseState2;