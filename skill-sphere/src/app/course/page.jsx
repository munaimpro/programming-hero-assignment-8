"use client";

import AllCourseList from "@/components/AllCourseList";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('https://skill-sphere-munaimpro.vercel.app/course.json');
                const data = await res.json();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Filter on search
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Page Heading */}
            <div className="relative py-16 bg-cover bg-center mb-25"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')" }}>
                <div className="absolute inset-0 bg-[#082a5e]/60"></div>

                <div className="relative container mx-auto text-white">
                    <h2 className="text-5xl font-bold mb-3">Our Courses</h2>
                    <ul className="flex gap-2 font-medium">
                        <li>Home</li>
                        <li>-</li>
                        <li>
                            <Link className="text-[#c3d7f5]" href={'/course'}>Our Courses</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Search Bar */}
            <div className="container mx-auto flex justify-between py-5">
                <p className="text-gray-500">
                    We found {filteredCourses.length} courses for you
                </p>
                
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search Courses" className="input outline-none" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </label>
            </div>

            {/* Page Content */}
            <div className="container mx-auto mb-25">
                <div className="text-center">
                    <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
                        <AllCourseList filteredCourses={filteredCourses} />
                    </Suspense>

                    {isLoading ? (
                        <div className="py-20 flex justify-center">
                            <span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>
                        </div>
                    ) : (
                        <AllCourseList filteredCourses={filteredCourses} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;