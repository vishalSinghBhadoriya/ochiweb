import { animate, motion } from 'framer-motion';
import React from 'react'

function Marquee() {

  return (
    <div  className=' ant w-full font-semibold leading-none overflow-hidden uppercase items-center rounded-tl-3xl rounded-tr-3xl flex text-[20vw] h-[60vh] bg-green-900'>
        <div className="txt flex w-full border-t-2 border-b-2 whitespace-nowrap">
        <motion.h1 className='pr-20' initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} >We are ochi</motion.h1>
        <motion.h1 className='pr-20' initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} >We are ochi</motion.h1>
         
        </div>
    </div>
  )
}

export default Marquee;