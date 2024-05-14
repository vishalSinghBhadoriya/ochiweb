import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {

    return (
        <div  className=' w-full h-screen bg-zinc-800 pt-1 '>
            <div className="textstructure mt-32">
                <div className=" px-14 masker text-bold uppercase text-8xl ant leading-none">
                    <h1 className="text">We create</h1>
                    <h1 className="text flex gap-3"><motion.div  className="w-32 h-[82px] mt-[7px] overflow-hidden rounded-md" initial={{width:0}} animate={{width:'8rem'}} transition={{ease:"linear",duration:0.4}}>
                        <img className='w-32  h-[82px]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>Eye-opening</h1>
                    <h1 className="text">presentations</h1>
                </div>
                <div className="flex border-t-2 text-sm justify-between py-6 px-12 border-zinc-400 mt-28 ">
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p key={index} className=''>{item}</p>))}
                    <div className="bt flex justify-center items-center gap-1">
                        <button className="Pbutton border-2 uppercase rounded-3xl px-3 py-1">Start the project</button>
                        <div className="Pbutton rounded-full border-2 flex items-center justify-center rotate-45 w-8 h-8"><FaArrowUpLong /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage;
