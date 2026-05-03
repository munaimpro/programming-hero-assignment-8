'use client'
import { authClient } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginSubmit = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: callbackUrl,
        });

        if (error) {
            toast.error(error.message);
        }

        if (res) {
            toast.success("Login Successfull");
        }
    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackUrl,
        });

        // console.log(data);
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10 mt-12 px-5 lg:px-0'>
            <div className='p-10 rounded-xl border-2 border-base-300'>
                <h3 className='font-bold text-3xl text-center mb-6 text-[#082a5e]'>Login your account</h3>

                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginSubmit)}>
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

                    <button className='btn btn-block btn-primary shadow-none'>Sign In</button>

                </form>

                <button onClick={() => handleGoogleSignin()} className='btn btn-block btn-outline btn-primary shadow-none mt-4'>
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Sign In with Google
                </button>

                <p className='py-6 text-[16px] text-[#39557e] mt-6'>
                    Don&apos;t have an account?
                    <Link className="text-[#082a5e] font-bold" href={'/signup'}> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;