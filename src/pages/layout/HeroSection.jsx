import React from 'react';

export default function HeroSection() {
    return (
        <section className="container mx-auto">
            <div className=" flex px-5 py-10 md:flex-row-reverse flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="poppins-medium text-3xl	leading-[48px] text-green">
                        Hello, I am
                    </div>
                    <h1 className="text-[103px] font-semibold text-white">
                        Zainab
                    </h1>
                    <p className="leading-relaxed text-4xl poppins-medium text-white">
                        Professional UI_UX Designer
                    </p>
                    <p className="leading-relaxed text-lg poppins-regular text-light-grey my-5">
                        Within this portfolio, you'll find a curated
                        <br />
                        collection of my best work
                    </p>
                    <div className="flex justify-center items-center gap-3 group">
                        <p className="inline-flex text-white hover:text-green transition duration cursor-pointer text-xl poppins-medium">
                            View Portfolio
                        </p>
                        <span className="relative">
                            <img
                                src="/assets/arrow_right_alt.png"
                                alt="Right Arrow"
                                className="cursor-pointer transition-all duration-500 transform group-hover:translate-x-2"
                            />
                        </span>
                    </div>
                </div>
                <div className="">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/695x745" />
                </div>
            </div>
        </section>
    );
}
