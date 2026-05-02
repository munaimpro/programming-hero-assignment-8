const LoadingSpinner = () => {
    return (
        <div className="container mx-auto pt-25">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="flex flex-col gap-4 w-full">
                        <div className="skeleton h-52 w-full bg-gray-200"></div>
                        <div className="skeleton h-4 w-28 bg-gray-200"></div>
                        <div className="skeleton h-4 w-full bg-gray-200"></div>
                        <div className="skeleton h-4 w-full bg-gray-200"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadingSpinner;