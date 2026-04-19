import Image from 'next/image';
import React from 'react';

const Banner = () => {

    return (
        
        <div className='flex justify-between items-center '>
            <div className='flex-1 space-y-5'>
                <h2 className='text-4xl font-bold'>আপনার শিশুকে একটি সুন্দর ভবিষ্যৎ দিন।</h2>
                <p className='text-xl font-bold'>Buy Every Toy With Up TO 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore More</button>

            </div>
            <div className='flex-1 '>
                <Image src={'/assets/hero.png'} alt='banner' width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default Banner;