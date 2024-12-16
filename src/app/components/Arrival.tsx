import Image from 'next/image'
import React from 'react'
import shirt1 from '../assets/shirt1.png'
import shirt2 from '../assets/shirt2.png'
import shirt3 from '../assets/shirt3.png'
import shirt4 from '../assets/shirt4.png'
import shirt5 from '../assets/shirt5.png'
import shirt6 from '../assets/shirt6.png'
import shirt7 from '../assets/shirt7.png'
import shirt8 from '../assets/shirt8.png'
import rating from '../assets/rating.png'



function Arrival() {
    return (
        <>
            <div className='text-center font-extrabold text-5xl font-sans mt-10'>New Arrival</div>
            <div className='flex justify-center items-center gap-5 mt-10 flex-wrap'>
                <div className='flex flex-col'>
                    <Image src={shirt1} alt='#' />
                    <p className='font-sans font-semibold text-md'>T-SHIRT WITH TAPE DETAILS</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$120</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt4} alt='#' />
                    <p className='font-sans font-semibold text-md'>SKINNY FIT JEANS</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$240 <span className='text-slate-300'><del>$260</del></span>    <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>30%</span></p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt3} alt='#' />
                    <p className='font-sans font-semibold text-md'>CHECKERED SHIRT</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$180</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt2} alt='#' />
                    <p className='font-sans font-semibold text-md'>SLEEVE STRIPED T-SHIRT</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$130 <span className='text-slate-300'><del>$160</del></span>     <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>30%</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='bg-white border-2 w-60 rounded-3xl h-10'>View More</button>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <hr className='w-[80%] h-[2px] bg-slate-300 ' />
            </div>

            {/*  */}

            <div className='text-center font-extrabold text-5xl font-sans mt-10'>TOP SELLING</div>
            <div className='flex justify-center items-center gap-5 mt-10 flex-wrap'>
                <div className='flex flex-col'>
                    <Image src={shirt5} alt='#' />
                    <p className='font-sans font-semibold text-md'>VERTICAL STRIPED SHIRT</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$212 <span className='text-slate-300'><del>$235</del></span>     <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>30%</span></p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt6} alt='#' />
                    <p className='font-sans font-semibold text-md'>COURAGE GRAPHIC T-SHIRT</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$145</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt7} alt='#' />
                    <p className='font-sans font-semibold text-md'>LOOSE FIT BERMUDA SHORTS</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$80</p>
                </div>
                <div className='flex flex-col'>
                    <Image src={shirt8} alt='#' />
                    <p className='font-sans font-semibold text-md'>FADED SKINNY JEANS</p>
                    <Image src={rating} alt='#' />
                    <p className='font-sans font-extrabold text-2xl'>$210 </p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='bg-white border-2 w-60 rounded-3xl h-10'>View More</button>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <hr className='w-[80%] h-[2px] bg-slate-300 ' />
            </div>
        </>
    )
}

export default Arrival