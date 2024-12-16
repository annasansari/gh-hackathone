import Image from 'next/image'
import React from 'react'
import shirt9 from '../../../assets/shirt9.png'
import shirt10 from '../../../assets/shirt10.png'
import shirt11 from '../../../assets/shirt11.png'
import shirt12 from '../../../assets/shirt12.png'
import rating from '../../../assets/rating.png'


const MightLike = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-4 text-center p-2">
                <p className="font-sans font-extrabold text-3xl sm:text-5xl">YOU MIGHT ALSO LIKE</p>
            </div>

            <div className='flex justify-center items-center gap-5 mt-10 flex-wrap'>
                <div className='flex flex-col'>
                    <Image src={shirt9} alt='#' />
                    <p className='font-sans font-semibold text-lg'>Polo with Contrast Trims</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$120</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt10} alt='#' />
                    <p className='font-sans font-semibold text-lg'>Gradient Graphic T-shirt</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$240 <span className='text-slate-300'><del>$260</del></span>    <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>30%</span></p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt11} alt='#' />
                    <p className='font-sans font-semibold text-lg'>Polo with Tipping Details</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$180</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt12} alt='#' />
                    <p className='font-sans font-semibold text-lg'>Black Striped T-shirt</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$130 <span className='text-slate-300'><del>$160</del></span>     <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>30%</span></p>
                </div>
            </div>
        </>
    )
}

export default MightLike