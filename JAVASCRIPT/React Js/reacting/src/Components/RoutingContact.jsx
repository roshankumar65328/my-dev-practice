import React from 'react'
import {Link, Outlet} from "react-router-dom"

function RoutingContact() {
  return (
    <>
    <div>Routing Contacts</div>
    {/* <div className='text-2xl w-[60%] text-center mx-auto mt-5'>RoutingContact <br />  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia! Consectetur nisi sint, commodi dolorem tempora quaerat illum aspernatur dolore. Similique excepturi dicta id repudiandae nesciunt, voluptatum atque blanditiis iste voluptas ipsum, enim nihil debitis facere dolorem soluta, autem error. Corporis fugit sint sit autem, ipsam amet eum quidem maxime recusandae dignissimos, vitae magni aliquam, incidunt repellat omnis. Maxime totam, ipsum adipisci magnam nobis ad perspiciatis. Itaque officia voluptatum repellat rem recusandae labore mollitia maxime distinctio aperiam doloribus modi, voluptatem, atque exercitationem dolor! Deleniti libero fuga impedit voluptatum recusandae dicta, aspernatur quam quod quis officiis perferendis aliquid accusamus? Rem possimus omnis laudantium aliquam nihil. Quisquam, deleniti, culpa, amet optio laboriosam doloremque ex neque ipsam eveniet debitis rerum accusamus consequuntur incidunt.</div> */}
    {/* <button className='relative left-[45%] p-1 border-2 rounded-full bg-blue-300'>Explore More</button> */}

    <div className='flex flex-col m-5'>
        <Link className='p-3 bg-blue-200 w-32 m-2 hover:bg-blue-400' to="/routingcontact/roshan" >Roshan</Link>
        <Link className='p-3 bg-blue-200 w-32 m-2 hover:bg-blue-400' to="/routingcontact/prateek" >Prateek</Link>
        <Link className='p-3 bg-blue-200 w-32 m-2 hover:bg-blue-400' to="/routingcontact/prithvi" >Prithvi</Link>
    </div>

    <Outlet />
    </>
  )
}

export default RoutingContact