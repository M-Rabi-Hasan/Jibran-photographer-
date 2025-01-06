"use client";

import { useState } from "react";
import Image from "next/image";
import Menuheader from "../components/Header";

// Define the gallery data type
type GalleryDataType = {
  [key: string]: string[];
};

const categories: string[] = [
  "Jabraan",
  "Mayo",
  "Barat",
  "Valima",
  "Nikka",
  "Family Shoot",
  "Party Event",
  "Business Meeting Shoot",
];

const galleryData: GalleryDataType = {
  Jabraan: [
    "/jibran/jibran-1.JPG",
    "/jibran/jibran-26.JPG",
    "/jibran/jibran-3.JPG",
    "/jibran/jibran-14.jpeg",
    "/jibran/jibran-30.JPG",
    "/jibran/jibran-6.JPG",
    "/jibran/jibran-23.jpg",
    "/jibran/jibran-29.jpg",
    "/jibran/jibran-9.JPG",
    "/jibran/jibran-17.JPG",
    "/jibran/jibran-11.JPG",
    "/jibran/jibran-18.JPG",
  ],
  Mayo: [
    "/mayo/M-1.jpg",
    "/mayo/M-2.jpg",
    "/mayo/M-3.jpg",
    "/mayo/M-4.jpg",
    "/mayo/M-5.jpg",
    "/mayo/M-6.jpg",
    "/mayo/M-7.jpg",
    "/mayo/M-8.jpg",
    "/mayo/M-9.jpg",
    "/mayo/M-10.jpg",
    "/mayo/M-11.jpg",
    "/mayo/M-12.jpg",
  ],
  Barat: [
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
  Valima: [
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
  Nikka: [
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
  "Family Shoot": [
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
  "Party Event": [
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
  "Business Meeting Shoot": [
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/1.jpeg",
    "/images/9.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ],
};

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Jabraan");

  return (
    <div>
      <Menuheader />
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData[activeCategory]?.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden transition-transform duration-1000 hover:scale-105 hover:h-72"
            >
              <Image
                src={image}
                alt={`${activeCategory} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
