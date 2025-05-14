import { useEffect, useRef } from "react";
import "./styles.css";
export const Hero = () => {
    const textRef = useRef<HTMLDivElement>(null);
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
        if (textRef.current) {
            observer.observe(textRef.current);
        }
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    return (
        <section className="relative w-full bg-white dark:bg-gray-900 min-h-screen flex items-center">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-5 -top-5 w-72 h-72 bg-primary rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute -left-10 bottom-20 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-20"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div
                    ref={textRef}
                    className="max-w-3xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary dark:text-white">
                        <span className="custom-font text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[3.5rem]">
                            Brndng
                        </span>
                        <span className="text-primary">. </span>Skips The Vowels
                        But Never The{" "}
                        <span className="text-primary">Impact</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center">
                        <span className="  custom-font text-[1.3rem]">
                            Brndng
                            <span className="text-primary">.</span>
                        </span>{" "}
                        is a creative agency specializing in branding, web
                        development, content creation, and social media
                        management. We help businesses build strong brand
                        identities and grow their online presence. With a focus
                        on quality and innovation,{" "}
                        <span className="  custom-font text-[1.3rem]">
                            Brndng
                            <span className="text-primary">.</span>
                        </span>{" "}
                        delivers customized digital solutions that drive
                        results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#services"
                            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Our Services
                        </a>
                        <a
                            target="_blank"
                            href="https://wa.me/96176679623"
                            className="px-8 py-3 bg-transparent border-2 border-primary text-primary dark:text-primary rounded-md hover:bg-primary hover:bg-opacity-10 transition-all"
                        >
                            Book Your Free Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
