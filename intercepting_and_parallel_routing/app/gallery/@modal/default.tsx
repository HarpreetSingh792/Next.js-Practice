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
   <></>
  );
};

export default GalleryPage;
