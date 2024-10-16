"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("http://localhost:3000/api/img");
      const data = await resp.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4 xl:columns-5">
      {data?.map(
        ({ format, author, imageUrl, width, height }: GalleryProp, id) => {
          return (
              <div key={author+id} className="mb-4 break-inside-avoid relative">
                <Image
                  className="h-auto max-w-full rounded-lg cursor-pointer brightness-75 hover:brightness-95"
                  src={imageUrl}
                  alt={author}
                  width={width}
                  height={height}
                  onClick={() => router.push(`${pathname}/${id+1}`)}
                />
                <p className="absolute bottom-7 left-2  text-sm text-gray-400">
                  {author}
                </p>
                <p className="absolute bottom-1 left-2  text-sm text-gray-500">
                  Type: {format}
                </p>
              </div>
          );
        }
      )}
    </div>
  );
};

export default GalleryPage;
