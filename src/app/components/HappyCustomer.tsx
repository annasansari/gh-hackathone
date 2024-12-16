import React from 'react'
import Image from 'next/image'
import rating from '../assets/rating.png'
import tick from '../assets/tick.png'
import rightArrow from '../assets/right-arrow.png'
import leftArrow from '../assets/left-arrow.png'

const HappyCustomer = () => {
    return (
        <>
            <div className="mt-10 text-[#807c7c]">
                <div className="flex justify-between items-center">
                    <p className="font-sans font-extrabold text-4xl ms-20 max-[660px]:ms-1 text-black">OUR HAPPY CUSTOMERS</p>
                    <div>.</div>
                    <div className="flex justify-around items-center gap-3 me-20 max-[660px]:hidden">
                        <Image src={rightArrow} alt="" />
                        <Image src={leftArrow} alt="" />
                    </div>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-6 mt-8">
                    <div className="shadow-md p-5 w-96 flex flex-col gap-2">
                        <Image src={rating} alt="#" />
                        <div className="flex justify-start items-center">
                            <p>Sarah M.</p>
                            <Image src={tick} alt="#" />
                        </div>
                        <p>&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                    <div className="shadow-md p-5 w-96 flex flex-col gap-2">
                        <Image src={rating} alt="#" />
                        <div className="flex justify-start items-center">
                            <p>Sarah M.</p>
                            <Image src={tick} alt="#" />
                        </div>
                        <p>&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                    <div className="shadow-md p-5 w-96 flex flex-col gap-2">
                        <Image src={rating} alt="#" />
                        <div className="flex justify-start items-center">
                            <p>Sarah M.</p>
                            <Image src={tick} alt="#" />
                        </div>
                        <p>&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HappyCustomer;
