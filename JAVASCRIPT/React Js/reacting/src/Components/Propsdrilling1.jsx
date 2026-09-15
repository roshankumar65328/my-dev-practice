import React from 'react'

function Propsdrilling1() {
  return (
    <div className='w-50 bg-white-200 rounded-md overflow-hidden border-2'>
        <div className='w-full h-32 bg-sky-200'></div>
        <div className='w-full p-3 '>
        <h3 className='text-xl font-semibold'>Roshan</h3>
        <h5 className='text-xs'>Profession</h5>
        <button className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>
        </div>
    </div>
  )
}

export default Propsdrilling1


// hamara data main app component me hoga, aur usse hum props ke thow card me late hai, har cord me 1 button hoga and add friend ka option hoga