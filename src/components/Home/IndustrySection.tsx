import React from "react";

const IndustrySection = () => {
  return (
    <div className="industrySection">
      <div className=" lg:flex items-center justify-between px-2 lg:py-28  text-white max-w-screen-xl mx-auto">
        <p className="text-center  lg:text-left text-5xl font-bold w-96">
          Our Industry In Number
        </p>
        <div className="text-center space-y-2">
          <div className="relative inline-block">
            <span className="absolute -top-4 -right-6 text-basicColor transform -translate-x-1/2 text-2xl font-bold">
              +
            </span>
            <p className="text-5xl font-bold ordinal">5,000</p>
          </div>
          <p className="text-2xl font-semibold">Completed Project</p>
        </div>
        <div className="text-center space-y-2">
          <div className="relative inline-block">
            <span className="absolute -top-4 -right-6 text-basicColor transform -translate-x-1/2 text-2xl font-bold">
              +
            </span>
            <p className="text-5xl font-bold ordinal">120</p>
          </div>
          <p className="text-2xl font-semibold">Export Country</p>
        </div>
        <div className="text-center space-y-2">
          <div className="relative inline-block">
            <span className="absolute -top-4 -right-6 text-basicColor transform -translate-x-1/2 text-2xl font-bold">
              +
            </span>
            <p className="text-5xl font-bold ordinal">5,000</p>
          </div>
          <p className="text-2xl font-semibold">Satisfied Customer</p>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
