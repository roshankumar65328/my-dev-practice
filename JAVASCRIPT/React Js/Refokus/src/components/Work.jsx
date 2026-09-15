import React from 'react'

function Work() {
    const images = [
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGDEcBrkLSNrCduZ43H7qK5s3MDlEtpooVwn-P8v4gw&s=10",top: "47%", left: "50%", isActive: true},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzQz503YVWbrRrNEbaouvqaTHDDlmcZ3A1WgivBRY0Q&s=10", top: "45%", left: "50%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYfKPPM39n_aJAKXD3ebOQzo4Z2a6RG4So6vlcToPPA&s=10", top: "45%", left: "49%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SrYhwrMLF_FkADM7jeVogbx000Bfk3OaYfHIgSqdDA&s=10", top: "46%", left: "50%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkuSprAm_OHY4jWC_HyiiCTK7fsdI9WNuUDGHD_-yRw&s=10", top: "46%", left: "48%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKGwHb-BimlVtUtDnY-P3We0S-TL_um-YiMvfxLSiMg&s=10", top: "43%", left: "49%", isActive: false}
    ]
  return (
    <div className='w-full  relative'>
        <div className='max-w-screen-xl mx-auto flex justify-center items-center '>
            <h1 className="text-[28vw] leading-none font-regular tracking-tight select-none translate-x[-50%] translate-y[-50%] mt-10 ">work</h1>
            <div className='w-full h-full absolute top-0 left-0 '>
                {images.map((elem, index)=>( elem.isActive && <img style={{top: elem.top, left: elem.left}} className='absolute w-[12vw] h-[12vw] object-cover top-[{elem.top}] translate-x-[-50%] translate-y-[-50%]' src={elem.url} alt="" />))}
            </div>
        </div>
    </div>
  )
}

export default Work