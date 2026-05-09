"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validation
    const validate = () => {
        let newErrors = {};

        // Email Validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        // Password Validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password =
                "Password must contain at least 1 uppercase letter";
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "Password must contain at least 1 number";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        // Fake API Call
        setTimeout(() => {
            console.log(formData, "form data")

            setLoading(false);

            // Reset Form
            setFormData({
                email: "",
                password: "",
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl">
                <div className="card-body">
                    {/* Title */}
                    <div className="text-center mb-4">
                        <h1 className="text-3xl font-bold">Welcome Back</h1>
                        <p className="text-base-content/70 mt-1">
                            Login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                className={`input input-bordered w-full ${errors.email ? "input-error" : ""
                                    }`}
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {errors.email && (
                                <p className="text-error text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className={`input input-bordered w-full pr-12 ${errors.password ? "input-error" : ""
                                        }`}
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                {/* Show / Hide Password */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-error text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <a href="#" className="link link-hover text-sm text-primary">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""
                                }`}
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                "Login"
                            )}
                        </button>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Google Login */}
                        <button
                            type="button"
                            className="btn btn-outline w-full"
                        ><FcGoogle size={20} />

                            Continue with Google
                        </button>
                    </form>

                    {/* Signup */}
                    <p className="text-center text-sm mt-4">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="text-primary font-semibold">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}