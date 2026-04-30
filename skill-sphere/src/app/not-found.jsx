import Link from "next/link";

const notFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h1 className='font-bold text-9xl mb-6'>404</h1>
            <h2 className='font-bold text-5xl mb-2'>Error Page</h2>
            <h2 className='font-bold text-5xl'>Sorry! This Page is Not Available!</h2>
            <Link className="mt-10" href={'/'}>
                <button className='btn btn-lg btn-primary shadow-none uppercase'>Go to Home Page</button>
            </Link>
        </div>
    );
};

export default notFoundPage;