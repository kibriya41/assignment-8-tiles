"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  // Register Function
  const handleRegisterFunc = async (data) => {

    const { email, name, photo, password } =
      data;

    try {
      setLoading(true);

      const { data: res, error } =
        await authClient.signUp.email({
          name,
          email,
          password,
          image: photo,
          callbackURL: "/",
        });

      // Error Handling
      if (error) {
        alert(error.message);
        return;
      }

      // Success
      if (res) {
        alert("Signup successful");

        // Reset Form
        reset();

        // Redirect to Homepage
        router.push("/");
      }
    } catch (err) {
      console.log(err);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white shadow-lg">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-bold text-3xl">
            Create Account
          </h2>

          <p className="text-gray-500 mt-1">
            Register to get started
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit(
            handleRegisterFunc
          )}
        >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Name
            </legend>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              {...register("name", {
                required:
                  "Name field is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Email
            </legend>

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              {...register("email", {
                required:
                  "Email field is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:
                    "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Photo URL */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Photo URL
            </legend>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
              {...register("photo", {
                required:
                  "Photo URL field is required",
              })}
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Password
            </legend>

            <div className="relative w-full">
              <input
                type={
                  isShowPassword
                    ? "text"
                    : "password"
                }
                className="input input-bordered w-full pr-12"
                placeholder="Create a password"
                {...register("password", {
                  required:
                    "Password field is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              {/* Eye Icon */}
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() =>
                  setIsShowPassword(
                    !isShowPassword
                  )
                }
              >
                {isShowPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          {/* Register Button */}
          <button
            disabled={loading}
            className="btn w-full bg-blue-500 text-white hover:bg-blue-700"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Button */}
        <button className="btn btn-outline w-full">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-5">
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
};

export default RegisterPage;