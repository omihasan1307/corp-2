"use client";
import React, { useState, useEffect } from "react";
import menuItem from "../../lib/menuItem.json";
import logo from "../../../public/code canvas creations/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-lg z-50 bg-darkBlueColor text-white"
          : "relative bg-darkBlueColor text-white"
      }`}
    >
      <nav className={`max-w-screen-xl mx-auto transition-all duration-300  `}>
        <div className="flex items-center justify-between">
          <div>
            <Image src={logo} alt="Logo" width={100} height={200} />
          </div>
          <div className="lg:flex items-center justify-between space-x-6 hidden">
            {menuItem?.menuItems?.map((menu) => {
              const isActive = pathName === menu?.link;

              return (
                <Link
                  href={menu?.link}
                  key={menu?.id}
                  className={`uppercase px-5 border-b-0 transition ease-in-out delay-150  ${
                    isActive
                      ? "border-b-[0.5px] scale-110 border-basicColor py-[13px] "
                      : "underline-effect  "
                  }`}
                >
                  {menu?.title}
                </Link>
              );
            })}
          </div>
          <div>
            <button className="px-6 py-3 rounded-lg bg-basicColor ">
              Make Project
            </button>
          </div>
          <div
            className="lg:hidden block cursor-pointer"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50 p-5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <div className="cursor-pointer" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              {menuItem?.menuItems?.map((menu) => {
                const isActive = pathName === menu?.link;

                return (
                  <Link
                    href={menu?.link}
                    key={menu?.id}
                    className={`uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-gray-200 ${
                      isActive ? "bg-basicColor text-white" : ""
                    }`}
                    onClick={toggleSidebar} // Close sidebar on link click
                  >
                    {menu?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
