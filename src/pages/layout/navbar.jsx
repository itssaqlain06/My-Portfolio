import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveItem(menu);
        setMenuOpen(false);
    };

    return (
        <nav className="container mx-auto">
            <div className="relative px-4 py-8 flex justify-between items-center">
                <a className="text-3xl font-bold leading-none flex group" href="#">
                    <span className="text-white group-hover:text-green transition duration-300 font-semibold">Pi</span>
                    <span className="text-green group-hover:text-white transition duration-300">xels</span>
                </a>

                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-white hover:text-green transition duration-300 p-3"
                        onClick={toggleMenu}
                    >
                        <FaBars className="block h-6 w-6 text-current" />
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 border border-[#45A83E] rounded-full p-1 whitespace-nowrap">
                    {["Home", "About", "Portfolio", "Services", "Let's Talk"].map((item) => (
                        <li key={item} className="flex">
                            <a
                                className={`transition duration-300 px-4 py-2 text-base poppins-medium ${activeItem === item
                                    ? "text-green border-green font-bold"
                                    : "text-white border-transparent hover:text-green hover:border-green"
                                    } whitespace-nowrap`}
                                href="#"
                                onClick={() => handleMenuClick(item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>


                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green hover:bg-white hover:text-green text-white rounded transition duration-300 text-base poppins-medium" href="#">
                    Download CV
                </a>
            </div>
            <div
                className={`fixed inset-0 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:hidden z-50`}
            >
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={toggleMenu}
                ></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-main border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none group" href="#">
                            <span className="text-white group-hover:text-green transition duration-300">
                                Pi
                            </span>
                            <span className="text-green group-hover:text-white transition duration-300">
                                xels
                            </span>
                        </a>
                        <button className="navbar-close" onClick={toggleMenu}>
                            <svg
                                className="h-6 w-6 text-white cursor-pointer hover:text-green transition duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            {["Home", "About", "Portfolio", "Services", "Let's Talk"].map((item) => (
                                <li className="mb-1" key={item}>
                                    <a
                                        className={`block p-4 text-base poppins-medium rounded transition duration-300 ${activeItem === item
                                            ? "bg-green text-white"
                                            : "text-white hover:bg-green hover:text-white"
                                            }`}
                                        href="#"
                                        onClick={() => handleMenuClick(item)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a
                        className="absolute bottom-6 left-6 py-2 px-6 bg-green hover:bg-white hover:text-green text-white rounded transition duration-300 text-base poppins-medium"
                        href="#"
                    >
                        Download CV
                    </a>
                </nav>
            </div>
        </nav>
    );
}
