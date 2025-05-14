import React, { useEffect, useState, useRef } from "react";
export const Partners = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activePartner, setActivePartner] = useState<number | null>(null);
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
    const partners = [
        {
            name: "Lab Master",
            logo: "/labmaster.png",
            website: "https://labmasterlb.com",
        },
        {
            name: "ABCC",
            logo: "/abcc.png",
            website: "/pdf/ABCC.pdf",
        },
        {
            name: "Asrar",
            logo: "/asrar.png",
            website: "/pdf/مؤسسة اسرار التجارية.pdf",
        },
        {
            name: "Annan Sports",
            logo: "/annan.png",
            website: "/pdf/Annan Sports.pdf",
        },
        {
            name: "Sleiman For Agriculture And Commerce",
            logo: "/sleiman.png",
            website: "https://saclb.com",
        },
        {
            name: "Oro Library",
            logo: "/oro.png",
            website: "https://orolibrary.com",
        },
    ];
    return (
        <section
            id="partners"
            className="py-20 bg-gray-50 dark:bg-gray-800 w-full"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    ref={sectionRef}
                    className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary dark:text-white">
                        Partners in{" "}
                        <span className="text-primary">Success</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
                        We've had the privilege of working with amazing clients
                        across various industries. Click on their logos to visit
                        their websites.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                onMouseEnter={() => setActivePartner(index)}
                                onMouseLeave={() => setActivePartner(null)}
                            >
                                <div
                                    className={`
                  bg-white dark:bg-gray-900 rounded-lg p-6 flex items-center justify-center h-32
                  transition-all duration-300
                  ${
                      activePartner === index
                          ? "shadow-xl scale-105"
                          : "shadow-md hover:shadow-lg"
                  }
                `}
                                >
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="max-w-full max-h-full transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                </div>
                                <p
                                    className={`
                  text-center mt-2 text-sm text-gray-600 dark:text-gray-400
                  transition-all duration-300
                  ${activePartner === index ? "text-primary" : ""}
                `}
                                >
                                    {partner.name}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
