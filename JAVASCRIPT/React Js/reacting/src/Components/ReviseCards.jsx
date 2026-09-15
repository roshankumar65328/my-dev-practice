import ReviseCard from "./ReviseCard"
import React from 'react'

function ReviseCards({users, handleRemoveCard}) {
  return (
    <div className='w-full flex gap-10 flex-wrap items-center justify-center'>
        {users.map((user, index)=>{
          return <ReviseCard key={index} index={index} user={user} handleRemoveCard={handleRemoveCard} />
        })}

    </div>
  )
}

export default ReviseCards