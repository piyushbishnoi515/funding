import React from 'react';
import tea from '../assets/images/webp/tea-img.png';
import teasmall from '../assets/images/webp/tea-img-small.png'

const Forecasting = () => {
    return (
        <div className="bg-[#EFECE6]"> {/* Replaced 'bg-Alabaster' with the hex code */}
            <div className="container">
                <div className=" flex  max-lg:flex-col-reverse  pt-[120px] pb-[120px] max-w-[944px] gap-[100px] justify-center items-center mx-auto">
                    <div className="max-w-[480px]   ">
                        <img src={tea} alt="Tea" className=' max-w-[480px] hidden lg:block' />
                        <img src={teasmall} alt="" className=' max-w-[387px] block lg:hidden' />
                    </div>
                    <div className="max-w-[364px] max-lg:flex flex-col items-center justify-center ">
                        <div className="flex items-center justify-center w-7 h-7 bg-black rounded-full">
                            <p className="font-abril font-bold text-custom-sm text-white">1</p>
                        </div>
                        <p className="font-abril max-w-[364px] mt-[14px] font-semibold text-[39.42px] leading-[45.15px] text-black">
                            Get an AI evaluation <br /> of your supply <br /> chain needs
                        </p>
                        <h2 className=' font-poppins font-medium text-2xl mt-[4px] text-black max-w-[361px]'>By analyzing your sales <br /> velocity and growth potential.</h2>
                        <button className=' bg-blue text-white font-poppins font-medium text-[12px] text-center p-[6px_20px] rounded-[24px] mt-[20px]'>Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecasting;
