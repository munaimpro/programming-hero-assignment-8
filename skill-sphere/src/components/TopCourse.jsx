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
                {topCourses.length === 0 ? (
                    <div className="py-20 text-center col-span-3">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            No courses available
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Try searching with a different keyword.
                        </p>
                    </div>
                ) : (
                    topCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))
            )}
            </div>
        </div>
    );
};

export default TopCourse;