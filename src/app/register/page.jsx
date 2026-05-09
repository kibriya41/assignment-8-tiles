"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaEye,
    FaEyeSlash
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

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

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        }

        if (!formData.photo) {
            newErrors.photo = "Photo URL is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        console.log("Register Data:", formData);

        alert("Registration Successful");

        // Reset Form
        setFormData({
            name: "",
            email: "",
            photo: "",
            password: "",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Register to get started
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-1">
                            Photo URL (Link)
                        </label>

                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                            value={formData.photo}
                            onChange={handleChange}
                        />

                        {errors.photo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.photo}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={
                                    showPassword ? "text" : "password"
                                }
                                name="password"
                                placeholder="Create a password"
                                className="input input-bordered w-full pr-12"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <p className="text-xs text-base-content/60 mt-1">
                                Must be 8+ characters, 1 uppercase letter & 1 number
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-2"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="divider text-sm text-gray-400">
                    or
                </div>

                {/* Google Button */}
                <button className="btn btn-outline w-full">
                    <FcGoogle size={20} />


                    Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-primary font-semibold"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}