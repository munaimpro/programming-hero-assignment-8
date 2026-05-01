import { StarIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const CourseCard = ({ course }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img src={course.image} alt={course.title} />
                <div className="badge badge-soft badge-primary absolute top-3 right-3 rounded-full font-medium">{course.category}</div>
            </figure>
            <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title font-medium text-[#082a5e]">{course.title}</h2>
                <div className="text-[#39557e] flex gap-2 items-center"><UserIcon></UserIcon> {course.instructor}</div>
                <div className="text-[#39557e] flex gap-2 items-center">
                    <StarIcon></StarIcon>
                    {course.rating}
                </div>
                <div className="divider py-4"></div>
                <div className="card-actions justify-end mt-auto">
                    <Link href={`/course/${course.id}`}>
                        <button className="btn btn-primary shadow-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;