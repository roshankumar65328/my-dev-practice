import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var images = [
        ["https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/68f12b0f2ce6e66f9d9a3037_Case-Study-logo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b9725938856f07fb24e20_gpoologo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a8cd175358550ad695_deelogo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6a4cf0ce836e62f658355a3d_Case-Study-logo-onDark.png"
        ],
        ["https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/68f12b0f2ce6e66f9d9a3037_Case-Study-logo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b9725938856f07fb24e20_gpoologo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a8cd175358550ad695_deelogo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg", 
            "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6a4cf0ce836e62f658355a3d_Case-Study-logo-onDark.png"],
    ]
  return (
    <div className='w-full p-20 mt-21'>
        {images.map(item => <Marquee imageurl={item} />)}
    </div>
  )
}

export default Marquees