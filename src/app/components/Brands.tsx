import React from 'react'
import Image from 'next/image'
import versace from '../assets/versace.png'
import zara from '../assets/zara.png'
import gucci from '../assets/gucci.png'
import prada from '../assets/prada.png'
import calvin from '../assets/versace.png'

function Brands() {
  return (
    <>
    <div className='bg-black w-full flex justify-around flex-wrap items-center p-8 max-[660px]:mt-5'>
        <Image className='max-[660px]:mt-3' src={versace} alt='logo' width={130}/>
        <Image className='max-[660px]:mt-3' src={zara} alt='logo' width={90}/>
        <Image className='max-[660px]:mt-3' src={gucci} alt='logo' width={130}/>
        <Image className='max-[660px]:mt-3' src={prada} alt='logo' width={130}/>
        <Image className='max-[660px]:mt-4' src={calvin} alt='logo' width={130}/>
    </div>
    </>
  )
}

export default Brands