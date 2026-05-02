import { Suspense } from 'react';
import CourseCard from './CourseCard';
import TopCourseList from './TopCourseList';
import coursesData from '@/data/course.json';

const TopCourse = async () => {
    
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    // const response = await fetch(`${baseUrl}/course.json`);
    // const courses = await response.json();
    const topCourses = [...coursesData].sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <div className='container mx-auto pt-25'>
            {/* Section Heading */}
            <div className='mb-8'>
                <h2 className="text-4xl font-bold text-[#082a5e]">Our <span className='text-[#422ad5]'>Featured</span> Courses</h2>
                <p className="text-gray-500 mt-2">Upgrade your skills with our most in-demand courses</p>
            </div>

            {/* Section Content */}
            <div className="text-center">
                <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
                    <TopCourseList topCourses={topCourses} />
                </Suspense>
            </div>
        </div>
    );
};

export default TopCourse;