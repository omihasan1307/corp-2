"use client";
import React from "react";
import breadData from "../../lib/BreadCrumb.json";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-20">
      {breadData?.map((data) => (
        <div key={data?.id} className="text-left text-white">
          {data?.slug === pathname && (
            <>
              <h1 className="uppercase  font-bold text-6xl">{data?.name}</h1>
              <hr className="border-[#FFBA00] my-5 w-40 border-2 lg:text-left" />
              <h1 className="w-6/12 ">{data?.pageTitle}</h1>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
