import React from "react";
import hero from "../../../public/code canvas creations/hero.png";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className="heroHome">
      <div className="max-w-screen-xl mx-auto space-y-20 py-52 ">
        <div className=" px-2 ">
          <div className="space-y-6 lg:text-left text-center text-white">
            <p>GARMEN TEXTILE INDUSTRY</p>
            <div
              className=" text-2xl lg:text-5xl font-bold lg:w-[600px]"
              data-aos="fade-left"
            >
              <h1>You Can Never Go Wrong With Our Quality</h1>
            </div>
            <p
              className="text-xl lg:text-xl font-extralight lg:w-[700px]"
              data-aos="zoom-in-right"
            >
              Integer id ipsum eu massa pretium pulvinar non vitae massa donec
              ut dignissim. Metus aenean vulputate ex sed sem aliquet dapibus.
              Mauris imperdiet.
            </p>
            <div
              data-aos="zoom-in-right"
              className="text-xl text-white space-x-5"
            >
              <button className="px-6 py-3 rounded-lg bg-basicColor ">
                Make Project
              </button>
              <Link
                href={"https://youtu.be/sQ22pm-xvrE?si=atkTboUUgVNZZCTG"}
                target="_blank"
              >
                <FontAwesomeIcon icon={faCirclePlay} className="me-2" />
                Watch Video
              </Link>
              {/* <button className="border px-10 py-4 rounded-full bg-basicColor text-white">
              Get Quote
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
