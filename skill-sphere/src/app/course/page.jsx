import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const CoursePage = async () => {

    const response = await fetch('https://skill-sphere-munaimpro.vercel.app/course.json');
    const courses = await response.json();

    return (
        <div>
            {/* Page Heading */}
            <div className="relative py-16 bg-cover bg-center mb-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#082a5e]/60"></div>

                {/* Content */}
                <div className="relative container mx-auto text-white">
                    <h2 className="text-5xl font-bold mb-3">Our Courses</h2>
                    <ul className="flex gap-2">
                        <li>Home</li>
                        <li>-</li>
                        <li>
                            <Link href={'/course'}>Our Courses</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Page Content */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-25'>
                {
                    courses.map(course => {
                        return <CourseCard key={course.id} course={course}></CourseCard>
                    })
                }
            </div>
        </div>
    );
};

export default CoursePage;