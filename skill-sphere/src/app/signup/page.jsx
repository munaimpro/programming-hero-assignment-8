'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignupPage = () => {

    const handleRegisterSubmit = (data) => {
        const { name, email, photo, password } = data;
        console.log(data)
    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-base-200 py-10'>
            <div className='p-10 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-center mb-6 text-[#082a5e]'>Signup your account</h3>
                
                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Type name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Type photo url" {...register("photo", { required: "Photo URL is required" })} />
                        {errors.photo && <span className="text-red-600">{errors.photo.message}</span>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Type email" {...register("email", { required: "Email is required" })} />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type password" {...register("password", { required: "Password is required" })} />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </fieldset>

                    <button className='btn btn-block btn-primary shadow-none'>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;