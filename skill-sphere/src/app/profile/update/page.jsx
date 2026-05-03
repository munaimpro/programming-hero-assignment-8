'use client'
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ProfilePage = () => {

    // Update profile
    const handleProfileUpdate = async (data) => {
        const { name, photo } = data;
    
        const { data: res, error } = await authClient.updateUser({
            image: photo,
            name: name
        })
    
        console.log(res, error)
    
        if (error) {
            toast.error(error.message);
        }

        if (res) {
            toast.success("Profile updated successfully");
        }
    }
    
    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10 mt-12 px-5 lg:px-0'>
            <div className='p-10 rounded-xl border-2 border-base-300 lg:w-3xl w-full'>
                <h3 className='font-bold text-3xl text-center mb-6 text-[#082a5e]'>Update your details</h3>

                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleProfileUpdate)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text w-full" className="input w-full" placeholder="Type name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input w-full" placeholder="Type photo url" {...register("photo", { required: "Photo URL is required" })} />
                        {errors.photo && <span className="text-red-600">{errors.photo.message}</span>}
                    </fieldset>

                    <button className='btn btn-block btn-primary shadow-none'>Update Information</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;