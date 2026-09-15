import React from 'react'
import {Link} from 'react-router-dom'

function ComponentLifecycleNav() {
  return (
    <div>
        <div className='w-full flex gap-5 items-center justify-center' >
          <Link className='m-2 p-2 bg-blue-300 rounded-xl' to="/">Home</Link>
          <Link className='m-2 p-2 bg-blue-300 rounded-xl' to="/componentlifecycle"> Component Lifecycle</Link>
          <Link className='m-2 p-2 bg-blue-300 rounded-xl' to="/componentlifecycleabout"> About</Link>
          <Link className='m-2 p-2 bg-blue-300 rounded-xl' to="/showdataautomatically"> Show Data Automatically </Link>
        </div>
    </div>
  )
}

export default ComponentLifecycleNav