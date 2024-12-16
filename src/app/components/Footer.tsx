import Image from 'next/image'
import React from 'react'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instgram.png'
import visa from '../assets/Visa.png'
import masterCard from '../assets/Mastercard.png'
import paypal from '../assets/Paypal.png'
import appPay from '../assets/appPay.png'
import gPay from '../assets/gPay.png'
import github from '../assets/github.png'

const Footer = () => {
    return (
        <>
            <div className='mt-10 flex items-start flex-col'>
                <div className='bg-black w-[90%] ms-16 max-[660px]:ms-4 h-auto p-5 flex justify-around items-center rounded-lg flex-wrap'>
                    <div className='text-white text-3xl font-extrabold font-sans'>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</div>
                    <div className='flex flex-col mt-5 gap-2'>
                        <input type="email" className='rounded-3xl bg-white outline-none p-3 w-70' placeholder='Select your email address' />
                        <button className='rounded-3xl bg-white outline-none p-3 w-70'>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className='w-full h-auto p-5 flex justify-around items-center flex-wrap max-[660px]:flex max-[660px]:justify-start max-[660px]:items-start max-[660px]:gap-10' style={{ backgroundColor: '#F0F0F0'}}>
                    <div className='flex flex-col gap-5 items-start'>
                        <p className='text-3xl font-extrabold'>SHOP.CO</p>
                        <p>We have clothes that suits your style and <br /> which you,re proud to wear. From <br /> women to men.</p>
                        <div className='flex justify-center items-center gap-2'>
                            <Image src={twitter} alt='' />
                            <Image src={facebook} alt='' />
                            <Image src={instagram} alt='' />
                            <Image src={github} alt='' />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3 font-sans'>
                            <a href="#" className="tracking-widest font-semibold">COMPANY</a>
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Works</a>
                            <a href="#">Career</a>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3 font-sans'>
                            <a href="#" className="tracking-widest font-semibold">HELP</a>
                            <a href="#">Custoer Support</a>
                            <a href="#">Delivery Details</a>
                            <a href="#">Terms & Condition</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3 font-sans'>
                            <a href="#" className="tracking-widest font-semibold">FAQ</a>
                            <a href="#">Accounts</a>
                            <a href="#">Management</a>
                            <a href="#">Order</a>
                            <a href="#">Payments</a>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3 font-sans'>
                            <a href="#" className="tracking-widest font-semibold">RESOURCES</a>
                            <a href="#">Free eBooks</a>
                            <a href="#">Development</a>
                            <a href="#">How to - Blog</a>
                            <a href="#">Youtube Playlist</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#F0F0F0' }}>
                <div className='flex justify-center items-center' >
                    <hr className='mt-3 h-1 bg-slate-400 w-[90%]' />
                </div>
                <div className='flex justify-around items-start mt-6 flex-wrap gap-2'>
                    <p className='text-sm'>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className='flex justify-center items-center gap-1'>
                        <Image src={visa} alt=''/>
                        <Image src={masterCard} alt=''/>
                        <Image src={paypal} alt=''/>
                        <Image src={appPay} alt=''/>
                        <Image src={gPay} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer