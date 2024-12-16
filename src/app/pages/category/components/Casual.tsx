import Image from 'next/image'
import React from 'react'
import greaterThan from '../../../assets/greaterThan.png'
import filter from '../../../assets/filter.png'
import upArrow from '../../../assets/upArrow.png'
import rating from '../../../assets/rating.png'
import shirt1 from '../../../assets/shirt1.png'
import shirt2 from '../../../assets/shirt2.png'
import shirt3 from '../../../assets/shirt3.png'
import shirt4 from '../../../assets/shirt4.png'
import shirt8 from '../../../assets/shirt8.png'
import shirt9 from '../../../assets/shirt9.png'
import shirt10 from '../../../assets/shirt10.png'
import shirt11 from '../../../assets/shirt11.png'
import shirt12 from '../../../assets/shirt12.png'


const Casual = () => {
    
    return (
        <>
            <div>
                <div className='ms-28 mt-8 flex justify-start items-center font-sans font-normal text-xl text-[#807c7c] max-[660px]:ms-4'>Home <Image src={greaterThan} alt='' /> Casual</div>
            </div>
            <div className='flex justify-around ms-24 items-center gap-3 max-[660px]:ms-4'>
                <div className='w-60 border-2 h-auto flex flex-col p-5 rounded-lg gap-5 mt-12 max-[660px]:hidden'>
                    <div className='flex justify-between items-center'>
                        <p className='font-sans font-medium text-lg'>Filter</p>
                        <Image src={filter} alt='' />
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <hr className='h-[2px] bg-[#f0f0f0] w-[80%]' />
                    </div>
                    <div className='text-[#807c7c] flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>T-shirt</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Short</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Shirt</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Hoodie</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Jeans</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <hr className='h-[2px] bg-[#f0f0f0] w-[80%]' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans font-medium text-lg'>Price</p>
                            <Image src={upArrow} alt='' />
                        </div>
                        <div>
                            <input
                                type="range"
                                className="
                                       appearance-none 
                                       w-full 
                                       h-2 
                                       bg-gray-200 
                                       rounded-full 
                                       outline-none 
                                       slider-thumb 
                                       [&::-webkit-slider-thumb]:appearance-none 
                                       [&::-webkit-slider-thumb]:w-5 
                                       [&::-webkit-slider-thumb]:h-5 
                                       [&::-webkit-slider-thumb]:bg-black 
                                       [&::-webkit-slider-thumb]:rounded-full 
                                       [&::-moz-range-thumb]:appearance-none 
                                       [&::-moz-range-thumb]:w-5 
                                       [&::-moz-range-thumb]:h-5 
                                       [&::-moz-range-thumb]:bg-black 
                                       [&::-moz-range-thumb]:rounded-full 
                                       [&::-ms-thumb]:appearance-none 
                                       [&::-ms-thumb]:w-5 
                                       [&::-ms-thumb]:h-5 
                                       [&::-ms-thumb]:bg-black 
                                       [&::-ms-thumb]:rounded-full"
                            />
                        </div>
                        <div className='flex justify-around items-center font-medium'>
                            <p>$50</p>
                            <p>$200</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <hr className='h-[2px] bg-[#f0f0f0] w-[80%]' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans font-medium text-lg'>Price</p>
                            <Image src={upArrow} alt='' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-28 h-9 rounded-full bg-green-500'></div>
                                <div className='w-28 h-9 rounded-full bg-red-500'></div>
                                <div className='w-28 h-9 rounded-full bg-yellow-400'></div>
                                <div className='w-28 h-9 rounded-full bg-orange-500'></div>
                                <div className='w-28 h-9 rounded-full bg-sky-500'></div>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-28 h-9 rounded-full bg-blue-500'></div>
                                <div className='w-28 h-9 rounded-full bg-purple-500'></div>
                                <div className='w-28 h-9 rounded-full bg-pink-500'></div>
                                <div className='w-28 h-9 rounded-full bg-white border-2'></div>
                                <div className='w-28 h-9 rounded-full bg-black'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <hr className='h-[2px] bg-[#f0f0f0] w-[80%]' />
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans font-medium text-lg'>Size</p>
                            <Image src={upArrow} alt='' />
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>XX-Small</div>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>X-Small</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>Small</div>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>Medium</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>Large</div>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>X-Small</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>X-Large</div>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>XX-Large</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-[#f0f0f0] text-[#807c7c] px-4 py-2 rounded-3xl'>4X-Large</div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <hr className='h-[2px] bg-[#f0f0f0] w-[80%]' />
                    </div>
                    <div className='text-[#807c7c] flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Casual</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Formal</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Party</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-sans text-md'>Gym</p>
                            <Image src={greaterThan} alt='' />
                        </div>
                    </div>
                    <div>
                        <button className='bg-black text-white outline-none rounded-3xl px-10 py-2 text-lg font-sans mt-3'>Apply Filter</button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-around items-center text-[#807c7c] mt-4 gap-5 p-2">
                        <p className="font-bold text-3xl text-black">Casual</p>
                        <div className="flex justify-center items-center gap-3">
                            <p className='text-xs'>Showing 1-10 of 100 Products</p>
                            <p className="hidden sm:flex items-center gap-2">
                                Sort by: <span className="font-bold text-black">Most Popular</span>
                                <Image src={upArrow} alt="Sort Icon" />
                            </p>
                            <Image className='lg:hidden' src={filter} alt='' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 flex-wrap">
                        {/* Card 1 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt1} alt="Shirt 1" />
                            <p className="font-sans font-semibold text-md">T-SHIRT WITH TAPE DETAILS</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">$120</p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt4} alt="Shirt 4" />
                            <p className="font-sans font-semibold text-md">SKINNY FIT JEANS</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">
                                $240 <span className="text-slate-300"><del>$260</del></span>
                                <span className="text-red-600 bg-red-200 rounded-3xl text-xs p-1 ml-2">30%</span>
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt3} alt="Shirt 3" />
                            <p className="font-sans font-semibold text-md">CHECKERED SHIRT</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">$180</p>
                        </div>

                        {/* Card 4 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt2} alt="Shirt 2" />
                            <p className="font-sans font-semibold text-md">SLEEVE STRIPED T-SHIRT</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">
                                $130 <span className="text-slate-300"><del>$160</del></span>
                                <span className="text-red-600 bg-red-200 rounded-3xl text-xs p-1 ml-2">30%</span>
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt8} alt="Shirt 8" />
                            <p className="font-sans font-semibold text-md">FADED SKINNY JEANS</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">$210</p>
                        </div>

                        {/* Card 6 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt9} alt="Shirt 9" />
                            <p className="font-sans font-semibold text-md">Polo with Contrast Trims</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">$120</p>
                        </div>

                        {/* Card 7 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt10} alt="Shirt 10" />
                            <p className="font-sans font-semibold text-md">Gradient Graphic T-shirt</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">
                                $240 <span className="text-slate-300"><del>$260</del></span>
                                <span className="text-red-600 bg-red-200 rounded-3xl text-xs p-1 ml-2">30%</span>
                            </p>
                        </div>

                        {/* Card 8 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt11} alt="Shirt 11" />
                            <p className="font-sans font-semibold text-md">Polo with Tipping Details</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">$180</p>
                        </div>

                        {/* Card 9 */}
                        <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-2">
                            <Image src={shirt12} alt="Shirt 12" />
                            <p className="font-sans font-semibold text-md">Black Striped T-shirt</p>
                            <Image src={rating} alt="Rating" />
                            <p className="font-sans font-extrabold text-2xl">
                                $130 <span className="text-slate-300"><del>$160</del></span>
                                <span className="text-red-600 bg-red-200 rounded-3xl text-xs p-1 ml-2">30%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Casual