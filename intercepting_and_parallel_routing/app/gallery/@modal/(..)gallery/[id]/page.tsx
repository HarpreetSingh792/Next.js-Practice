"use client";
import Modal from "@/components/modal";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { SetStateAction, useEffect, useState } from "react";

interface DataType {
  id: number;
  imageUrl: string;
  format: string;
  width: number;
  height: number;
  author: string;
}

const PicIdPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`http://localhost:3000/api/img/${params.id}`);
      const img = await resp.json();
      console.log(img);
      setData(img);
    };

    fetchData();
  }, [params.id]);

  if (data.length === 0) {
    return null;
  }
  return (
    <Modal>
      <div className="grid gap-4 bg-white w-96 h-3/4 p-5 mt-12 m-auto">
        {data?.map(({ format, author, imageUrl, width, height, id }) => (
          <>
            <div key={id} className=" relative w-full h-96">
              <Image
                src={imageUrl}
                alt={author}
                fill
                className=" object-cover"
              />
            </div>
            <p className="text-lg text-black">{author}</p>
            <p className="text-lg text-gray-500">Type: {format}</p>
          </>
        ))}
      </div>
    </Modal>
  );
};

export default PicIdPage;
