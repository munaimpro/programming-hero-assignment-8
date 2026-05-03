import { Suspense } from 'react';
import TrendingCourseList from './TrendingCourseList';

const TrendingCourse = async () => {
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/course.json`);
    const courses = await response.json();
    const trendingCourses = courses.filter(course => course.rating > 4.5).slice(0, 6);

    return (
        <div className='container mx-auto pt-25'>
            {/* Section Heading */}
            <div className='mb-8'>
                <h2 className="text-4xl font-bold text-[#082a5e] text-center"><span className='text-[#422ad5]'>Trending</span> Courses</h2>
                <p className="text-gray-500 mt-2 text-center">Stay ahead with the most popular courses today</p>
            </div>

            {/* Section Content */}
            <div className="text-center">
                <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
                    <TrendingCourseList trendingCourses={trendingCourses} />
                </Suspense>
            </div>
        </div>
    );
};

export default TrendingCourse;