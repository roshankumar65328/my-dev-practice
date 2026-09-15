import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function RoutingDetails() {
    const {name} = useParams();
    console.log(name)
    const navigate = useNavigate();

    const goBackHandle=()=>{        // code to submit form in the database and show the previous page
        navigate("/routingcontact");
        // or
        // navigate(-1);
    }

  return (
    <>
    <h1 className='p-5 text-3xl'>Hi, {name}</h1>
    <p className='p-5' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, natus necessitatibus, eius nesciunt voluptatum perspiciatis voluptate aspernatur reprehenderit eveniet nostrum mollitia amet ratione non minus voluptas hic beatae unde aliquid facilis porro illo, excepturi delectus cum! A ea modi, dolore, autem expedita ratione voluptates dicta, nam dolorem non molestias vitae!</p>
    <button onClick={goBackHandle} className='m-5 p-2 border-2 rounded-full bg-red-600 text-white'> Go Back</button>
    </>
  )
}

export default RoutingDetails  