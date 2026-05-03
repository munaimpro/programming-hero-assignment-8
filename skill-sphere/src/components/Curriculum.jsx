"use client";
import { useState } from 'react';
import { PlayCircle, Lock } from 'lucide-react';

const curriculumData = [
    {
        id: 1,
        title: "Introduction to the Web",
        lessons: [
            { name: "Web anatomy", duration: "07:48", locked: true },
            { name: "How browsers work", duration: "07:48", locked: true },
            { name: "Setting up VS Code", duration: "10:48", locked: true },
        ]
    },
    {
        id: 2,
        title: "Modern HTML5 & Semantic Web",
        lessons: [
            { name: "Structure, forms", duration: "05:20", locked: true },
            { name: "Validations", duration: "08:15", locked: true },
            { name: "SEO best practices", duration: "08:15", locked: true },
        ]
    },
    {
        id: 3,
        title: "CSS3 Fundamentals & Flexbox",
        lessons: [
            { name: "Box model", duration: "45:00", locked: true },
            { name: "Positioning", duration: "45:00", locked: true },
            { name: "Flexbox", duration: "45:00", locked: true },
            { name: "CSS Variables", duration: "45:00", locked: true },
        ]
    },
    {
        id: 4,
        title: "Responsive Design & Tailwind CSS",
        lessons: [
            { name: "Media queries", duration: "45:00", locked: true },
            { name: "Mobile-first design", duration: "45:00", locked: true },
            { name: "Utility-first styling.", duration: "45:00", locked: true },
        ]
    },    
    {
        id: 5,
        title: "JavaScript Basics (The Essentials)",
        lessons: [
            { name: "Variables", duration: "45:00", locked: true },
            { name: "Data types", duration: "45:00", locked: true },
            { name: "Operators", duration: "45:00", locked: true },
            { name: "Control flow", duration: "45:00", locked: true },
        ]
    },    
    {
        id: 6,
        title: "DOM Manipulation & Events",
        lessons: [
            { name: "Selecting elements", duration: "45:00", locked: true },
            { name: "Event listeners", duration: "45:00", locked: true },
            { name: "Building interactive UI", duration: "45:00", locked: true },
        ]
    },
    {
        id: 7,
        title: "Modern JS (ES6+) & Async",
        lessons: [
            { name: "Arrow functions", duration: "45:00", locked: true },
            { name: "Destructuring", duration: "45:00", locked: true },
            { name: "Promises", duration: "45:00", locked: true },
            { name: "Fetch API", duration: "01:00", locked: true },
        ]
    },
    {
        id: 8,
        title: "React.js Fundamentals",
        lessons: [
            { name: "Components", duration: "45:00", locked: true },
            { name: "Props", duration: "45:00", locked: true },
            { name: "JSX", duration: "45:00", locked: true },
            { name: "State management", duration: "01:00", locked: true },
        ]
    },
    {
        id: 9,
        title: "Advanced React Hooks",
        lessons: [
            { name: "useEffect", duration: "45:00", locked: true },
            { name: "useContext", duration: "45:00", locked: true },
            { name: "useMemo", duration: "45:00", locked: true },
            { name: "Custom Hooks", duration: "01:00", locked: true },
        ]
    },
    {
        id: 10,
        title: "Course Certification",
        lessons: [
            { name: "Course Certification", duration: "01:00", locked: true },
        ]
    }
];

function Curriculum() {
    // Start with the first section open
    const [activeIndex, setActiveIndex] = useState(1);

    const handleToggle = (id) => {
        // Closing the currently open section by clicking it again
        setActiveIndex(prevIndex => (prevIndex === id ? null : id));
    };

    return (
        <div className="py-8 bg-white lg:col-span-8 w-full">
            <h1 className="text-3xl font-bold text-[#082a5e] mb-6">Course Curriculum</h1>

            <div className="flex flex-col gap-4">
                {curriculumData.map((section) => {
                    const isOpen = activeIndex === section.id;

                    return (
                        <div
                            key={section.id}
                            className={`collapse collapse-arrow border rounded-lg transition-all duration-300 ${isOpen
                                    ? 'bg-white border-slate-200'
                                    : 'bg-blue-50 border-transparent'
                                }`}
                        >
                            <input type="checkbox" checked={isOpen} onChange={() => handleToggle(section.id)}/>

                            <div className={`collapse-title text-lg font-medium flex items-center transition-colors ${isOpen ? 'text-slate-900' : 'text-primary'
                                    }`} >
                                {section.title}
                            </div>

                            <div className="collapse-content p-0">
                                <div className="flex flex-col divide-y divide-slate-100 border-t border-slate-200">
                                    {section.lessons.length > 0 ? (
                                        section.lessons.map((lesson, lIdx) => (
                                            <div key={lIdx}
                                                className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <PlayCircle className="w-5 h-5 text-slate-400" />
                                                    <span className="text-slate-700 font-medium">{lesson.name}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-slate-500 text-sm">
                                                    <span>{lesson.duration}</span>
                                                    {lesson.locked && <Lock className="w-4 h-4" />}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 text-sm text-slate-400 italic">No lessons available.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Curriculum;