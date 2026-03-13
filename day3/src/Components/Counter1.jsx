import { useState } from "react";

function Counter1() {

    let [count, setCount] = useState(0);

    function handleIncreament(){
        setCount(count +1);


    }

    function handleDecreament(){
        if(count > 0)
        setCount(count-1);
    }

    return (
        <div className="ml-[500px] mt-[100px] bg-black h-[600px] w-[700px] text-center rounded-lg">
            <h1 className="text-white text-5xl font-bold justify-center pt-10">Counter</h1>
            <h1 className="text-white text-5xl font-bold justify-center pt-10 ">{count}</h1>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg mt-10 hover:bg-gray-300" onClick={handleIncreament}>Increment</button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-gray-300" onClick={handleDecreament}>Decrement</button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg mt-10 ml-10 hover:bg-gray-300" onClick={() => setCount(0)}>Reset</button>


        </div>
    )
}

export {Counter1};