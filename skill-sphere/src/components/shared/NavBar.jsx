import Link from "next/link";

const links = <>
    <li>
        <Link className="text-[#082a5e] text-[16px] font-medium" href={'/'}>Home</Link>
    </li>
    <li>
        <Link className="text-[#082a5e] text-[16px] font-medium" href={'/course'}>Courses</Link>
    </li>
    <li>
        <Link className="text-[#082a5e] text-[16px] font-medium" href={'/profile'}>My Profile</Link>
    </li>
</>

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                    <Link className="btn btn-outline btn-primary shadow-none" href={'/login'}>Login</Link>
                    <Link className="btn btn-primary shadow-none" href={'/signup'}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;