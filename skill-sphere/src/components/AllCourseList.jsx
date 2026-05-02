import CourseCard from './CourseCard';

const AllCourseList = ({ filteredCourses }) => {

    if (filteredCourses.length === 0) {
        return (
            <div className="py-20 text-center col-span-3">
                <h2 className="text-2xl font-semibold text-gray-600">
                    No courses available
                </h2>
                <p className="text-gray-400 mt-2">
                    Try searching with a different keyword.
                </p>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default AllCourseList;