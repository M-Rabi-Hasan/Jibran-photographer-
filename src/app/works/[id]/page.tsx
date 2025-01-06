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
      <Image
        src={work.imageUrl}
        width={400}
        height={600}
        alt={work.title}
        className="w-full h-auto rounded-lg"
      />
      {/* Display the description */}
      <p className="mt-4 text-gray-700 max-w-2xl">{work.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-8xl mt-6">
        {imageUrls.map((url, index) =>
          url ? ( // Ensure the URL is valid before rendering
            <Image
              key={index}
              src={url}
              width={400}
              height={600}
              alt={`${work.title} ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
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
