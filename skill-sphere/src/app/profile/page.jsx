'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import userAvater from '@/assets/avater.webp';
import Link from 'next/link';

const ProfilePage = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10 mt-12 px-5 lg:px-0'>
            <div className='p-10 rounded-xl border-2 border-base-300 lg:w-3xl w-full'>
                <Image className="rounded-full mb-6 mx-auto w-25 h-25" src={user?.image || userAvater} alt={user?.name || "User"} width={40} height={40} />

                <h3 className='font-bold text-xl text-center mb-3 text-[#082a5e]'>{user?.name}</h3>

                <p className='text-[#39557e] mb-3 text-center'>{user?.email}</p>

                <Link href={'/profile/update'}>
                    <button className='btn btn-block btn-primary shadow-none'>Update Profile</button>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;