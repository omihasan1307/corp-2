import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import pc from "../../../public/code canvas creations/pc image.jpg";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

const Gallery = () => {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-2 my-32">
        <div className="lg:grid grid-cols-3 gap-10">
          <Image
            src={pc}
            alt={"gallery"}
            width={200}
            height={500}
            className="lg:rounded-2xl w-full hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <Image
            src={pc}
            alt={"gallery"}
            width={400}
            height={500}
            className="lg:rounded-2xl w-full hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <Image
            src={pc}
            alt={"gallery"}
            width={400}
            height={500}
            className="lg:rounded-2xl w-full hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
