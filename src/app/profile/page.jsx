"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Profile = () => {
  // Get Logged In User
  const { data: session, isPending } =
    authClient.useSession();

  // Loading State
  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // User Data
  const user = session?.user;

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Cover */}
          <div className="h-52 bg-gradient-to-r from-slate-800 to-slate-600 relative">
            {/* Profile Image */}
            <div className="absolute -bottom-16 left-8">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-white ring-offset-2 overflow-hidden">
                  <Image
                    src={
                      user?.image ||
                      "https://i.ibb.co.com/7tL7zqL/user.png"
                    }
                    alt="profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 px-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  {user?.name || "Unknown User"}
                </h1>

                <p className="text-slate-500 mt-1">
                  Welcome to your profile
                </p>
              </div>

              {/* Verification */}
              <div>
                {user?.emailVerified && (
                  <div className="badge badge-success gap-2 p-4">
                    <FaCheckCircle />
                    Verified Account
                  </div>
                )}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {/* Email */}
              <div className="bg-slate-50 p-5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <FaEnvelope className="text-slate-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email Address
                    </p>

                    <h3 className="font-semibold text-slate-800 break-all">
                      {user?.email}
                    </h3>
                  </div>
                </div>
              </div>

              {/* User ID */}
              <div className="bg-slate-50 p-5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <FaUser className="text-slate-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      User ID
                    </p>

                    <h3 className="font-semibold text-slate-800 break-all">
                      {user?.id}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Created At */}
              <div className="bg-slate-50 p-5 rounded-2xl md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <FaCalendarAlt className="text-slate-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Account Created
                    </p>

                    <h3 className="font-semibold text-slate-800">
                      {new Date(
                        user?.createdAt
                      ).toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-slate-50 p-6 rounded-2xl mt-8">
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                About User
              </h2>

              <p className="text-slate-600 leading-relaxed">
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;