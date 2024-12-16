import React from 'react'
import Image from 'next/image'
import casual from '../assets/casual.png'
import formal from '../assets/formal.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png'

const Browse = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-10'>
                <div className='w-[90%] h-auto rounded-2xl p-10' style={{ backgroundColor: '#f0f0f0' }}>
                    <div className='font-sans font-extrabold text-4xl text-center'>BROWSE BY DRESS STYLE</div>
                    <div className='flex justify-center items-center flex-wrap gap-5 mt-5'>
                        <Image src={casual} alt='#'/>
                        <Image src={formal} alt='#'/>
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-5 mt-5'>
                        <Image src={party} alt='#'/>
                        <Image src={gym} alt='#'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Browse