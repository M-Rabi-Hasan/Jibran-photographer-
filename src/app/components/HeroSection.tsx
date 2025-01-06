"use client";
// src/app/HeroSection.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import Marquee from "react-marquee-slider"; // Importing the library

// Sample image data array
const images = [
  { src: "/images/4.jpeg", alt: "Wildlife 1" },
  { src: "/images/5.jpeg", alt: "Wildlife 2" },
  { src: "/images/6.jpeg", alt: "Wildlife 3" },
  { src: "/images/7.jpeg", alt: "Wildlife 4" },
  { src: "/images/8.jpeg", alt: "Wildlife 5" },
];

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section className="relative bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-6 w-full">
        <div className="flex items-center">
          <Image
            src="/Logo-3.png"
            width={1000}
            height={1000}
            alt="PHOTOFOX Logo"
            className="h-44 w-auto"
          />
        </div>
        <nav
          className={`absolute top-16 right-0 bg-black text-white md:flex md:static md:bg-transparent space-y-2 md:space-y-0 md:space-x-4 text-lg ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          {["Home", "Gallery", "Blog", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={
                link === "Home"
                  ? "/"
                  : link === "Blog"
                    ? "https://jabraan-blog.vercel.app/" // External link for the Blog
                    : `/${link.toLowerCase()}`
              }
              target={link === "Blog" ? "_blank" : "_self"} // Open Blog link in a new tab
              rel={link === "Blog" ? "noopener noreferrer" : undefined} // Security best practices for external links
              className="hover:underline block py-2 px-4 md:inline-block"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="md:hidden" onClick={toggleMenu}>
          <FaBarsStaggered size={30} className="cursor-pointer" />
        </div>
      </header>

      {/* Hero Text */}
      <div className="text-center py-16 md:py-24 w-full">
        <h1
          className="text-2xl md:text-7xl font-extrabold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          PAKISTAN'S LEADING PHOTOGRAPHER
        </h1>
        <p
          className="text-xl tracking-wide"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          J . PHOTOGRAPHER
        </p>
      </div>

      {/* Image Slider */}
      {isMobile ? (
        <div className="relative w-full overflow-x-auto whitespace-nowrap space-x-4 px-8">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="inline-block rounded shadow-lg"
            />
          ))}
        </div>
      ) : (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Marquee
            velocity={isPaused ? 0 : 20}
            direction="rtl"
            scatterRandomly={false}
            onInit={() => console.log("Marquee initialized")}
            onFinish={() => console.log("Marquee finished")}
            resetAfterTries={50}
            {...(isPaused ? { paused: "true" } : {})}
          >
            {images.map((image, index) => (
              <div key={index} className="mx-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={200}
                  className="rounded shadow-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
}
