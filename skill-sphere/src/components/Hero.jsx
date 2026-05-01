import React from 'react';
import bannerImage from '@/assets/banner.png'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className='container mx-auto'>
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
                    <Image src={bannerImage} alt="Banner"></Image>
                    <div className='w-full lg:w-2xl'>
                        <h1 className="text-5xl font-bold text-[#082a5e]">Learn <span className='text-[#422ad5]'>Skills</span> From Our Top Instructors</h1>
                        <p className="py-6 text-[16px] text-gray-500">
                            Learn outstanding and on-demand skills from our best, and well-qualified instructors with outstanding guidelines.
                        </p>
                        <Link href={'/course'}>
                            <button className="btn btn-primary btn-lg uppercase">Explore Courses</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;