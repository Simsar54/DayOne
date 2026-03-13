import {useState} from "react";

function Rcg(){
    let [color, setColor] = useState("black");
    return(
        <div className="h-[100vh] w-full flex flex-col" style={{background:color}}>
            <h1 className=" text-center text-2xl font-bold mb-10 text-purple-300">Choose a Color </h1>
        </div>
    )
}

export {Rcg};