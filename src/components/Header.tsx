import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}
export const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        {
            name: "About",
            href: "#about",
        },
        {
            name: "Services",
            href: "#services",
        },
        {
            name: "Partners",
            href: "#partners",
        },
        {
            name: "Trainings",
            href: "#trainings",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];
    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <span
                        className={`custom-font text-[2rem] ${
                            theme === "dark" ? "text-white" : "text-secondary"
                        }`}
                    >
                        Brndng
                        <span className="text-primary">.</span>
                    </span>
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-700" />
                        )}
                    </button>
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-700" />
                        )}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md text-gray-700 dark:text-white"
                        aria-label="Open menu"
                    >
                        {mobileMenuOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-2 text-secondary dark:text-white hover:text-primary dark:hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
