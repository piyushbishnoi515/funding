import React from 'react'
import working from '../assets/images/webp/working.png'

const Figure = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-[47px] pb-[47px]">
                    <div className=' flex items-center lg:gap-[325px] md:gap-[125px] sm:gap-[50px] gap-9 max-md:flex-col'>
                        <div>
                            <p className=' font-abril font-semibold text-[40px] leading-[45px] text-black max-w-[401px]'>Become an 8 figure seller with AI funding</p>
                            <button className=' bg-blue font-poppins p-[10px_44px] mt-[20px] rounded-[24px] text-white'>Apply now</button>
                        </div>
                        <div>
                            <img src={working} alt="" className=' max-w-[440px] w-full max-md:pt-[51px] max-md:pb-[90px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figure