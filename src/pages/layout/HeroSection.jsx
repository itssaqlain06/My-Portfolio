import React from 'react';

const HeroSection = () => {
    return (
        <div className="border-t-[1px] border-[#525252] relative">
            <img className="absolute top-[-200px] right-[-359px]" src="assets/gradient-1.png" alt="" />
            <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between text-white gap-4">
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 w-full h-full bg-blue-500 rounded-xl transform -rotate-6 scale-105"></div>
                        <img
                            src="assets/hero-section-image.png"
                            alt="Placeholder"
                            className="relative w-[602px] h-[636px] rounded-lg z-10"
                        />
                        <img className="absolute top-[120px]" src="assets/gradient-2.png" alt="" />

                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <p className="text-lg tracking-[4px] leading-relaxed">
                        WE ARE
                    </p>
                    <h1 className="text-[90px] leading-[96px] mb-2">
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
            <div className="container mx-auto py-6 px-6 md:px-12 flex flex-wrap justify-center gap-8">
                <div className="border border-1 rounded-xl text-white inline-flex items-center justify-center gap-4 p-4 h-28">
                    <div>
                        <h2 className="text-4xl font-bold">1.5K</h2>
                        <p className="text-sm mt-2 text-gray-300">Happy Clients</p>
                    </div>
                    <div className="flex -space-x-2">
                        <img
                            src="assets/person-1.png"
                            alt="Client 1"
                        />
                        <img
                            src="assets/person-2.png"
                            alt="Client 2"
                        />
                        <img
                            src="assets/person-3.png"
                            alt="Client 3"
                        />
                    </div>
                </div>

                <div className="border border-1 rounded-xl p-6 text-white inline-flex flex-col md:flex-row justify-between items-center gap-8 h-28">
                    <div className="flex items-center gap-2">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <img src="assets/circle-guard.png" alt="Safety Icon" />
                        </div>
                        <div>
                            <span className="text-[28px] leading-[40px] font-bold text-white block">100%</span>
                            <p className="text-[16px] leading-[25px] text-gray-300 block whitespace-nowrap">
                                Safety Privacy
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <img src="assets/circle-star.png" alt="Rating Icon" />
                        </div>
                        <div>
                            <span className="text-[28px] leading-[40px] font-bold text-white block">98%</span>
                            <p className="text-[16px] leading-[25px] text-gray-300 block whitespace-nowrap">
                                Event Rating
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border border-1 rounded-xl p-4 text-white inline-flex items-center justify-center gap-4 h-28">
                    <div>
                        <h2 className="text-[38px] leading-[40px] font-bold">990+</h2>
                        <p className="mt-2 text-gray-300">Projects Completed</p>
                    </div>
                    <div className="flex -space-x-2">
                        <img
                            src="assets/person-1.png"
                            alt="Client 1"
                        />
                        <img
                            src="assets/person-2.png"
                            alt="Client 2"
                        />
                        <img
                            src="assets/person-3.png"
                            alt="Client 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
