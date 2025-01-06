"use client";
import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";

const Menuheader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="flex justify-between items-center px-6 w-full bg-black ">
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
        <FaBarsStaggered size={30} className="cursor-pointer text-white" />
      </div>
    </header>
  );
};

export default Menuheader;
