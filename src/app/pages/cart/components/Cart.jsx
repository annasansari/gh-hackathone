import Image from 'next/image'
import React from 'react'
import greaterThan from '../../../assets/greaterThan.png'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import bin from '../../../assets/bin.png'
import minus from '../../../assets/minus.png'
import plus from '../../../assets/plus.png'



const Cart = () => {
    return (
        <>
            <div>
                <div className='ms-28 mt-8 flex justify-start items-center font-sans font-normal text-xl text-[#807c7c] max-[660px]:ms-4'>Home <Image src={greaterThan} alt='' /> Cart</div>
            </div>
            <div className="flex justify-start ms-24 items-center mt-4 text-center p-2">
                <p className="font-sans font-extrabold text-3xl sm:text-5xl">YOUR CART</p>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-10'>
                <div className='shadow-sm flex flex-col gap-4'>
                    <div className='flex justify-around items-center gap-4 p-4 '>
                        <div className='flex justify-center items-center gap-3'>
                            <div><Image src={image1} alt='' /></div>
                            <div className=''>
                                <p className='text-lg font-semibold font-sans'>Gradient Graphic T-shirt</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Size:</span> Large</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Color:</span> White</p>
                                <p className='text-2xl font-bold font-sans mt-3'>$145</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-14'>
                            <Image className='ms-10 mt-3' src={bin} alt='' />
                            <div className='bg-[#f0f0f0] px-6 py-3 rounded-3xl flex justify-center items-center gap-3'>
                                <Image src={minus} alt='' />
                                <p>1</p>
                                <Image src={plus} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around items-center gap-4 p-4 '>
                        <div className='flex justify-center items-center gap-3'>
                            <div><Image src={image1} alt='' /></div>
                            <div className=''>
                                <p className='text-lg font-semibold font-sans'>Gradient Graphic T-shirt</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Size:</span> Large</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Color:</span> White</p>
                                <p className='text-2xl font-bold font-sans mt-3'>$145</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-14'>
                            <Image className='ms-10 mt-3' src={bin} alt='' />
                            <div className='bg-[#f0f0f0] px-6 py-3 rounded-3xl flex justify-center items-center gap-3'>
                                <Image src={minus} alt='' />
                                <p>1</p>
                                <Image src={plus} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around items-center gap-4 p-4 '>
                        <div className='flex justify-center items-center gap-3'>
                            <div><Image src={image1} alt='' /></div>
                            <div className=''>
                                <p className='text-lg font-semibold font-sans'>Gradient Graphic T-shirt</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Size:</span> Large</p>
                                <p className='text-[#807c7c]'><span className='text-black'>Color:</span> White</p>
                                <p className='text-2xl font-bold font-sans mt-3'>$145</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-14'>
                            <Image className='ms-10 mt-3' src={bin} alt='' />
                            <div className='bg-[#f0f0f0] px-6 py-3 rounded-3xl flex justify-center items-center gap-3'>
                                <Image src={minus} alt='' />
                                <p>1</p>
                                <Image src={plus} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-[660px]:w-[80%]'>
                    <p className='text-xl font-sans font-semibold'>Order Summary</p>
                    <div className='text-[#807c7c] flex flex-col'>
                        <div className='flex justify-between items-center gap-10'>
                            <p className='font-sans text-md'>Subtotal</p>
                            <p className='text-black font-bold text-lg font-sans'>$565</p>
                        </div>
                        <div className='flex justify-between items-center gap-10'>
                            <p className='font-sans text-md'>Discount (-20%)</p>
                            <p className='text-red-500 font-bold text-lg font-sans'>-$113</p>
                        </div>
                        <div className='flex justify-between items-center gap-10'>
                            <p className='font-sans text-md'>Delivery Fee</p>
                            <p className='text-black font-bold text-lg font-sans'>$15</p>
                        </div>
                        <div className='flex justify-center items-center mt-3'>
                            <hr className='h-[2px] bg-[#f0f0f0] w-96' />
                        </div>
                        <div className='flex justify-between items-center gap-10 mt-3'>
                            <p className='font-sans text-md text-black'>Total</p>
                            <p className='text-black font-bold text-lg font-sans'>$467</p>
                        </div>
                        <div className='flex flex-col gap-3 mt-5'>
                            <div className='flex justify-center items-center gap-3'>
                                <input type="text" placeholder='Add promo code' className='rounded-3xl border-none outline-none px-8 h-10 placeholder:text-sm placeholder:font-bold bg-[#f0f0f0] max-[660px]:w-[90%]' />
                                <button className='bg-black text-white outline-none rounded-3xl px-8 py-2 text-lg font-sans'>Apply</button>
                            </div>
                            <button className='bg-black text-white outline-none rounded-3xl px-8 py-2 text-lg font-sans'>Go To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart