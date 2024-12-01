"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";

const LandingPage = () => {
  const currentImage = useCarousel({ totalImages: 3,interval:1000 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing_title">Courses</h1>
          <p className="landing__description">
            There are the list of top rated courses you can enroll into and
            learn
            <br />
            Learn as you watch.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search For Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className={`landing__hero-image ${
                index === currentImage ? "landing__hero-image--active" : ""
              }`}
            />
          ))}{" "}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
