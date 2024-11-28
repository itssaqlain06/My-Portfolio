import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    // Toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveItem(menu);
    };


    return (
        <nav className="container mx-auto">
            <div className=" relative px-4 py-4 flex justify-between items-center ">
                <a className="text-3xl font-bold leading-none" href="#">
                    <span className='text-white'>ZAI</span><span className='text-green'>NAB</span>
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-white hover:text-green transition duration-300 p-3" onClick={toggleMenu}>
                        <FaBars className="block h-6 w-6 text-current" />
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    {["Home", "About", "Services +", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                className={`text-sm text-white transition duration-300 hover:text-green px-4 py-2 ${activeItem === item
                                    ? "border-b-4 border-green text-green"
                                    : "border-b-4 border-transparent hover:border-green"
                                    }`}
                                href="#"
                                onClick={() => handleMenuClick(item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green hover:bg-white hover:text-green text-sm text-white font-bold rounded transition duration-300" href="#">Download CV</a>
            </div>
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}>
                <div className="navbar-backdrop fixed inset-0 bg-white opacity-25" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-main border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <span className='text-white'>ZAI</span><span className='text-green'>NAB</span>
                        </a>
                        <button className="navbar-close" onClick={toggleMenu}>
                            <svg className="h-6 w-6 text-white cursor-pointer hover:text-green transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:bg-green hover:text-white transition duration-300 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:bg-green hover:text-white transition duration-300 rounded" href="#">About</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:bg-green hover:text-white transition duration-300 rounded" href="#">services +</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-white hover:bg-green hover:text-white transition duration-300 rounded" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </nav>
    )
}
