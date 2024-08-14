import React from "react";
import logo from "../../../public/code canvas creations/logo-icon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-darkBlueColor text-white">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="lg:grid grid-cols-3 gap-10 px-5 lg:px-0">
          <div className="space-y-5">
            <Image src={logo} alt={"logo"} width={100} height={50} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, qui
              quo atque et tempore, aspernatur iusto sapiente dolore quisquam,
              ipsum autem neque eveniet eos cum ea molestias repellendus dolorem
              totam.
            </p>
            <h2 className="text-xl font-semibold">Follow us</h2>
            <div className=" flex items-center space-x-5">
              <FontAwesomeIcon
                icon={faFacebook}
                className=" rounded-full border-basicColor border-8 "
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className=" rounded-full border-basicColor border-8 "
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className=" rounded-full border-basicColor border-8 "
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className=" rounded-full border-basicColor border-8 "
              />
            </div>
          </div>
          <div className="col-span-2 lg:space-y-0 space-y-5 lg:grid grid-cols-3 px-5 lg:px-0">
            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-40 border-basicColor">
                Quick Links
              </p>
              <ul className="space-y-3">
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Home</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Services</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Pricing</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>About us</span>
                </li>

                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Our News</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Our Team</span>
                </li>
              </ul>
            </div>
            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-28 border-basicColor">
                Services
              </p>
              <ul className="space-y-3">
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Fabric Dyeing</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Satin Weaving</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Fabric Printing</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Garment Stitching</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Linen Weaving</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Custom Apparel</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Press</span>
                </li>
              </ul>
            </div>
            <div className="space-y-10">
              <p className="text-xl font-semibold pb-2 border-b-2 w-28 border-basicColor">
                Information
              </p>
              <div>
                <div className="flex items-center space-x-5 space-y-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-5 text-basicColor"
                  />
                  <p>11 West Town, PBo 12345, United States</p>
                </div>
                <div className=" space-y-3 mt-3">
                  <div className="flex items-center space-x-5 ">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-5 text-basicColor"
                    />
                    <p> +1 1234 56 789</p>
                  </div>
                </div>
                <div className=" space-y-3 mt-3">
                  <div className="flex items-center space-x-5 ">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-5 text-basicColor"
                    />
                    <p> info@example.com</p>
                  </div>
                </div>
              </div>

              {/* <ul className="space-y-3">
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Home</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Services</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Testimonials</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>About us</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>FAQ'S</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Our News</span>
                </li>
                <li className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 ">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 text-basicColor"
                  />
                  <span>Our Team</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between px-5 lg:px-0">
          <p>Code Canvas Creation © 2024 </p>
          <div className="flex space-x-10">
            <p>Privcay Policy </p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
