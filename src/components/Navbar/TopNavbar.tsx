import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 hidden lg:block">
      <div className="flex items-center justify-between">
        <div className="text-gray-400 flex items-center space-x-8">
          <p>
            <FontAwesomeIcon icon={faPhone} className="me-3 text-basicColor" />
            <span>+123-234-1234</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="me-3 text-basicColor"
            />
            <span>hello@awesomesite.com</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faLocation}
              className="me-3 text-basicColor"
            />
            <span>KLLG st, No.99, Pku City, ID 28289</span>
          </p>
        </div>
        <div className="space-x-4">
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
    </div>
  );
};

export default TopNavbar;
