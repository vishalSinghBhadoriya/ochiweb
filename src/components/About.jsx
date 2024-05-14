import React from 'react'

function About() {
    return (
        <div className='relative z-50 overflow-hidden  w-full h-auto text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  '>
            <div className="maint p-7 w-[80%] text-5xl leading-none tracking-tighter ">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</div>
            <div className="main2 border-t-[1px] mt-10 border-[#a3b75e]">
                {/* <div className="main3 flex  flex-wrap whitespace-nowrap justify-between">
                    {/* <p>What you can expect</p>
                    <p className=''>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.<br/><span>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</span></p>
                    <p className='flex flex-col'>{["Instagram","Behance","Facebook","Linkdin"].map((item,index)=>(<a key={index}>{item}</a>))}</p>
                </div> */} 
                <div className="approach flex justify-between text py-4 px-12 text-white">
                    <div className="">
                        <h1 className='mb-5 text-black text-5xl font-serif'>Our approach:</h1>
                        <button className="flex justify-center items-center gap-7 border-2 border-black rounded-full px-5 py-3 bg-black">READ MORE
                        <div className="w-2 h-2  rounded-full bg-white"></div>
                        </button>
                        
                    </div>
                    <div className="w">
                        <img className='w-[40rem] h-auto rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="img" />
                    
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}

export default About;