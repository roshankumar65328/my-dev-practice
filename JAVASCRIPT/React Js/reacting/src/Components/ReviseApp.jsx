// all files are required for ReviseApp.jsx  =>  ReviseCards.jsx , ReviseCard.jsx , ReviseForm.jsx

import ReviseCards from './ReviseCards'
import ReviseCard from './ReviseCard'
import ReviseForm from './ReviseForm'
import React, { useState } from 'react'

function ReviseApp() {
    const [users, setUsers] = useState([]);

    const FormHandleSubmitData = (data)=>{
        setUsers([...users,data])
    }

    const handleRemoveCard = (id)=>{
        setUsers(()=>users.filter((item, index)=>index != id))
    }

  return (
      <div className="w-full bg-zinc-200 py-10 ">
        <div className="container mx-auto ">
          <ReviseCards users={users} handleRemoveCard={handleRemoveCard} />
          <ReviseForm users={users} FormHandleSubmitData={FormHandleSubmitData} />
        </div>
      </div>
  )
}

export default ReviseApp
