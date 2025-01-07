import Image from "next/image";
import Link from "next/link";

export default function ExperienceSection() {
  const services = [
    { name: "Food Photography", href: "/food-photography" },
    { name: "Portrait Photography", href: "/portrait-photography" },
    { name: "Architecture Photography", href: "/architecture-photography" },
    { name: "Conceptual Photography", href: "/conceptual-photography" },
  ];

  return (
    <div className="p-6 bg-black">
      <section className="bg-yellow-400 mt-12 text-black px-8 py-16 md:flex md:justify-between gap-x-5">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            EXPERIENCE OF 10 YEARS IN THE FIELD
          </h2>
          <div className="relative w-full h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src="/jibran/jibran-3.JPG"
              alt="Climber"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-8">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex justify-between items-center">
                <Link
                  href={service.href}
                  className="text-lg font-semibold hover:underline"
                >
                  {service.name}
                </Link>
                <span className="text-xl">→</span>
              </li>
            ))}
          </ul>
          <div className="relative w-full h-64 md:h-72 bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src="/jibran/jibran-13.JPG"
              alt="Food Photography"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Link
              href="/about"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
