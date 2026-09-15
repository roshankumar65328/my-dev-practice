import React, { useState } from "react";

function UseState3 (){
    const [val,setVal] = useState({name : "roshan", isBanned : false});

    return (
        <div className="border-2 rounded-md w-90 m-10 p-5">
            <h1 className="p-4"> {val.name} </h1>
            <h2>Banned : {val.isBanned.toString()}</h2>    {/* isBanned ek boolean value hai to usse String me convert karna padega */}
            <button onClick={()=> setVal({...val, isBanned : !val.isBanned})} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"> Change Data </button>      {/*setVal()  me wahi dalna hai jo hame useState() me set karna hai, {} [] brackets ke sath */}
        </div>                  // object ki value ko change karne ke liye ek new object banana h, then val me change karna hai
    )
}

export default UseState3;



// setVal({...val, isBanned : !val.isBanned});      val variable me jo bhi abhi hai wo sab & isBanned : !isBanned  (agar isBanned hai to update ho jayega warna add ho jayega)