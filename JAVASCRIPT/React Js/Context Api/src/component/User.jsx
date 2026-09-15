import React, {useContext} from 'react'     // useContext ko import kiya taaki hum UserContext ko use kar sake jo Context.jsx me hai
import { UserContext } from '../utils/Context'    // UserContext variable ko import kiya jo Context.jsx me hai
import { Link } from 'react-router-dom'

function User() {

  const {users, setUsers} = useContext(UserContext)
  console.log(users )

  return (
    <div className='p-5'>
      <h1 className='text-4xl'>User Details</h1>
      <div className='p-6 flex flex-col '>
        {users.map(u=> (
          <Link key={u.id} to={`/user/${u.id}`} className='bg-red-200 w-1/8 m-1 p-1' >{u.username}</Link>
        ))}
      </div>
    </div>
  )
}

export default User