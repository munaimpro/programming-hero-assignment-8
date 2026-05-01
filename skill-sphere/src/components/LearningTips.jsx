import { Book, Clock } from 'lucide-react';
import React from 'react';

const LearningTips = () => {
    return (
        <div className='container mx-auto pt-25'>
            {/* Section Heading */}
            <div className='mb-8 text-center'>
                <h2 className="text-4xl font-bold text-[#082a5e]">Learning <span className='text-[#422ad5]'>Tips</span></h2>
                <p className="text-gray-500 mt-2">Boost your productivity with smart learning strategies</p>
            </div>

            {/* Section Content */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Study Techniques */}
                <div className="card bg-base-100 border-l-6 border-[#422ad5] shadow-sm p-6 text-[#082a5e]">
                    <h3 className="text-xl font-semibold mb-6 flex gap-2 items-center"><Book></Book> Study Techniques</h3>

                    <div className="space-y-4">
                        {/* Item */}
                        <div className="flex items-start gap-4">
                            <div className="text-primary text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Active Recall</h4>
                                <p className="text-sm text-gray-500">Test yourself instead of rereading notes.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-primary text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Spaced Repetition</h4>
                                <p className="text-sm text-gray-500">Review information over time intervals.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-primary text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Take Notes</h4>
                                <p className="text-sm text-gray-500">Write summaries to improve retention.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Time Management */}
                <div className="card bg-base-100 border-l-6 border-[#422ad5] shadow-sm p-6 text-[#082a5e]">
                    <h3 className="text-xl font-semibold mb-6 flex gap-2 items-center"><Clock></Clock> Time Management</h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="text-orange-400 text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Pomodoro Technique</h4>
                                <p className="text-sm text-gray-500">Work 25 mins, break 5 mins.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-orange-400 text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Plan Your Day</h4>
                                <p className="text-sm text-gray-500">Set clear daily goals.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-orange-400 text-xl">✔</div>
                            <div>
                                <h4 className="font-semibold">Avoid Distractions</h4>
                                <p className="text-sm text-gray-500">Stay focused and minimize interruptions.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningTips;