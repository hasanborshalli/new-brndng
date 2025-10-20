import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        acceptedTerms: false,
    });

    const [errors, setErrors] = useState({
        fullName: "",
        phone: "",
        email: "",
        acceptedTerms: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = (): boolean => {
        let valid = true;
        const newErrors = {
            fullName: "",
            phone: "",
            email: "",
            acceptedTerms: "",
        };

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!/^\+?[0-9]{8,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                formData.email
            )
        ) {
            newErrors.email = "Enter a valid email address";
            valid = false;
        }

        if (!formData.acceptedTerms) {
            newErrors.acceptedTerms =
                "You must accept the terms and conditions";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        if (validate()) {
            try {
                await fetch("https://formspree.io/f/xldpvvzo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                alert("✅ Registration submitted!");
                localStorage.setItem("playerInfo", JSON.stringify(formData));
                navigate("/game");
            } catch (error) {
                console.error("Error submitting:", error);
                alert("❌ Failed to submit. Try again later.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md transition-colors duration-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    🎮 Register to Play
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 dark:text-gray-200 mb-1 font-medium"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 dark:text-gray-200 mb-1 font-medium"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="+961 70 123 456"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-gray-200 mb-1 font-medium"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start space-x-2 mt-4">
                        <input
                            type="checkbox"
                            id="acceptedTerms"
                            name="acceptedTerms"
                            checked={formData.acceptedTerms}
                            onChange={handleChange}
                            className="mt-1 accent-orange-500"
                        />
                        <label
                            htmlFor="acceptedTerms"
                            className="text-gray-700 dark:text-gray-200 text-sm"
                        >
                            I agree to the{" "}
                            <a
                                href="/termsandconditions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                    {errors.acceptedTerms && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.acceptedTerms}
                        </p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-4 transition-all duration-200"
                    >
                        Start Game ⭐
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                        We respect your privacy — your information will not be
                        shared or used for any purpose other than this game.
                    </p>
                </form>
            </div>
        </div>
    );
}
