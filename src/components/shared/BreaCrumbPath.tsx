"use client";
import React from "react";
import breadData from "../../lib/BreadCrumb.json";
import { usePathname } from "next/navigation";

const BreadCrumbPath = () => {
  const pathname = usePathname();

  return (
    <div>
      {breadData?.map((data) => (
        <div key={data?.id} className="text-center">
          {data?.slug === pathname && (
            <div className=" bg-[#f6f6f6] py-5 flex items-center justify-center text-lg">
              <p className="font-bold px-2">Home</p>
              {data?.slug}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbPath;
