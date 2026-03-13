import { useState } from "react";

function Input() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [show, setShow] = useState(false);
    let [showtext, setShowtext] = useState("false");

    function handleUsername(e){
        setUsername(e.target.value);
    }

        function handlePassword(e){
            setPassword(e.target.value);
        }

        function handleSubmit(){
            setShow(true);
        }
    
    return(
        < div className="h-screen bg-blue-500 flex flex-col items-center" >
            <h1 className="text-center text-2xl font-bold mb-4 text-white items-center mt-[200px]">Enter your name</h1>
            <input type="text" className="w-[300px] h-[50px] rounded-lg text-center mx-auto" placeholder="Enter your name" onChange={handleUsername} value={username}/>
             <h1 className="text-center text-2xl font-bold mb-4 text-white items-center mt-4">Enter your Password</h1>
             <input type="password" className="w-[300px] h-[50px] rounded-lg text-center mx-auto" placeholder="Enter your password" onChange={handlePassword} value={password}/>

            <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg mt-4"onClick={handleSubmit}>Submit</button>
            <div className="mt-4">
                {show && (<div> Welcome! {username} {password} </div>)}
            </div>
            

        </div>  
    )
}
export {Input};