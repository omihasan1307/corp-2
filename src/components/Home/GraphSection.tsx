import React from "react";
import lo from "../../../public/happy-clients.svg";
import Image from "next/image";

const GraphSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:grid lg:grid-cols-3 gap-6 px-2 py-16 border text-center graphSection text-white rounded-2xl">
        <div className="space-y-4">
          <Image src={lo} alt="lo" height={20} width={70} className="mx-auto" />
          <h1 className="text-5xl font-bold">8097</h1>
          <div>
            <p className="text-xl font-bold">Happy Clients</p>
            <h1>consequuntur quae diredo</h1>
          </div>
        </div>
        <div className="space-y-4">
          <Image src={lo} alt="lo" height={20} width={70} className="mx-auto" />
          <h1 className="text-5xl font-bold">8097</h1>
          <div>
            <p className="text-xl font-bold">Happy Clients</p>
            <h1>consequuntur quae diredo</h1>
          </div>
        </div>
        <div className="space-y-4">
          <Image src={lo} alt="lo" height={20} width={70} className="mx-auto" />
          <h1 className="text-5xl font-bold">8097</h1>
          <div>
            <p className="text-xl font-bold">Happy Clients</p>
            <h1>consequuntur quae diredo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
