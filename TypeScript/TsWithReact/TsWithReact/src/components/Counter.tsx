import { useState } from "react"


export function Counter(){
    const [count, setCount] = useState<number>(0);      // useState me hamesha value number hi ayegi iss component me bas itna hi hai typescript
    return (
        <div>
            <p>Cups Ordered: {count}</p>
            <button onClick={()=>{setCount((val)=> val+1)}} >Order +1</button>
        </div>
    )
}