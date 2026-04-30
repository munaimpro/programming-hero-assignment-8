import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#082a5e]'>
            <div className="container mx-auto">
                <footer className="footer flex flex-col lg:flex-row justify-between text-white px-10 py-30">
                    <aside className='w-3xs'>
                        <h2 className='text-3xl mb-3 font-bold'>SkillSphere</h2>
                        <p className='opacity-80 mb-5 leading-7'>When an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
                        <h3 className='text-md mb-3 font-bold'>463 7th Ave, NY 10018, USA</h3>
                        <h3 className='text-md mb-3 font-bold'>+123 88 9900 456</h3>
                    </aside>
                    <nav>
                        <h6 className="capitalize font-bold text-[24px] text-white mb-4">Resources</h6>
                        <a className="link link-hover opacity-80">Conditions</a>
                        <a className="link link-hover opacity-80">Privacy Policy</a>
                    </nav>
                    <nav>
                        <h6 className="capitalize font-bold text-[24px] text-white mb-4">Social Links</h6>
                        <div className='flex gap-4'>
                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path>
                                </svg>
                            </a>
                        </div>
                    </nav>
                </footer>

                <div className='border-t border-[#0b4293] mx-10 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white opacity-60'>
                    <aside>
                        <p>© {new Date().getFullYear()} SkillSphere. All rights reserved</p>
                    </aside>
                    <nav className="flex gap-6">
                        <a className="link link-hover text-sm">Privacy Policy</a>
                        <a className="link link-hover text-sm">Terms of Service</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;