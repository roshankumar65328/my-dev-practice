import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {users, setUsers} = useContext(UserContext)
    console.log(users)
    const {id} = useParams();
    console.log(users[id])

    const navigate = useNavigate()

  return (
    <>
    <div className='bg-red-200 p-2 mt-10 w-1/8'>{users[id -1].city}</div>
    <button onClick={()=>navigate(-1)} className=' rounded-full mt-5 bg-blue-300 p-1 text-xs'> Go Back</button>
    </>
  )
}

export default UserDetails