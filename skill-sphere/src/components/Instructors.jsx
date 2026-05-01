import Image from "next/image";

const Instructors = () => {
    const instructors = [
        {
            name: "Marcus Thorne",
            role: "Lead Solutions Architect",
            image: "https://i.pravatar.cc/150?u=sarah",
            students: "15k+",
            courses: 18,
            specialty: "Cloud Infrastructure"
        },
        {
            name: "Elena Rodriguez",
            role: "Senior UX/UI Engineer",
            image: "https://i.pravatar.cc/150?u=elena",
            students: "22k+",
            courses: 14,
            specialty: "Product Design"
        },
        {
            name: "Kenji Tanaka",
            role: "Cybersecurity Analyst",
            image: "https://i.pravatar.cc/150?u=kenji",
            students: "10k+",
            courses: 9,
            specialty: "Ethical Hacking"
        },
        {
            name: "Amara Okoro",
            role: "AI Research Scientist",
            image: "https://i.pravatar.cc/150?u=amara",
            students: "31k+",
            courses: 21,
            specialty: "Neural Networks"
        }
    ];

    return (
        <div className="container mx-auto bg-base-100 py-25">
            {/* Section Heading */}
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#082a5e] mb-2">Master <span className='text-[#422ad5]'>Tech</span> with Experts</h2>
                    <p className="text-gray-500">
                        Learn directly from industry leaders who are building<br/> the future of the web and beyond.
                    </p>
                </div>
                <button className="btn btn-outline btn-primary shadow-none hidden md:flex">
                    View All Instructors
                </button>
            </div>

            {/* Section Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {instructors.map((instructor, index) => (
                    <div
                        key={index}
                        className="card bg-base-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    >
                        <figure className="px-6 pt-6">
                            <div className="avatar">
                                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image src={instructor.image} alt={instructor.name} width="100" height="100" />
                                </div>
                            </div>
                        </figure>

                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                                {instructor.name}
                            </h3>
                            <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                                {instructor.role}
                            </p>

                            <div className="divider my-2"></div>

                            <div className="flex justify-around w-full">
                                <div className="text-center">
                                    <div className="font-bold text-lg">{instructor.students}</div>
                                    <div className="text-xs opacity-50 uppercase">Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-lg">{instructor.courses}</div>
                                    <div className="text-xs opacity-50 uppercase">Courses</div>
                                </div>
                            </div>

                            <div className="card-actions mt-4 w-full">
                                <button className="btn btn-primary shadow-none btn-block btn-sm md:btn-md">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;