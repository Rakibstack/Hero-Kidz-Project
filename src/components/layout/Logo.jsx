import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    
    return (
        <Link className='flex items-center gap-2' href={'/'}>
            <Image
            alt='logo-hero-kidzs'
            src={'/assets/logo.png'}
            width={60}
            height={50}
            />
            <h2 className='text-2xl font-bold'>Hero <span className='text-secondary'>Kidz</span></h2>
        </Link>
    );
};

export default Logo;
