import React from 'react';

function Featured() {
  return (
    <div className='relative z-50 w-full h-auto bg-zinc-50  pb-20 '>
      <h1 className=' p-10 font-semibold text-black text-5xl text'>Featured Projects</h1>
      <div className="cards relative flex gap-4 pt-20 px-10 border-t-[1px] border-zinc-500">
        <div className="z-10 text-7xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-200">FYDE
        </div>
        <div className="card rounded-3xl w-[40rem] h-[33rem] overflow-hidden">
          <div className="cardc w-full h-full"><img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img2" />
          </div>
        </div>
        
        <div className="card  rounded-3xl w-[40rem] h-[33rem] overflow-hidden">
          <div className="cardc w-full h-full"><img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img2" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Featured;