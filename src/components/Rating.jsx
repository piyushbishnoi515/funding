import React from 'react'
import rating from '../assets/images/svg/bussines.svg'
import trust from '../assets/images/svg/trust.svg'

const Rating = () => {
    return (
        <div className=' bg-light-grey'>
            <div className="container">
                <div className="row flex row -mx-3 flex-wrap pt-0 pb-0 lg:pt-[87px] lg:pb-[87px]">
                    <div className="col-3 lg:w-1/4 w-1/2 max-lg:pt-[52px] px-3">
                        <div className=' flex items-center flex-col gap-[10px]'>
                            <img src={rating} alt="" />
                            <p className=' text-white font-abril font-semibold text-[50px] '>‘A’ Rating </p>
                        </div>
                    </div>
                    <div className="col-3 lg:w-1/4 w-1/2  max-lg:pt-[52px] px-3">
                        <div className=' flex items-center flex-col gap-[10px]'>
                            <h2 className=' font-poppins font-normal text-lg text-white'>Average store growth</h2>
                            <p className=' text-white font-abril font-semibold text-[50px] '>400% </p>
                        </div>
                    </div>
                    <div className="col-3 lg:w-1/4 w-1/2  max-lg:pt-[52px] max-lg:pb-[52px]   px-3">
                        <div className=' flex items-center flex-col gap-[10px]'>
                            <img src={trust} alt="" />
                            <p className=' text-white font-abril font-semibold text-[50px] '>Excellent </p>
                        </div>
                    </div>
                    <div className="col-3 lg:w-1/4 w-1/2  max-lg:pt-[52px] max-lg:pb-[52px]   px-3">
                        <div className=' flex items-center flex-col gap-[10px]'>
                            <h2 className=' font-poppins font-normal text-lg text-white'>Funding given</h2>
                            <p className=' text-white font-abril font-semibold text-[50px] '>$450M+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating