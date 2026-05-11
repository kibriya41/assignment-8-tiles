"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[65vh] w-full flex items-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src={"https://images.unsplash.com/photo-1635321350281-e2a91ecffd00?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Hero Background"
          fill
          priority
          className="object-cover w-full"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Your <br /> Perfect Aesthetic
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Premium tiles for every space. Elegant designs.
          </p>

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-full">
            Browse Now →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;