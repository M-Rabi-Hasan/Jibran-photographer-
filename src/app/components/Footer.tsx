// src/app/components/Footer.tsx
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import Image from 'next/image';  // Import Next.js Image component

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-center py-10 overflow-hidden">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6 text-gray-600">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
          <FaFacebook size={24} />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
          <FaPinterest size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <a
            key={index}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md">
              <Image
                src={`/images/${index + 1}.jpeg`}
                alt={`Gallery image ${index + 1}`}
                width={300}   // Specify width for optimization
                height={300}  // Specify height for optimization
                className="w-full h-full object-cover rounded-md"
                loading="lazy"  // Enable lazy loading
                quality={75}    // Set the quality for compression
                sizes="(max-width: 768px) 100vw, 33vw"  // Responsive sizes
              />
            </div>
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-12 px-4">
        <p className="text-xl text-gray-600 font-serif font-bold">
          Jibran Photography | Copyright 2024 | All Rights Reserved
        </p>
        <p className="text-lg text-gray-600 font-serif mt-6 px-10">
          Jibran Photography is a passionate, creative, and candid photographer serving 
          clients across Pakistan. My goal is to capture unforgettable moments and deliver 
          stunning photographs that tell your story. Always available for inquiries and bookings.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a href="/home" className="text-black font-bold text-lg underline font-serif">
            Home
          </a>
          <a href="/about" className="text-black font-bold text-lg underline font-serif">
            About
          </a>
          <a href="/blog" className="text-black font-bold text-lg underline font-serif">
            Blog
          </a>
          <a href="/contact" className="text-black font-bold text-lg underline font-serif">
            Contact
          </a>
          <a href="/gallery" className="text-black font-bold text-lg underline font-serif">
            Gallery
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
