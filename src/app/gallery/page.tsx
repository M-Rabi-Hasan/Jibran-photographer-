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
    "/barat/B-1.jpg",
    "/barat/B-2.jpg",
    "/barat/B-3.jpg",
    "/barat/B-4.jpg",
    "/barat/B-5.jpg",
    "/barat/B-6.jpg",
    "/barat/B-7.jpg",
    "/barat/B-8.jpg",
    "/barat/B-9.jpg",
    "/barat/B-10.jpg",
    "/barat/B-11.jpg",
    "/barat/B-12.jpg",
  ],
  Valima: [
    "/valima/V-1.jpg",
    "/valima/V-2.jpg",
    "/valima/V-3.jpg",
    "/valima/V-4.jpg",
    "/valima/V-5.jpg",
    "/valima/V-6.jpg",
    "/valima/V-7.jpg",
    "/valima/V-8.jpg",
    "/valima/V-9.jpg",
    "/valima/V-10.jpg",
    "/valima/V-11.jpg",
    "/valima/V-12.jpg",
  ],
  Nikka: [
    "/nikkha/N-1.jpg",
    "/nikkha/N-2.jpg",
    "/nikkha/N-3.jpg",
    "/nikkha/N-4.jpg",
    "/nikkha/N-5.jpg",
    "/nikkha/N-6.jpg",
    "/nikkha/N-7.jpg",
    "/nikkha/N-8.jpg",
    "/nikkha/N-9.jpg",
    "/nikkha/N-10.jpg",
    "/nikkha/N-11.jpg",
    "/nikkha/N-12.jpg",
  ],
  "Family Shoot": [
    "/family-shoot/F-1.jpg",
    "/family-shoot/F-2.jpg",
    "/family-shoot/F-3.jpg",
    "/family-shoot/F-4.jpg",
    "/family-shoot/F-5.jpg",
    "/family-shoot/F-6.jpg",
    "/family-shoot/F-7.jpg",
    "/family-shoot/F-8.jpg",
    "/family-shoot/F-9.jpg",
    "/family-shoot/F-10.jpg",
    "/family-shoot/F-11.jpg",
    "/family-shoot/F-12.jpg",
  ],
  "Party Event": [
    "/party-event/P-1.jpg",
    "/party-event/P-2.jpg",
    "/party-event/P-3.jpg",
    "/party-event/P-4.jpg",
    "/party-event/P-5.jpg",
    "/party-event/P-6.jpg",
    "/party-event/P-7.jpg",
    "/party-event/P-8.jpg",
    "/party-event/P-9.jpg",
    "/party-event/P-10.jpg",
    "/party-event/P-11.jpg",
    "/party-event/P-12.jpg",
  ],
  "Business Meeting Shoot": [
    "/business-shot/B-1.jpg",
    "/business-shot/B-2.jpg",
    "/business-shot/B-3.jpg",
    "/business-shot/B-4.jpg",
    "/business-shot/B-5.jpg",
    "/business-shot/B-6.jpg",
    "/business-shot/B-7.jpg",
    "/business-shot/B-8.jpg",
    "/business-shot/B-9.jpg",
    "/business-shot/B-10.jpg",
    "/business-shot/B-11.jpg",
    "/business-shot/B-12.jpg",
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
