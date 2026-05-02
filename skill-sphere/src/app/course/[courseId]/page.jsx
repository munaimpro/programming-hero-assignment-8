import CourseDetails from "@/components/CourseDetails";
import Curriculum from "@/components/Curriculum";
import { Clock, Star, User2Icon } from "lucide-react";

const DetailsPage = async ({params}) => {

    const { courseId } = await params;
    const response = await fetch(`http://localhost:3000/course.json`);
    const courses = await response.json();
    const singleCourse = courses.find(course => course.id == parseInt(courseId));

    return (
        <div>
            {/* Page Heading */}
            <div className="relative py-16 bg-cover bg-center mb-25 bg-[#082a5e]">
                <div className="relative container mx-auto text-white">
                    <div className="badge bg-[#04bc53] font-medium text-white border-[#04bc53] rounded-full mb-4">{singleCourse.category}</div>
                    <h2 className="max-w-2xl leading-14 text-5xl font-bold mb-3">{singleCourse.title}</h2>
                    <p className="text-white/60 mb-8">{singleCourse.description}</p>
                    <div className="flex gap-5 items-center text-white/60">
                        <div className="flex items-center gap-1">
                            <span className="text-white"><User2Icon></User2Icon></span>
                            <span>{singleCourse.instructor}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="text-white"><Clock></Clock></span>
                            <span>{singleCourse.duration}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="text-white flex gap-1">
                                <Star fill="#f8bc24" stroke="#f8bc24"></Star>
                                <Star fill="#f8bc24" stroke="#f8bc24"></Star>
                                <Star fill="#f8bc24" stroke="#f8bc24"></Star>
                                <Star fill="#f8bc24" stroke="#f8bc24"></Star>
                                <Star fill="#f8bc24" stroke="#f8bc24"></Star>
                            </span>
                            <span>({singleCourse.rating})</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div className="container mx-auto mb-25">
                <div className="grid grid-cols-1 lg:grid-cols-12 justify-between">
                    <Curriculum></Curriculum>
                    <CourseDetails singleCourse={singleCourse}></CourseDetails>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;