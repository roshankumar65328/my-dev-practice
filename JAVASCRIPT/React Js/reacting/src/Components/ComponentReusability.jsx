import React from 'react'

function ComponentReusability() {
    const data = [
        { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "Nike Shoe dark red", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ex id est scelerisque vestibulum. Nullam vel neque vel velit facilisis consectetur. Sed facilisis, metus id hendrer" },
        { image: "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "Pack of 2 coffee mug", description: " elit. Quisque vel ex id est scelerisque vestibulum. Nullam vel neque vel velit facilisis consectetur. Sed facilisis, metus id hendrer" },
        { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "HP Headphone 500N", description: "dolor sit amet, consectetur adipiscing elit. Quisque vel ex id est scelerisque vestibulum. Nullam vel neque vel velit facilisis consectetur fkfhf nhfb mjudhhyd jfm " }
    ]
    return (
        <div className='w-full h-100 flex gap-10 '>
            {data.map((elem, index) => (

                <div className='w-60 h-80 bg-zinc-300 relative'>
                    <div className='w-50 h-74 bg-zinc-200 absolute top-1/2 left-1/2 -translate-[50%]'>

                        <div className='w-full h-32 bg-zinc-300'>
                            <img className='w-full object-cover ' src={elem.image} alt="" />
                        </div>
                        <div className='w-full px-3 py-4'>
                            <h2 className='text-xs mt-5'>{elem.title}</h2>
                            <p className='text-xs mt-5'>{elem.description}</p>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default ComponentReusability      


// ek array jisme card me aane wala data rahega.
// sabse pehle ek card banao, usko ek parent div me dalo jispee flex, gap, etc rahega.
// card ka parent div me map function jo sab card me data update karega, card me filled data ki jageh array ke data ko daal denge variable ke throu, map ke throu 1-1 karke sab data aa jayega
// map function wale div pe flex, gap , etc cards ko better represent karega.