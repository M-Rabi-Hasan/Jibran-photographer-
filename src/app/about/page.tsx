"use client";

import Image from "next/image";
import Menuheader from "../components/Header";
import Footer from "../components/Footer";

const AboutSection = () => {
  return (
    <div>
      <Menuheader/>
    <div className="min-h-screen bg-black text-white px-6 py-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-wide">
          VIRGINIA, MARYLAND AND WASHINGTON DC PHOTOGRAPHER
        </h1>

        {/* Subtitle */}
        <h2 className="text-center text-lg font-light mb-8">
          ABOUT J. SASU PHOTOGRAPHY
        </h2>

        <div className="lg:flex lg:items-start lg:justify-between gap-8">
          {/* Text Section */}
          <div className="lg:w-3/5">
            <p className="text-sm md:text-base leading-7 mb-6">
              Hi! Thank you so much for dropping by! My name is Joseph but
              everyone calls me J, and I am a photographer from the Washington,
              DC area, Maryland to be exact. I provide photography for couples
              who are bold, beautiful and fearless. I capture photographs not
              for awards or accolades but because I find happiness seeing
              people as they fearlessly and selflessly profess their declaration
              of love.
            </p>

            {/* Section 1 */}
            <h3 className="text-lg font-semibold mb-4">
              Why I Love Wedding Photography
            </h3>
            <p className="text-sm md:text-base leading-7 mb-6">
              I love wedding photography because I get to connect with amazing
              couples of different backgrounds. I get to experience deeply
              emotional and shared moments with people. I am fascinated by the
              art of capturing a fleeting moment and having it last forever. My
              photography vision is molded by each couple I meet, and I love the
              thrill of mixing my creativity to produce one-of-a-kind imagery.
            </p>

            {/* Section 2 */}
            <h3 className="text-lg font-semibold mb-4">
              What is Your Goal With Wedding Photography?
            </h3>
            <p className="text-sm md:text-base leading-7 mb-6">
              My photography’s purpose is to capture true, authentic emotions
              and real moments. My photojournalistic photography approach
              ensures I capture these vivid feelings. My goal is to take home
              with me images full of raw, genuine, loving emotions and, in
              return, give to you photos of your fearless acts of love and the
              life-changing moments.
            </p>

            {/* Section 3 */}
            <h3 className="text-lg font-semibold mb-4">
              How Did You Get Your Start?
            </h3>
            <p className="text-sm md:text-base leading-7">
              I began photography in 2015 with a simple camera and bountiful
              curiosity and taught myself everything I know about photography
              through practice, reading, and hands-on trial and error. Within
              almost 10 years of experience, I have photographed hundreds of
              weddings, weddings including couples from intimate ceremonies and
              traditional weddings as well as cultural Jewish, South Asian, and
              African weddings. My first real wedding came while working with a
              wedding industry friend and started me on my journey in my own
              career. With the years, I have found my path and made it easy and
              light for couples and families to resonate with me on providing
              them everlasting and timeless memories.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 mt-8 lg:mt-0">
            <div className="relative w-full h-96 lg:h-[480px]">
              <Image
                src="/jibran/jibran-23.JPG"
                alt="Photographer Portrait"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutSection;
