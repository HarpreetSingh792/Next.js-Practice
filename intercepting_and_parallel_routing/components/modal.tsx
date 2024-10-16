"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div
      className="w-full h-full absolute top-0 left-0 bg-white/10 cursor-pointer grid justify-center items-center z-50"
      onClick={() => {
        router.back();
        setIsOpen(false);
      }}
    >
      <div onClick={(e)=>e.stopPropagation()}>

      {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
