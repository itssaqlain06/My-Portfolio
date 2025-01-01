import React from "react";

export default function AboutUs() {
    return (
        <div className="py-16 text-white bg-[#292929] rounded-b-[130px]">
            <div className="container px-6 mx-auto md:px-12 lg:px-20">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-medium md:text-[67px] leading-[88px]">About Us</h2>
                    <p className="mt-4 text-gray-400 plus-jakarta-regular">
                        we are passionate about designing user-centric interfaces that not only look exceptional but also deliver seamless functionality. <br />
                        With a deep understanding of design principles and a commitment to innovation, we help businesses transform ideas into engaging <br /> digital experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                    <div className="p-6 text-base bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-4xl font-bold">15+</h3>
                        <p className="mt-2 text-gray-400">Years Experience</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-4xl font-bold">2K+</h3>
                        <p className="mt-2 text-gray-400">World Clients</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-4xl font-bold">990+</h3>
                        <p className="mt-2 text-gray-400">Project Done</p>
                    </div>
                </div>
                <div className="mt-12">
                    <img
                        src="assets/about-us.png"
                        alt="Team"
                        className="object-cover w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
