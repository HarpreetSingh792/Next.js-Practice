import { Metadata } from "next";
import { ReactNode } from "react";

export const metdata: Metadata = {
  title: "Slot and Intercept",
  description: "Gallery implemetation using Intercept and Slot in nextJS",
};

const GalleryLayout = ({
  modal,
  children,
}: {
  modal: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default GalleryLayout;
