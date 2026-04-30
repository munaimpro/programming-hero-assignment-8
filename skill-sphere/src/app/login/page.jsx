'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const handleLoginSubmit = async (data) => {
        const { email, password } = data;

        const { data:res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Login Successfull");
        }
    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-base-200 py-10'>
            <div className='p-10 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-center mb-6 text-[#082a5e]'>Login your account</h3>
                
                <div className='divider'></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginSubmit)}>
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

                    <button className='btn btn-block btn-primary shadow-none'>Login</button>
                </form>

                <p className='py-6 text-[16px] text-[#39557e] mt-6'>
                    Don&apos;t have an account?
                    <Link className="text-[#082a5e] font-bold" href={'/signup'}> Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;