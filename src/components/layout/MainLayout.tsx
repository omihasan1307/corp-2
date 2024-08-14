"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BreadCrumb from "../shared/BreadCrumb";
import BreadCrumbPath from "../shared/BreaCrumbPath";
import TopNavbar from "../Navbar/TopNavbar";

const MainLayout = ({ children }: any) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <>
          {children}
          <Footer />
        </>
      ) : (
        <>
          <TopNavbar />
          <Navbar />
          <div className="otherThanHome">
            <div className=" py-20">
              <BreadCrumb />
            </div>
          </div>
          <BreadCrumbPath />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
