import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveItem(menu);
    };

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

    return (
        <nav className="container mx-auto">
            <div className="relative px-4 py-4 flex justify-between items-center">
                <a className="" href="#">
                    <span className='surfer-regular text-[40px] leading-8 text-gradient'>Pixels</span>
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-white hover:text-pink focus:text-pink transition duration-300 p-3" onClick={toggleMenu}>
                        <FaBars className="block h-6 w-6 text-current" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-8 gap-4">
                    <ul className="flex space-x-8">
                        {["Home", "About Us", "Projects", "Portfolio"].map((item) => (
                            <li key={item}>
                                <a
                                    className={`text-xl font-medium transition duration-300 hover:text-pink px-4 py-2 ${activeItem === item
                                        ? "text-pink underline underline-offset-[8px] decoration-pink"
                                        : "text-white"
                                        }`}
                                    href="#"
                                    onClick={() => handleMenuClick(item)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        className="py-2 px-6 text-white font-bold rounded hover:opacity-80 hover-gradient text-xl z-10"
                        href="#"
                    >
                        Contact us
                    </a>
                </div>
            </div>
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}>
                <div className="navbar-backdrop fixed inset-0 bg-white opacity-25" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-main border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto" href="#">
                            <span className='surfer-regular text-[40px] leading-8 text-gradient'>Pixels</span>
                        </a>
                        <button className="navbar-close" onClick={toggleMenu}>
                            <svg className="h-6 w-6 text-white cursor-pointer hover:text-pink focus:text-pink transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:gradient-bg focus:opacity-80 transition duration-300 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:gradient-bg focus:opacity-80 transition duration-300 rounded" href="#">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:gradient-bg focus:opacity-80 transition duration-300 rounded" href="#">Projects</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:gradient-bg focus:opacity-80 transition duration-300 rounded" href="#">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <a
                            className="py-3 text-center px-6 gradient-bg text-white font-bold rounded focus:opacity-80 transition duration-300 block"
                            href="#"
                        >
                            Contact us
                        </a>
                    </div>
                </nav>
            </div>
        </nav>
    )
}
