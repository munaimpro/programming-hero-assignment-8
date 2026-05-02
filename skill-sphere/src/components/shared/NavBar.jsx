'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import userAvater from '@/assets/avater.webp';
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const NavBar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const links = <>
        <li>
            <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink href={'/course'}>Courses</NavLink>
        </li>
        <li>
            <NavLink href={'/profile'}>My Profile</NavLink>
        </li>
    </>

    return (
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4 }} className="navbar bg-base-100 shadow-sm">
            <div className="container mx-auto flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className="text-3xl font-bold text-[#082a5e]" href={'/'}>SkillSphere</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        isPending ? (
                            <span className="loading loading-dots loading-lg"></span>
                        ) : user ? (
                            <>
                                <Image className="rounded-full" src={user?.image || userAvater} alt={user?.name || "User"} width={40} height={40} />
                                
                                    <Link onClick={async () => await authClient.signOut() } className="btn btn-primary shadow-none" href={'/login'}>Logout</Link>
                            </>
                        ): (
                            <>
                                <Link className="btn btn-outline btn-primary shadow-none" href={'/login'}>Login</Link>
                                <Link className="btn btn-primary shadow-none" href={'/signup'}>Signup</Link>
                            </>  
                        )
                    }
                    
                </div>
            </div>
        </motion.div>
    );
};

export default NavBar;