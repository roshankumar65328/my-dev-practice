// maan lete h, apke game me score default 0 h, 
// but jaise jaise game aage badhega score change hoga, 
// to iss case me score ko hum state ne rakhenge, 
// kyuki sirf score ko change karna h, baaki will be at their place, bina reload ke

import React, { useState } from "react";

function UseState1(){
    const [banned, setBanned] = useState(false);    // usestate hame ek array deta h, uss array ki value ko deStructure karke nikal rhe h
    return (                                        // useState ke array me pehle index pe value jo hum useState me dete hai wo hoti hai, dusri pe function hota h jisse hum pehli value yani useState ke variable value ko change kr sakte hai
        <div className="border-2 rounded-md w-90 m-10 p-5">
            <h1 className="p-4"> {banned.toString() } </h1>
            <button onClick={()=> setBanned(!banned)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"> Change Data </button>
        </div>                                  
    )
}

export default UseState1;



// for using useState 
// import React, { useState } from "react";         // usestate hame ek array deta h, uss array ki value ko deStructure karke nikal rhe h
                                                    // useState ke array me pehle index pe value jo hum useState me dete hai wo hoti hai, dusri pe function hota h jisse hum pehli value yani useState ke variable value ko change kr sakte hai
// function Component (){
//     const [val, setVal] = useState();
// }