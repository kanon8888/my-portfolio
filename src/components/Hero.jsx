import React from "react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-gray-100 bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-16"
        >
            {/* Left: Text */}
            <div className="md:flex-1 space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Hi, I'm <span className="text-yellow-400">Rakib Hasan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700">
                    Full Stack Web Developer
                </p>
                <p className="text-gray-400 max-w-xl">
                    My expertise lies in the MERN stack, providing seamless end-to-end solutions, from MongoDB database management to building backend APIs with Express and Node.js.

                </p>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                >
                    Download Resume
                </a>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-xl opacity-70"></div>
                    <img
                        src="https://i.ibb.co.com/V0Gx1zV1/aifaceswap-7f079e7c07ed17bde32b5f6bf85f6c14.jpg"
                        alt="Rakib Hasan"
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

