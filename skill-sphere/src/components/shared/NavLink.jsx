
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    
    const pathName = usePathname();
    const isActive = pathName === href;

    return <Link className={`${isActive ? "border-b-2 hover:bg-base-100 rounded-none text-[#082a5e] text-[16px] font-medium" : "rounded-none hover:bg-base-100 text-[#082a5e] text-[16px] font-medium"}`} href={href}>{children}</Link>;
};

export default NavLink;