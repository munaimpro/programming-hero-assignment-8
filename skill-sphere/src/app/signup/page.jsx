'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const SignupPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegisterSubmit = async (data) => {
        const { name, email, photo, password } = data;
        console.log(data)

        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error)

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Signup successfull");
        }
    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        // console.log(data);
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10'>
            <div className='p-10 rounded-xl border-2 border-base-300 bg-white'>
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

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={showPassword ? "text" : "password"} className="input" placeholder="Type password" {...register("password", { required: "Password is required" })} />
                        <span className="absolute right-2 top-3" onClick={() => { setShowPassword(!showPassword) }}>
                            {showPassword ? (
                                <Eye></Eye>
                            ) : (
                                <EyeClosed></EyeClosed>
                            )
                            }
                        </span>
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </fieldset>

                    <button className='btn btn-block btn-primary shadow-none'>Signup</button>
                </form>

                <button onClick={() => handleGoogleSignin()} className='btn btn-block btn-outline btn-primary shadow-none mt-4'>
                    {/* <Google/> */}
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SignupPage;