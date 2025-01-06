// src/app/components/SelectedWorks.tsx
import Link from "next/link";
import worksData from "../data/worksData";
import { Work } from "../types/work";
import Image from "next/image";  // Import Next.js Image component

const SelectedWorks: React.FC = () => {
  return (
    <div className="p-5 bg-black">
      <section className="py-12 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Selected Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {worksData.map((work: Work) => (
            <Link key={work.id} href={`/works/${work.id}`} aria-label={`View details for ${work.title}`}>
              <div className="group cursor-pointer transition-all">
                <div className="relative w-full h-60 overflow-hidden rounded-lg">
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={400}   // Specify width for optimization
                    height={240}  // Specify height for optimization
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                    loading="lazy"  // Enable lazy loading
                    quality={75}    // Set the quality for compression
                    sizes="(max-width: 768px) 100vw, 33vw"  // Responsive sizes
                  />
                </div>
                <p className="mt-2 text-sm font-semibold">{work.id}. {work.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery">
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300">
              See All Works
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SelectedWorks;
