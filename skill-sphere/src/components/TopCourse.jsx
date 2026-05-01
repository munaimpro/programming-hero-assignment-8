import React from 'react';
import CourseCard from './CourseCard';

const TopCourse = async () => {

    const response = await fetch('https://skill-sphere-munaimpro.vercel.app/course.json');
    const courses = await response.json();
    const topCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <div className='container mx-auto pt-25'>
            {/* Section Heading */}
            <div className='mb-8'>
                <h2 className="text-4xl font-bold text-[#082a5e]">Our <span className='text-[#422ad5]'>Featured</span> Courses</h2>
                <p className="text-gray-500 mt-2">Upgrade your skills with our most in-demand courses</p>
            </div>

            {/* Section Content */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    topCourses.map(course => {
                        return <CourseCard key={course.id} course={course}></CourseCard>
                    })
                }
            </div>
        </div>
    );
};

export default TopCourse;