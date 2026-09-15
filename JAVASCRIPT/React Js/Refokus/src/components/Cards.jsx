import React from 'react'
import Card from "./Card"

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto  flex gap-2 px-2'>
        <Card width={"basis-1/3"} startCont={false} para={true}/>
        <Card width={"basis-2/3"} startCont={true} para={false} hover={"hover:bg-purple-500"} />
    </div>
  )
}

export default Cards