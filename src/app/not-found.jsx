"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaHome,
  FaSearch,
} from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Tile Aesthetic • Error 404
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#0F172A] leading-tight">
            Oops!
            <br />
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-slate-500 text-lg mt-6 leading-relaxed max-w-xl">
            The page you are looking for may
            have been removed, renamed, or is
            temporarily unavailable. Explore
            our premium tile collections and
            discover elegant designs for your
            perfect interior.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {/* Home */}
            <Link
              href="/"
              className="btn bg-primary hover:bg-blue-700 text-white border-none rounded-xl px-8"
            >
              <FaHome />
              Back To Home
            </Link>

            {/* Browse Tiles */}
            <Link
              href="/all-tiles"
              className="btn btn-outline rounded-xl px-8"
            >
              <FaSearch />
              Browse Tiles
            </Link>
          </div>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="mt-5 text-slate-600 hover:text-primary flex items-center gap-2 font-medium"
          >
            <FaArrowLeft />
            Go Back
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-white rounded-2xl shadow-sm p-5 text-center border">
              <h2 className="text-3xl font-bold text-primary">
                1200+
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Premium Tiles
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5 text-center border">
              <h2 className="text-3xl font-bold text-primary">
                5000+
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Customers
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5 text-center border">
              <h2 className="text-3xl font-bold text-primary">
                25+
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Collections
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden border">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Tile Interior"
              width={1000}
              height={1000}
              className="w-full h-[500px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Discover Your Perfect Aesthetic
              </h3>

              <p className="text-slate-600 mt-2">
                Elegant tile collections for
                modern interiors and premium
                spaces.
              </p>

              <Link
                href="/allTile"
                className="btn btn-primary mt-4 rounded-xl"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;