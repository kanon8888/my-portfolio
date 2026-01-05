import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Logo / Name */}
                <a href="#home" className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:scale-105 transition-transform">
                    Rakin Hasan
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#hero" className="hover:text-yellow-400">
                            Hero
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-yellow-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-yellow-400">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-400">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-gray-800 text-white space-y-2 px-4 pb-4">
                    <li>
                        <a href="#hero" className="block py-2 hover:text-yellow-400">
                            Hero
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="block py-2 hover:text-yellow-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="block py-2 hover:text-yellow-400">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block py-2 hover:text-yellow-400">
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
