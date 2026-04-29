import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className='container mx-auto'>
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg w-full"
                    />
                    <div className='w-full lg:w-2xl'>
                        <h1 className="text-5xl font-bold">Learn <span className='text-[#422ad5]'>Skills</span> From Our Top Instructors</h1>
                        <p className="py-6 text-[16px] text-[#39557e]">
                            Learn outstanding and on-demand skills from our best, and well-qualified instructors with outstanding guidelines.
                        </p>
                        <button className="btn btn-primary btn-lg uppercase">Explore Courses</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;