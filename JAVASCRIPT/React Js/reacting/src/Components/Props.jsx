import React from 'react'
function Props({text, color}){
    return(
        <button className={` px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2 `}>{text}</button>
    )
}

export default Props

// props used to resuse the single component