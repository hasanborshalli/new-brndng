import { useEffect, useRef } from "react";
export const AboutUs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0"
                        );
                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-10"
                        );
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section
            id="about"
            className="py-20 bg-gray-50 dark:bg-gray-800 w-full"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    ref={sectionRef}
                    className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary dark:text-white">
                        <span className="text-primary">About</span>{" "}
                        <span className="custom-font">Brndng</span>
                        <span className="text-primary custom-font text-[2.3rem]">
                            .
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                <span className="  custom-font text-[1.3rem]">
                                    Brndng
                                    <span className="text-primary">.</span>
                                </span>{" "}
                                is where brands come to life. We’re a creative
                                agency based in Lebanon, dedicated to building
                                bold, authentic, and impactful brand identities
                                that connect with people and drive real
                                growth.Brndnglb is where brands come to life.
                                We’re a creative agency based in Lebanon,
                                dedicated to building bold, authentic, and
                                impactful brand identities that connect with
                                people and drive real growth.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                At{" "}
                                <span className="custom-font text-[1.3rem]">
                                    Brndng
                                    <span className="text-primary">.</span>
                                </span>
                                , we don’t just design logos or build websites —
                                we shape how your audience sees, feels, and
                                remembers your brand across every platform.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Let’s create something unforgettable
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                                    <span className="text-3xl font-bold text-primary">
                                        2+
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                                        Years Experience
                                    </span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                                    <span className="text-3xl font-bold text-primary">
                                        20+
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                                        Projects Completed
                                    </span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                                    <span className="text-3xl font-bold text-primary">
                                        8
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                                        Happy Clients
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary rounded-lg opacity-10"></div>
                            <img
                                src="/about.jpeg"
                                alt="Team working together"
                                className="rounded-lg shadow-xl relative z-10 w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
