'use client'
import bannerImage from '@/assets/banner.png';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className='container mx-auto'>
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
                    <Image src={bannerImage} alt="Banner"></Image>
                    <div className='w-full lg:w-2xl'>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}        className="text-5xl font-bold text-[#082a5e]">Learn <span className='text-[#422ad5]'>Skills</span> From Our Top Instructors</motion.h1>
                        <motion.p initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }} className="py-6 text-[16px] text-gray-500">
                            Learn outstanding and on-demand skills from our best, and well-qualified instructors with outstanding guidelines.
                        </motion.p>
                        <Link href={'/course'}>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.4 }} className="btn btn-primary btn-lg uppercase">
                                Explore Courses
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;