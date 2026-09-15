import React from "react";

function EventHandling() {
    const data = [
        { name: "Hanuman Chalisa", description: "Hanuman Chalisa is an Indian-American author, screenwriter, and producer who wrote the first novel" },
        { name: "Durga Chalisa", description: "Durga chalisa is an indian goddess of love, peace, and truth Song" },
    ];

    const handleClickDownload = () => {
        alert("the download has been clicked!")
    }

    return (
        <div className="height-[500px] flex flex-col justify-center m-10 gap-5">
            <div>hello</div>
            {data.map((elem, index) => (
                <div className="w-90 px-3 py-2 bg-zinc-300 flex flex-col gap-4 justify-center " key={index}>
                    <h3 className="font-semibold text-xl">{elem.name}</h3>
                    <p className="text-xs mt-2">
                        {elem.description}
                    </p>
                    <button onClick={handleClickDownload} className="px-2 py-1 rounded bg-blue-200">
                        Download Now
                    </button>
                </div>
            ))}
        </div>
    );
}


export default EventHandling;