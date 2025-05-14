export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-secondary text-white py-12 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <a
                            href="#"
                            className="text-2xl font-bold text-primary mb-4 inline-block"
                        >
                            <span className="custom-font text-white text-[2rem]">
                                Brndng
                                <span className="text-primary">.</span>
                            </span>
                        </a>
                        <p className="text-gray-400 mb-6">
                            You Dream We Design
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#partners"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#trainings"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Trainings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Social Media Management
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Content Creation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    Branding
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <address className="not-italic text-gray-400">
                            Lebanon, Beirut
                        </address>
                        <br />
                        <a
                            target="_blank"
                            href="mailto:info@brndnglb.com"
                            className="mt-4 text-gray-400 hover:text-primary transition-colors"
                        >
                            info@brndnglb.com
                        </a>
                        <br />
                        <br />
                        <a
                            target="_blank"
                            href="https://wa.me/96176679623"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            (+961) 76 679 623
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} brndng. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
