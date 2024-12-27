import React from 'react';

const HeroSection = () => {
    return (
        <div className="border-t-[1px] border-[#525252]">
            <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between text-white gap-4">
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 w-full h-full bg-blue-500 rounded-xl transform -rotate-6 scale-105"></div>
                        <img
                            src="assets/hero-section-image.png"
                            alt="Placeholder"
                            className="relative w-[602px] h-[636px] rounded-lg"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <p className="text-lg tracking-[4px] leading-relaxed">
                        WE ARE
                    </p>
                    <h1 className="text-[90px] leading-[96px] mb-6">
                        <span>Creative</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue">
                            UI/UX Design
                        </span>
                        <br />
                        <span>Professionals</span>
                    </h1>
                    <p className="text-md mb-5 leading-[25px] plus-jakarta-regular">
                        Crafting seamless and visually stunning digital experiences tailored to your brand's unique identity. Elevate your presence with our expert UI/UX design solutions.
                    </p>
                    <button className="hover:bg-gradient-to-r from-pink to-blue gradient-button text-white px-8 py-3 rounded-full text-xl shadow-md mt-4 plus-jakarta-regular">
                        View Portfolio
                    </button>
                </div>
            </div>
            <div className="container mx-auto py-6 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h2 className="text-4xl font-bold">1.5K</h2>
                    <p className="mt-2 text-gray-300">Happy Clients</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">100%</h2>
                    <p className="mt-2 text-gray-300">Safety Privacy</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">990+</h2>
                    <p className="mt-2 text-gray-300">Projects Completed</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
