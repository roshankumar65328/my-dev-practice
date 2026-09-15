 import React from 'react'
import style from "./style.module.css"    // using css module

function Propsdrillingexercisenav({datas}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
      <h3 className={`${style.a} ${style.b}`}>Orange</h3>
      <div className='flex p-2 bg-orange-600 rounded-md'>Favourate: {datas.filter(item=>item.added).length}</div>
    </div>
  )
}

export default Propsdrillingexercisenav
