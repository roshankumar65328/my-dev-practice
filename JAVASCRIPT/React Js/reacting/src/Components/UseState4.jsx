import React, { useState } from "react";

function UseState4() {
    const [val, setVal] = useState({ name: "roshan", isBanned: false });

    return (
        <div className="border-2 rounded-md w-90 m-10 p-5">
            <h1 className="p-4"> {val.name} </h1>
            <h2>Banned : {val.isBanned.toString()}</h2>
            <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })} className={`px-3 py-1 ${val.isBanned ? "bg-blue-600" : "bg-red-600"} text-xs text-white rounded-full`} > Change Data </button>
        </div>
    )
}

export default UseState4;