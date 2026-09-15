import React from 'react'

function ConditionalRendering() {
    const data = [
        { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "Nike Shoe dark red", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ", isStock: true },
        { image: "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "Pack of 2 coffee mug", description: " elit. Quisque vel ex id est scelerisque vestibulum. Nullam lorem ipsum nil arnstrong", isStock: false },
        { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D", title: "HP Headphone 500N", description: "dolor sit amet, consectetur adipiscing elit. Quisque vel ex id est scelerisque", isStock: true }
    ]
    return (
        <div className='w-full h-80 flex gap-10 '>
            {data.map((elem, index) => (

                <div className='w-[16vw] h-[21vw] bg-zinc-300 relative' key={index}>
                    <div className='w-[15vw] h-[20vw] bg-zinc-200 m-auto pt-2'>

                        <div className='w-full h-[9vw] bg-zinc-300'>
                            <img className='w-full object-cover ' src={elem.image} alt="" />
                        </div>
                        <div className='w-full px-2 py-2'>
                            <h2 className='text-sm mt-5'>{elem.title}</h2>
                            <p className='text-xs mt-3'>{elem.description}</p>
                        </div>
                        <button className={`px-3 py-1 ${elem.isStock ? "bg-blue-400" : "bg-red-400"}  text-xs rounded mx-2`}>
                            {elem.isStock ? "In Stock" : "Out of Stock"}
                        </button>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default ConditionalRendering   