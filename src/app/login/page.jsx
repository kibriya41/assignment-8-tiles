"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  // Login Function
  const handleLoginFunc = async (data) => {
    console.log(data, "Login Data");

    const { email, password } = data;

    try {
      setLoading(true);

      const { data: res, error } =
        await authClient.signIn.email({
          email,
          password,
          callbackURL: "/",
        });

      console.log(res);
      console.log(error);

      // Error
      if (error) {
        alert(error.message);
        return;
      }

      // Success
      if (res) {
        alert("Login successful");

        reset();
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
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-1">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit(
            handleLoginFunc
          )}
        >
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
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Password
            </legend>

            {/* IMPORTANT */}
            <div className="relative w-full">
              <input
                type={
                  isShowPassword
                    ? "text"
                    : "password"
                }
                className="input input-bordered w-full pr-12"
                placeholder="Enter your password"
                {...register("password", {
                  required:
                    "Password field is required",
                })}
              />

              {/* Fixed Eye Icon */}
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            disabled={loading}
            className="btn w-full bg-slate-800 text-white hover:bg-slate-700"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button className="btn btn-outline w-full">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-5">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;