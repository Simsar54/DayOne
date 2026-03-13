import {useState} from "react"

function Counter(){

    let [count,setCount]=useState(4);

    function handleIncreament (){
        setCount(count + 2);

    }
    function handleDecreament (){
        if (count > 0)
            setCount(count - 2);
        }

      return (
        <div className="h-screen w-full bg-gray-400">

            <h1 className="font-bold text-5xl ml-[50%] pt-10">{count}</h1>
            <div className="h-40 w-full flex  gap-30 justify-evenly items-center">
                <button onClick={handleIncreament} className="h-10 w-40 bg-green-400 text-white text-2xl rounded-lg">
                    Increment
                </button>
                <button onClick={handleDecreament}className="h-10 w-40 bg-red-400 text-white text-2xl rounded-lg">
                    Decrement
                </button>

            </div>
        </div>
    )
    
}
export {Counter}

