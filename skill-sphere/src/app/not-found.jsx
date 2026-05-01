'use client'
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="container mx-auto min-h-[85vh] flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-2xl text-center">
                {/* 404 Background Text Effect */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-primary text-[10rem] md:text-[15rem] font-black select-none">
                        404
                    </h1>
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#082a5e] mb-2 uppercase tracking-tight">
                            Oops! Lost in Space?
                        </h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <p className="text-lg md:text-xl text-[#39557e] max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <Link href="/">
                            <button className="btn btn-primary btn-lg shadow-none px-8 group">
                                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Go to Home Page
                            </button>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-outline btn-primary btn-lg shadow-none px-8"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Decorative background elements (Optional) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 bg-primary/5 blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
};

export default NotFoundPage;