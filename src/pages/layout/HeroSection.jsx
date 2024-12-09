import React from 'react';
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="container mx-auto">
            <div className="flex px-5 py-10 md:flex-row flex-col items-center">
                {/* Text Content */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-[64px] font-semibold text-white">
                        <span className='font-semibold'>Where</span> creativity meets <span className='font-semibold'>functionality</span>
                    </h1>
                    <p className="leading-relaxed text-2xl my-8 text-white w-[72%]">
                        A passionate UI Designer dedicated to crafting visually stunning and user-friendly interfaces. With a focus on simplicity and functionality, I create designs that connect with users and elevate digital experiences.
                    </p>

                    <div className="flex justify-center items-center gap-3 ">
                        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green hover:bg-white hover:text-green text-white rounded-full transition duration-300 text-base poppins-medium" href="#">
                            What We Do
                            <img src="/assets/circle-arrow.png" alt="Circle Arrow Image" className='inline ml-3' />
                        </a>
                        <div class="flex items-center justify-center">
                            <div class="flex items-center justify-center bg-[#14452C] h-[70px] w-[70px] rounded-full hover:bg-white transition duration-300 group">
                                <div class="flex items-center justify-center bg-gray-300 h-[45px] w-[45px] rounded-full hover:bg-[#14452C] transition duration-300">
                                    <span class="relative">
                                        <FaArrowDown class="cursor-pointer transition-all duration-500 transform group-hover:translate-y-2 group-hover:text-white hover:translate-y-2 text-[#14452C]" />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Image Section */}
                <div className="md:w-2/5">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/495x593"
                    />
                </div>
            </div>
        </section>
    );
}
