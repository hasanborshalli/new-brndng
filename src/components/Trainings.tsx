import { useEffect, useRef } from "react";
import { FileIcon, DownloadIcon } from "lucide-react";
export const Trainings = () => {
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
    const trainings = [
        {
            title: "The essential guide to starting a business, creating a logo, and building a brand",
            description: "",
            downloadUrl:
                "/pdf/The Essential Guide to Starting a Business, Creating a Logo, and Building a Brand by @brndng_lb .pdf.pdf",
            thumbnail: "/ebook.png",
        },
        {
            title: "Your ultimate guide to starting a successful e-commerce business, presented by Brndng.",
            description: "",
            downloadUrl:
                "/pdf/دليلك الشامل لبدء مشروع تجارة إلكترونية ناجحًمقدم من brndng.pdf",
            thumbnail: "/ultimate.png",
        },
    ];
    return (
        <section
            id="trainings"
            className="py-20 bg-white dark:bg-gray-900 w-full"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    ref={sectionRef}
                    className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary dark:text-white">
                        Training <span className="text-primary">Guides</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-start text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
                        Learn with Us & Grow –{" "}
                        <span className="custom-font text-secondary text-[1.3rem]">
                            Brndng
                            <span className="text-primary">.</span>
                        </span>
                        <br />
                        <br />
                        At{"  "}
                        <span className="custom-font text-secondary text-[1.3rem]">
                            Brndng
                            <span className="text-primary">.</span>
                        </span>
                        , we believe that growth starts with knowledge. That’s
                        why we’re more than just a web development and social
                        media agency — we’re your partners in learning. Whether
                        you’re launching your first business or scaling your
                        brand online, we’re here to guide you with real-world
                        insights, creative strategies, and practical tools. Join
                        our community of ambitious entrepreneurs and creatives,
                        and let’s grow together — smarter, stronger, and faster.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trainings.map((training, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={training.thumbnail}
                                        alt={training.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={training.downloadUrl}
                                            className="bg-white p-3 rounded-full"
                                            download
                                        >
                                            <DownloadIcon className="h-6 w-6 text-primary" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2 text-secondary dark:text-white group-hover:text-primary transition-colors">
                                        {training.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                        {training.description}
                                    </p>
                                    <a
                                        href={training.downloadUrl}
                                        className="flex items-center text-primary font-medium"
                                        download
                                    >
                                        <FileIcon className="h-4 w-4 mr-2" />
                                        <span>Download PDF</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
