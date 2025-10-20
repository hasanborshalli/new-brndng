import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Partners } from "./components/Partners";
import { Trainings } from "./components/Trainings";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects"; // <- import it
import { useEffect, useState } from "react";
import { GamePage } from "./components/GamePage";
import { RegisterPage } from "./components/RegisterPage";
import { TermsAndConditions } from "./components/TermsAndConditions";

export function App() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Router>
            <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <AboutUs />
                                <Services />
                                <Partners />
                                <Trainings />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/startGame" element={<RegisterPage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route
                        path="/termsandconditions"
                        element={<TermsAndConditions />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
