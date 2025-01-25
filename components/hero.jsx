"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[35px] pb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Your Personal Financial Assistant: From Budgeting to Investing.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="lg" variant="outline" className="px-8 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-10">
          <div ref={imageRef} className="hero-image">
            <img
              src="/banner.jpeg"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border border-gray-700 mx-auto"
              style={{ width: "900px", height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
