import Image from 'next/image'
import React from 'react'
import greaterThan from '../../../assets/greaterThan.png'
import mainShirt from '../../../assets/mainShirt.png'
import topLeftBrownShirt from '../../../assets/topLeftBrownShirt.png'
import leftCenterbrownShirt from '../../../assets/leftCenterbrownSShirt.png'
import leftBottomBrownShirt from '../../../assets/leftBottomBrownShirt.png'
import rating from '../../../assets/rating.png'

const Tshirt = () => {
    return (
        <>
            <div>
                <div className='ms-28 mt-8 flex justify-start items-center font-sans font-normal text-xl text-[#807c7c] max-[660px]:ms-4'>Home <Image src={greaterThan} alt='' /> Shop <Image src={greaterThan} alt='' /> Men <Image src={greaterThan} alt='' /> T-shirts </div>
            </div>
            <div className='flex justify-center items-center gap-5 mt-5 flex-wrap p-4'>
                <div className='flex justify-start items-center gap-3'>
                    <div className='flex flex-col gap-3'>
                        <Image className='max-[660px]:order-2' src={topLeftBrownShirt} alt='' />
                        <Image className='max-[660px]:order-3' src={leftCenterbrownShirt} alt='' />
                        <Image className='max-[660px]:order-4' src={leftBottomBrownShirt} alt='' />
                    </div>
                    <div>
                        <Image className='max-[660px]:order-1' src={mainShirt} alt='' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='font-sans font-bold text-5xl'>One Life Graphic T-shirt</div>
                    <div><Image src={rating} alt='' width={200} /></div>
                    <div><p className='font-sans font-medium text-3xl'>$260 <span className='text-slate-300'><del>$300</del></span>    <span className='text-red-600 bg-red-200 rounded-3xl text-xs p-1'>-40%</span></p></div>
                    <div><p className='text-[#807c7c] text-xl'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br /> breathable fabric, it offers superior comfort and style.</p></div>
                    <div className='flex justify-center items-center mt-4'><hr className='w-[100%] h-[2px] bg-[#807c7c]' /></div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-sans text-xl font-medium'>Select Color</p>
                        <div className='flex justify-start items-center gap-4'>
                            <div className='bg-[#4f4632] rounded-full w-14 h-14'></div>
                            <div className='bg-[#314f4a] rounded-full w-14 h-14'></div>
                            <div className='bg-[#31344f] rounded-full w-14 h-14'></div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4'><hr className='w-[100%] h-[2px] bg-[#807c7c]' /></div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-sans text-xl font-medium'>Select Color</p>
                        <div className='flex justify-start items-center gap-4'>
                            <div className='bg-[#f0f0f0] rounded-3xl p-4 text-[#807c7c]'>Small</div>
                            <div className='bg-[#f0f0f0] rounded-3xl p-4 text-[#807c7c]'>Medium</div>
                            <div className='bg-[#000] rounded-3xl p-4 text-[#fff]'>Large</div>
                            <div className='bg-[#f0f0f0] rounded-3xl p-4 text-[#807c7c] max-[660px]:hidden'>Extra Large</div>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='bg-[#f0f0f0] rounded-3xl h-12 text-[#807c7c] w-[45%] text-center flex justify-around items-center text-2xl font-sans font-medium'>
                            <div className='text-4xl'>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                        <button className='bg-black w-[45%] rounded-3xl h-12 text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tshirt