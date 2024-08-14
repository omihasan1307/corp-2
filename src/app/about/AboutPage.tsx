import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import s1 from "../../../public/code canvas creations/s1.png";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-20 my-20">
      <div className="lg:grid grid-cols-2 place-items-center gap-5 px-2 ">
        <div className="space-y-10" data-aos="fade-right">
          <h1 className="text-4xl text-basicColor">
            Establishing Effective Web Solutions
          </h1>
          <p>
            Effortlessly maneuver through the intricate realm of IT solutions
            with Technoa. Our platform simplifies optimizations, propelling your
            systems to become favorites in the digital landscape.
          </p>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Web Design</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Shopify Development</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> UI/UX Design</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> React Development</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Web Development</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> E-commerce</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Wordpress Development</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> SEO</span>
            </li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <Image
            src={s1}
            alt={"s1"}
            height={500}
            width={500}
            className="transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300 "
          />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 place-items-center gap-5 px-2">
        <div data-aos="fade-right">
          <Image
            src={s1}
            alt={"s1"}
            height={500}
            width={600}
            className="transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300 "
          />
        </div>
        <div className="space-y-10" data-aos="fade-left">
          <h1 className="text-4xl text-basicColor">
            Digital Solutions for Your Business Tech Needs
          </h1>
          <p>
            Effortlessly maneuver through the intricate realm of IT solutions
            with Technoa. Our platform simplifies optimizations, propelling your
            systems to become favorites in the digital landscape.
          </p>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span>Strategy</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> UI/UX Design</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> IOS Apps</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Digital Marketing</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Domain & Hosting</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Web Development</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Android Apps</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Cloud Services</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> SEO / PPC</span>
            </li>
            <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="w-3 text-basicColor"
              />
              <span> Support Services</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
