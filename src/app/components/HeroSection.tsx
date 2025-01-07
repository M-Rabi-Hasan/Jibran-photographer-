"use client";
// src/app/HeroSection.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import styled from "styled-components";
import Marquee from "react-marquee-slider"; // Importing the library

// Sample image data array
const images = [
  { src: "/jibran/jibran-5.JPG", alt: "Wildlife 1" },
  { src: "/family-shoot/F-6.jpg", alt: "Wildlife 1" },
  { src: "/jibran/jibran-9.JPG", alt: "Wildlife 1" },
  { src: "/business-shot/B-4.jpg", alt: "Wildlife 2" },
  { src: "/party-event/P-1.jpg", alt: "Wildlife 3" },
  { src: "/jibran/jibran-13.JPG", alt: "Wildlife 4" },
  { src: "/images/8.jpeg", alt: "Wildlife 5" },
];

const StyledMarquee = styled(Marquee)`
  /* Add any custom styling here if needed */
`;

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
          <div className="relative w-44 h-44">
            <Image
              src="/Logo-3.png"
              alt="PHOTOFOX Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <nav
          className={`absolute top-28 rounded-md right-0 bg-black text-white md:flex md:static md:bg-transparent space-y-2 md:space-y-0 md:space-x-4 text-lg ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          {[
            "Home",
            "Gallery",
            "Blog",
            "About",
            "Contact",
          ].map((link) => (
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
            <div
              key={index}
              className="relative w-[300px] h-[200px] inline-block rounded shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <StyledMarquee
            velocity={isPaused ? 0 : 40}
            direction="rtl"
            scatterRandomly={false}
            onInit={() => console.log("Marquee initialized")}
            onFinish={() => console.log("Marquee finished")}
            resetAfterTries={50}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-[400px] h-[200px] mx-4 rounded shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </StyledMarquee>
        </div>
      )}
    </section>
  );
}
