import Image from 'next/image';
import cart from '../assets/cart.png';
import profile from '../assets/profile.png';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className='flex justify-around items-center mt-5 h-16'>
                <div className="brand">
                    <Link href={'/'}> <h1 className='text-3xl font-extrabold'>SHOP.CO</h1></Link>
                </div>
                <nav>
                    <ul className="flex justify-around items-center gap-5 font-sans font-semibold">
                        <Link href={'/'}><li className='hidden lg:block'>Home</li></Link>
                        <Link href={'/pages/product'}><li className='text-xs sm:text-sm lg:text-base'>Our Product</li></Link>
                        <Link href={'/pages/category'}><li className='text-xs sm:text-sm lg:text-base'>Category</li></Link>
                        <Link href={'/pages/cart'}><li className='text-xs sm:text-sm lg:text-base'>Cart</li></Link>
                    </ul>
                </nav>
                <div className="flex justify-around items-center gap-2">
                    <input
                        className='rounded-xl border-none outline-none p-1 w-80 h-10 placeholder:text-sm placeholder:font-bold hidden lg:block'
                        style={{ backgroundColor: '#F0F0F0' }}
                        type="text"
                        placeholder="Search for products"
                        aria-label="Search for products"
                    />
                    <Image className='hidden lg-block' src={profile} alt="Profile" width={20} height={20} />
                    <Image className='hidden lg-block' src={cart} alt="Cart" width={20} height={20} />
                </div>
            </header>
        </>
    );
};

export default Header;

