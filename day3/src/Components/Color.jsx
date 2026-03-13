import {useState} from "react"



function Color(){

    let [color, setColor] = useState("black");
    return(
        <div className="h-[100vh] w-full flex flex-col" style={{background:color}}>
            <h1 className=" text-center text-2xl font-bold mb-10 text-purple-300">Choose a Color </h1>
        <div className="flex felx-col items-center justify-center gap-10">  
            <button className="bg-red-400 text-white font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-gray-300" onClick={() => setColor("red-400")}>Red</button>
            <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-gray-300 " onClick={() => setColor("green")}>Green</button>
            <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-gray-300" onClick={() => setColor("blue")}>Blue</button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-black" onClick={() => setColor("black")}>Default</button>
            </div> 
        </div>

    )
}

export {Color};