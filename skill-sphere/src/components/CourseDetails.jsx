import React from 'react';
import { Clock, FileText, Users, Zap, Play, Tag } from 'lucide-react';
import Image from 'next/image';

const CourseDetails = ({ singleCourse }) => {
    return (
        <div className="lg:col-span-4 w-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden h-fit">
            {/* Video Thumbnail Section */}
            <div className="relative group p-4 pb-0">
                <div className="relative rounded-lg overflow-hidden h-48">
                    <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop" alt="Course Preview" className="w-full h-full object-cover" width={100} height={100}/>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform group-hover:scale-110">
                            <Play className="fill-primary text-primary w-6 h-6 ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 pt-4">
                {/* Pricing */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-slate-500 font-medium">Costs:</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">$25.00</span>
                        <span className="text-slate-400 line-through text-sm">$84.99</span>
                    </div>
                </div>

                {/* Action Button */}
                <button className="btn btn-primary btn-block font-bold py-3 px-4 rounded-md mb-6 uppercase text-sm">
                    Enroll This Now
                </button>

                {/* Info List */}
                <div className="space-y-4">
                    <h3 className="font-bold text-[#082a5e] text-sm">Include This Course</h3>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Clock className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-medium">Duration</span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium">{singleCourse.duration}</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                            <div className="flex items-center gap-3 text-slate-600">
                                <FileText className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-medium">Estimated Seat</span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium font-mono">250</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Users className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-medium">Joined</span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium font-mono">190</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Tag className="w-5 h-5 text-slate-400"/>
                                <span className="text-sm font-medium">Level</span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium">{singleCourse.level}</span>
                        </div>

                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Zap className="w-5 h-5 text-slate-400" />
                                <span className="text-sm font-medium">Category</span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium">{singleCourse.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;