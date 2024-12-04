import React from 'react'
import amazon from '../assets/images/svg/Amazon.svg'
import shop from '../assets/images/svg/shop.svg'
import ebay from '../assets/images/svg/ebay.svg'
import big from '../assets/images/svg/big.svg'

const Platform = () => {
    return (
        <div className='bg-light-grey'>
            <div className="container">
                <div className=' flex items-center  gap-[52px] pt-[47px] pb-[57px] flex-wrap mx-auto justify-center max-w-[739px]'>
                    <p className=' font-poppins text-white font-medium text-sm text-center uppercase'> main supported platforms</p>
                    <div className=' mx-auto lg:flex '>
                        <div className=' flex  gap-[67px]'>
                            <img src={amazon} alt="" />
                            <img src={shop} alt="" />
                        </div>
                        <div className=' flex gap-[67px] pt-[44px] lg:pt-0'>
                            <img src={ebay} alt="" />
                            <img src={big} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform