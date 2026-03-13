import {useState} from 'react'

function Navbar(){
    return (
        <div className=" bg-grey-300">
     <div className="h-10 bg-gray-400 flex items-center justify-between px-4">

    <a href="#" className=" text-black font-bold">Logo</a>

    <div className="flex gap-10">
      <a href="#" className="text-black">Home</a>
      <a href="#" className="text-black">About</a>
      <a href="#" className="text-black">Contact</a>
    </div>
  </div>
   <div className="h-14 bg-white flex items-center justify-between gap-8 px-4">

        <a href="#" className="font-bold text-black">Logo</a>

    <div className="flex gap-10 mr-[45%]">    
    <a href="#" className="text-black">Men</a>
    <a href="#" className="text-black">Woman</a>
    <a href="#" className="text-black">Kids</a>
    <a href="#" className="text-black">Jordan</a>
    <a href="#" className="text-black">Kids</a>
    </div>
  </div>
  <div className="h-[500px] w-full bg-black">
  </div>
  <div className="flex">
  <div className="h-[500px] w-full bg-gray-400 flex items-center justify-end px-4">
  </div>
  <div className="h-[500px] w-full bg-red-400 flex items-center justify-end px-4">
  </div>
  </div>
</div>
    );
}

export {Navbar};      