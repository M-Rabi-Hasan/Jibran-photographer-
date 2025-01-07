"use client";

import { useParams } from "next/navigation";
import worksData from "../../data/worksData";
import { Work } from "../../types/work";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WorkDetail: React.FC = () => {
  const params = useParams(); // Get the params
  const router = useRouter();

  // Extract and typecast `id`
  const id = params?.id as string;

  const work: Work | undefined = worksData.find((item) => item.id === id);

  if (!work) {
    return <p>Work not found...</p>; // Better error handling
  }

  const imageUrls = [
    work.imageUrl1,
    work.imageUrl2,
    work.imageUrl3,
    work.imageUrl4,
    work.imageUrl5,
    work.imageUrl6,
    work.imageUrl7,
    work.imageUrl8,
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <div className="relative w-full h-96">
        <Image
          src={work.imageUrl}
          alt={work.title}
          layout="fill"  // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the container without distorting
          className="rounded-lg"
        />
      </div>
      {/* Display the description */}
      <p className="mt-4 text-gray-700 max-w-2xl">{work.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-8xl mt-6">
        {imageUrls.map((url, index) =>
          url ? ( // Ensure the URL is valid before rendering
            <div key={index} className="relative w-full h-96">
              <Image
                src={url}
                alt={`${work.title} ${index + 1}`}
                layout="fill"  // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the container without distorting
                className="rounded-lg"
              />
            </div>
          ) : null
        )}
      </div>
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default WorkDetail;
