import React from 'react'
import tick from '../../../assets/tick.png'
import stars from '../../../assets/stars.png'
import more from '../../../assets/more.png'
import filter from '../../../assets/filter.png'
import downArrow from '../../../assets/downArrow.png'
import Image from 'next/image'

const Reviews = () => {
    return (
        <>
            <div className='mt-8 flex justify-around items-center font-sans font-medium text-xl text-[#807c7c]'>
                <div className='text-[#807c7c] w-96 text-center p-4' style={{ borderBottom: "4px solid #807c7c" }}>Product Details</div>
                <div className='text-black w-96 text-center p-4' style={{ borderBottom: 'solid black 4px' }}>Rating & Reviews</div>
                <div className='text-[#807c7c] w-96 text-center p-4' style={{ borderBottom: "4px solid #807c7c" }}>FAQs</div>
            </div>
            <div className='ms-20 flex justify-between items-center mt-10 w-[90%] max-[660px]:w-[100%] max-[660px]:ms-4'>
                <div className='flex justify-center items-center gap-3'>
                    <p className='font-sans font-semibold text-2xl'>All Reviews</p>
                    <p className='text-xs mt-3 max-[660px]:hidden'>(451)</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Image src={filter} alt='' />
                    <button className='flex justify-evenly items-center p-3 w-48 outline-none rounded-3xl bg-[#f0f0f0] max-[660px]:hidden'>Latest <Image className='max-[660px]:block' src={downArrow} alt='' /></button>
                    <button className='p-3 px-6 rounded-3xl bg-black text-white'>Write a Review</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 p-3">
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Samantha D.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "I absolutely love this t-shirt! The design is unique and the fabric
                        feels so comfortable. As a fellow designer, I appreciate the attention to
                        detail. This t-shirt definitely gets
                        a thumbs up from me."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 14, 2023</div>
                </div>
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Alex M.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "The t-shirt exceeded my expectations! The colors are vibrant and the
                        print quality is top-notch. Being a UI/UX designer myself, I'm quite picky
                        about aesthetics, and this t-shirt definitely gets a thumbs up from me."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 15, 2023</div>
                </div>
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Ethan R.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "This t-shirt is a must-have for anyone who appreciates good design. The
                        minimalistic yet stylish pattern caught my eye, and the fit is perfect. I
                        can see the designer's touch in every aspect of this shirt."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 16, 2023</div>
                </div>
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Olivia P.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt
                        not only represents those principles but also feels great to wear. It's
                        evident that the designer poured their creativity into making this t-shirt
                        stand out."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 17, 2023</div>
                </div>
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Liam K.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "This t-shirt is a fusion of comfort and creativity. The fabric is soft,
                        and the design speaks volumes about the designer's skill. It's like wearing
                        a piece of art that reflects my passion for both design and fashion."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 18, 2023</div>
                </div>
                <div className="w-full md:w-[45%] shadow-md p-5 mt-5 flex flex-col gap-3 text-[#807c7c]">
                    <div className="flex justify-between items-center">
                        <Image src={stars} alt="#" />
                        <Image src={more} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-black font-semibold text-lg">Ava H.</p>
                        <Image src={tick} alt="#" />
                    </div>
                    <p>
                        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.
                        The intricate details and thoughtful layout of the design make this shirt a
                        conversation starter. This t-shirt definitely gets a thumbs up from me."
                    </p>
                    <div className="mt-3 text-sm">Posted on August 19, 2023</div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='outline-none px-10 py-2 border-2 font-sans font-medium mt-5 rounded-3xl'>Load More Reviews</button>
            </div>
        </>
    )
}

export default Reviews