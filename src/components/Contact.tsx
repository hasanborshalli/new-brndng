import { useEffect, useRef } from "react";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
export const Contact = () => {
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
    const contactInfo = [
        {
            icon: <MapPinIcon className="h-6 w-6 text-primary" />,
            title: "Address",
            details: "Lebanon, Beirut",
            link: "",
        },
        {
            icon: <PhoneIcon className="h-6 w-6 text-primary" />,
            title: "Phone",
            details: "(+961) 76 679 623",
            link: "https://wa.me/96176679623",
        },
        {
            icon: <MailIcon className="h-6 w-6 text-primary" />,
            title: "Email",
            details: "info@brndnglb.com",
            link: "mailto:info@brndnglb.com",
        },
    ];
    return (
        <section
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-800 w-full"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    ref={sectionRef}
                    className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary dark:text-white">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
                        Ready to elevate your brand? Contact us today to discuss
                        how we can help your business grow.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-medium text-secondary dark:text-white">
                                                {item.title}
                                            </h4>
                                            <a
                                                target="_blank"
                                                href={item.link}
                                                className="text-gray-600 dark:text-gray-400"
                                            >
                                                {item.details}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <h4 className="font-medium text-secondary dark:text-white mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/profile.php?id=61554057309500"
                                        className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/brndng_lb/"
                                        className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://wa.me/96176679623"
                                        className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.003 3.2c-7.018 0-12.8 5.782-12.8 12.8 0 2.256.588 4.39 1.702 6.287l-1.781 5.24 5.402-1.755a12.735 12.735 0 0 0 7.477 2.294c7.018 0 12.8-5.782 12.8-12.8s-5.782-12.8-12.8-12.8zm0 23.36a10.545 10.545 0 0 1-5.696-1.66l-.408-.248-3.202 1.042 1.054-3.104-.263-.404A10.571 10.571 0 0 1 5.931 16c0-5.562 4.509-10.069 10.071-10.069 5.563 0 10.071 4.507 10.071 10.069 0 5.563-4.508 10.06-10.071 10.06zm5.789-7.905c-.317-.159-1.87-.924-2.16-1.03-.289-.105-.5-.159-.71.158s-.816 1.03-1 1.243c-.184.21-.368.237-.685.08-.317-.159-1.34-.494-2.552-1.574-.943-.842-1.58-1.879-1.766-2.196-.184-.316-.02-.487.138-.645.142-.142.316-.368.475-.553.157-.184.21-.316.316-.527.106-.21.053-.395-.026-.553-.079-.158-.71-1.711-.974-2.349-.256-.614-.516-.53-.71-.54l-.605-.011a1.168 1.168 0 0 0-.84.395c-.289.317-1.1 1.075-1.1 2.621 0 1.546 1.127 3.037 1.285 3.248.158.21 2.225 3.394 5.39 4.754.753.323 1.34.515 1.798.659.755.24 1.443.206 1.985.125.605-.09 1.87-.762 2.134-1.497.263-.736.263-1.37.184-1.497-.079-.127-.289-.21-.605-.368z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary opacity-10 rounded-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                alt="Office space"
                                className="rounded-lg shadow-lg relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
