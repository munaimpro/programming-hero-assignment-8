"use client";

import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('https://skill-sphere-munaimpro.vercel.app/course.json');
            const data = await res.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    // 🔥 FILTER LOGIC
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
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-25">
                {filteredCourses.length === 0 ? (
                    <div className="py-20 text-center col-span-3">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            No courses available
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Try searching with a different keyword.
                        </p>
                    </div>
                ) : (
                    filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CoursePage;