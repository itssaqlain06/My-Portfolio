import React from "react";

export default function AboutUs() {
    return (
        <div className="py-14 mb-14 text-white bg-[#292929] rounded-b-[140px]">
            <div className="container px-6 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="font-medium text-[67px] leading-[88px]">About Us</h2>
                    <p className="mt-4 plus-jakarta-regular">
                        we are passionate about designing user-centric interfaces that not only look exceptional but also deliver seamless functionality.</p>
                    <p> With a deep understanding of design principles and a commitment to innovation, we help businesses transform ideas into engaging</p> <p>digital experiences.</p>
                </div>
                <div className="flex justify-center text-center">
                    <div className="flex justify-evenly align-items-center border border-[#8F8F8F] rounded-2xl  lg:gap-10 xl:gap-36">
                        <div className="p-6 min-w-[215px]">
                            <h3 className="text-[50px] leading-[64px] font-medium">15+</h3>
                            <p className="text-xl">Years Experience</p>
                        </div>
                        <div className="p-6 min-w-[215px]">
                            <h3 className="text-[50px] leading-[64px] font-medium">2K+</h3>
                            <p className="text-xl">World Clients</p>
                        </div>
                        <div className="p-6 min-w-[215px]">
                            <h3 className="text-[50px] leading-[64px] font-medium">990+</h3>
                            <p className="text-xl">Project Done</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <img
                        src="assets/about-us.png"
                        alt="Team"
                        className="object-cover w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
