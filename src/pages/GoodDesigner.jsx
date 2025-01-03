import React from "react";

export default function GoodDesigner() {
    return (
        <section className="px-6 py-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-[67px] leading-[88px] font-medium">
                    Good Product Born from Good Designer
                </h1>
                <div className="mt-12">
                    <h2 className="text-[38px] leading-[48px] font-medium"><img src="assets/zero-one.png" alt="Zero one image" className="inline" style={{ padding: "0 10px 5px 0px" }} />Design Visual</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 py-3.5 bg-[#403E46] rounded-xl">
                        {["Landing Page", "Web Design", "Presentation", "Email Signature"].map(
                            (item, index) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 text-[28px] leading-[40px] font-medium border-r border-white last:border-r-0"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div>

                    <p className="mt-6 px-[100px] plus-jakarta-regular text-base">
                        Whether it’s a sleek mobile app, a responsive website, or a complex web application, we bring creativity and strategy together to build designs that inspire and convert. Let's create something extraordinary, together.
                    </p>
                </div>
                <div className="mt-16">
                    <h2 className="text-[38px] leading-[48px] font-medium"><img src="assets/zero-two.png" alt="Zero two image" className="inline" style={{ padding: "0 10px 5px 0px" }} />Development</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 py-3.5 bg-[#403E46] rounded-xl">
                        {["Website Development", "Web Flow", "Elementor", "Android Apps"].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 text-[28px] leading-[40px] font-medium border-r border-white last:border-r-0"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div>
                    <p className="mt-6 px-[100px] plus-jakarta-regular text-base">
                        We offer a comprehensive range of services to bring your digital vision to life. From custom web development tailored to your business needs to creating dynamic, visually appealing websites using platforms like Webflow and Elementor, we ensure your online presence stands out
                    </p>
                </div>
            </div>
        </section>
    );
}
