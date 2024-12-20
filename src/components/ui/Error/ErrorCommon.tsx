import Link from "next/link";


const ErrorCommon = () => {
    return (
        <div>
            <div className="primary-bg w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider primary-text">
                        500
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-red-500 mt-4">
                        Server Error
                    </p>
                    <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">
                        Whoops, something went wrong on our servers.
                    </p>
                    <Link href={"/"} className="btn primary-btn mt-8 py-2">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorCommon;
