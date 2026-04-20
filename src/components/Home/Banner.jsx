import { FontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {

    return (
        
        <div className='flex justify-between items-center py-5'>
            <div className='flex-1 space-y-5'>
                <h2 className={`${FontBangla.className} text-6xl font-bold leading-18`}>আপনার শিশুকে দিন। একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span> </h2>
                <p className='text-xl font-medium'>Buy Every Toy With Up TO 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore More</button>

            </div>
            <div className='flex-1 '>
                <Image src={'/assets/hero.png'} alt='banner' width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default Banner;