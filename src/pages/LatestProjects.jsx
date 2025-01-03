import React from "react";

const LatestProjects = () => {
    const projects = [
        {
            title: "3D Design",
            description:
                "Bring ideas to life with stunning 3D designs that captivate and engage. We create visually immersive experiences that blend creativity with precision.",
            buttonLabel: "See Project",
            image: "assets/lp-1.png",
            alt: "3D Design example image",
        },
        {
            title: "Mobile Apps",
            description:
                "Designing intuitive and high-performing mobile apps that deliver seamless user experiences. We turn ideas into engaging, functional applications tailored to your audience.",
            buttonLabel: "See Project",
            image: "assets/lp-2.png",
            alt: "Mobile apps example image",
        },
        {
            title: "Landing Page",
            description:
                "Make a lasting first impression with a captivating landing page designed to engage, inform, and convert. We craft visually stunning and user-friendly designs.",
            buttonLabel: "See Project",
            image: "assets/lp-3.png",
            alt: "Landing page example image",
        },
        {
            title: "Presentation",
            description:
                "Transform ideas into robust digital solutions with our software development services. We design, build, and optimize custom software tailored to meet your needs.",
            buttonLabel: "See Project",
            image: "assets/lp-4.png",
            alt: "Presentation example image",
        },
    ];

    return (
        <section className="container px-6 py-16 mx-auto text-white">
            <div className="">
                <h2 className="text-3xl md:text-[67px] leading-[88px] font-medium">
                    Our Latest Projects
                </h2>
                <p className="max-w-6xl mt-2 text-base plus-jakarta-regular">
                    Discover our latest projects, where creativity meets functionality. Each showcases our dedication to delivering innovative and impactful digital solutions tailored to client needs.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} className="w-full h-full">
                        <img
                            src={project.image}
                            alt={project.alt}
                            className="object-cover shadow-lg rounded-3xl"
                        />
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[38px] leading-[48px] font-medium">
                                    {project.title}
                                </h3>
                                <button
                                    className="px-4 py-2 border-2 border-[#AB4EFF] text-[#AB4EFF] rounded-full font-medium hover:bg-[#AB4EFF] hover:text-white focus:ring-4 focus:ring-[#AB4EFF]/50 focus:outline-none transition-all"
                                    aria-label={`View details about ${project.title}`}
                                >
                                    {project.buttonLabel}
                                </button>
                            </div>
                            <p className="mt-4 text-base">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestProjects;