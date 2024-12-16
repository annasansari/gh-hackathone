import React from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <>
            <div className='w-full h-100 flex justify-evenly items-center flex-wrap p-3' style={{ backgroundColor: '#f2f0f1' }}>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-6xl font-extrabold font-sans max-[660px]:text-5xl'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
                    <p className='font-sans'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                    <button className='bg-black rounded-3xl text-white font-sans w-32 text-sm p-2 max-[660px]:w-80 '>SHOP NOW</button>
                </div>
                <div className='lg:hidden flex flex-col mt-8 gap-5 font-semibold font-sans'>
                    <div className='flex justify-around items-start gap-5'>
                        <div>
                            <p className='text-center font-extrabold text-2xl'>200+</p>
                            <p>International Brand</p>
                        </div>
                        <div>
                            <p className='text-center font-extrabold text-2xl'>2000+</p>
                            <p>High Quality-Product</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <p className='text-center font-extrabold text-2xl'>30,000+</p>
                            <p>Happy Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={hero} alt='hero' width={500} />
                </div>
            </div>
        </>
    )
}

export default Hero