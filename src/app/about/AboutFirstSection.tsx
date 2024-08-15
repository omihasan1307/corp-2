import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import s1 from "../../../public/about1.jpg";
import s2 from "../../../public/about2.jpg";

const Vision = [
  "Integer consectetur tincidunt.",
  "Fusce lacinia nulla eu nunc sed.",
  "Proin tempus lorem nibh.",
  "Pellentesque id lectus tempor.",
  "Morbi sed volutpat neque et.",
];

const AboutFirstSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-20 my-32 ">
      <div className="lg:grid grid-cols-2 place-items-center gap-5 px-2">
        <div
          className="relative border border-basicColor rounded-lg h-full w-3/4 "
          data-aos="fade-right"
        >
          <div className="relative ">
            <div className="ms-20 -mt-10 ">
              <Image
                src={s1}
                alt={"s1"}
                height={400}
                width={450}
                className="transition rounded-lg ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300 "
              />
            </div>
            <div className="absolute -bottom-20 -left-28">
              <Image
                src={s2}
                alt={"s2"}
                height={400}
                width={300}
                className="transition rounded-lg ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300 ms-10 mt-10"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <h1 className=" font-bold  text-basicColor">
            A B O U T&nbsp;&nbsp;G A R M E N
          </h1>
          <h1 className="text-5xl font-bold text-darkBlueColor">
            You Can Find All Kinds of <br />
            <span className="mt-4 inline-block">Fabric Here</span>
          </h1>
          <p className="text-gray-500">
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum
            imperdiet neque, sit amet porta facilisis elit. Nunc neque enim
            finibus at nisi non, auctor venenatis leo.
          </p>

          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <p className="text-2xl text-darkBlueColor">Our Vision</p>
              <ul className="text-gray-500 space-y-4">
                {Vision?.map((i, index) => (
                  <li
                    key={index}
                    className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-3 text-basicColor"
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex-shrink-0 mx-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-basicColor"></div>
            </div>
            <div className="space-y-4">
              <p className="text-2xl  text-darkBlueColor">Our Mission</p>
              <ul className="text-gray-500 space-y-4">
                {Vision?.map((i, index) => (
                  <li
                    key={index}
                    className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-3 text-basicColor"
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirstSection;
