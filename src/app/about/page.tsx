"use client";

import Image from "next/image";
import Menuheader from "../components/Header";
import Footer from "../components/Footer";

const AboutSection = () => {
  return (
    <div>
      <Menuheader />
      <div className="min-h-screen bg-black text-white px-6 py-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-wide">
            KARACHI, PAKISTAN PHOTOGRAPHER
          </h1>

          {/* Subtitle */}
          <h2 className="text-center text-lg font-light mb-8">
            ABOUT JIBRAN PHOTOGRAPHY
          </h2>

          <div className="lg:flex lg:items-start lg:justify-between gap-8">
            {/* Text Section */}
            <div className="lg:w-3/5">
              <p className="text-sm md:text-base leading-7 mb-6">
                Hi! Thank you so much for visiting my site! My name is Jibran,
                and I’m a photographer based in Karachi, Pakistan. I specialize
                in capturing moments of love, joy, and life’s most cherished
                memories. I create photographs not for recognition but because
                there’s nothing more fulfilling than seeing the emotions of my
                clients and freezing those moments in time for them to treasure
                forever.
              </p>

              {/* Section 1 */}
              <h3 className="text-lg font-semibold mb-4">
                Why I Love Photography
              </h3>
              <p className="text-sm md:text-base leading-7 mb-6">
                I have always had a passion for photography because it allows me
                to connect with people from all walks of life. I love witnessing
                and capturing those fleeting moments that reflect true emotions,
                whether it’s the joy of a wedding, the intimacy of a couple, or
                the vibrancy of life. Every photograph I take is an expression
                of my creativity, and I strive to tell a unique story with each
                shot.
              </p>

              {/* Section 2 */}
              <h3 className="text-lg font-semibold mb-4">
                What is Your Goal With Photography?
              </h3>
              <p className="text-sm md:text-base leading-7 mb-6">
                My goal is simple: to capture real, raw emotions and preserve
                those fleeting, meaningful moments. With a photojournalistic
                approach, I focus on documenting authentic expressions and love.
                I aim to provide you with images that reflect your genuine
                connection, so that years from now, you’ll look back at your
                photos and relive those beautiful moments with the same
                intensity.
              </p>

              {/* Section 3 */}
              <h3 className="text-lg font-semibold mb-4">
                How Did You Get Your Start?
              </h3>
              <p className="text-sm md:text-base leading-7">
                I started my photography journey in 2015 with a simple camera
                and a strong curiosity about the world around me. I learned
                through trial and error, experimenting, reading, and capturing
                anything and everything. Over the years, I’ve had the privilege
                of working with incredible couples, capturing everything from
                intimate weddings to grand traditional celebrations. Every
                wedding, regardless of its style or scale, is a chance to create
                timeless memories. Now, with almost a decade of experience, I’m
                proud to offer my clients photos that speak to the heart and
                soul of their special moments.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-2/5 mt-8 lg:mt-0">
              <div className="relative w-full h-96 lg:h-[700px]">
                <Image
                  src="/jibran/jibran-23.JPG"
                  alt="Photographer Portrait"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection;
