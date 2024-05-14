import React, { useEffect, useState } from 'react'

function Eyes() {
    const[rotate,setRotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            let deltaX=mouseX-window.innerWidth/2;//To find center pt of screen
            let deltaY=mouseY-window.innerHeight/2;
            var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)//radian to degree
            setRotate(angle-180);
        })
    })
  return (
    <div data-scroll data-scroll-speed="-.6"   className='  flex relative overflow-hidden justify-center items-center w-full  h-screen bg-red-300 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div  className="  absolute flex gap-10">
            <div className="flex justify-center items-center  w-52 h-52 rounded-full bg-zinc-100">
                <div className="flex justify-center items-center  w-32 h-32  rounded-full bg-black">
                    <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-4 ">
                    <div className="w-4 h-4  rounded-full bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-52 h-52 rounded-full bg-zinc-100">
                <div className="flex justify-center items-center  w-32 h-32  rounded-full bg-black">
                    <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-4   ">
                    <div className="w-4 h-4  rounded-full bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Eyes;