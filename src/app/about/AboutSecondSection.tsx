import React from "react";

const Vision = [
  "Integer consectetur tincidunt.",
  "Fusce lacinia nulla eu nunc sed.",
  "Proin tempus lorem nibh.",
  "Pellentesque id lectus tempor.",
  "Morbi sed volutpat neque et.",
];

const AboutSecondSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-20 my-32  ">
      <div className="lg:grid grid-cols-2 place-items-center gap-5 px-2">
        <div className="space-y-6" data-aos="fade-left">
          <h1 className=" font-bold  text-basicColor">
            WHY &nbsp;&nbsp;CHOOSE &nbsp;&nbsp; GARMEN
          </h1>
          <h1 className="text-4xl font-bold text-darkBlueColor ">
            Lowest Price Guaranteed, <br />
            <span className="mt-4 inline-block">
              Quality Never Compromised{" "}
            </span>
          </h1>
          <p className="text-gray-500">
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non ut, porta eget dolor. Donec vel
            ipsum imperdiet neque, sit amet porta facilisis elit. Nunc neque
            enim finibus at nisi non, auctor venenatis leo. Sed porta posuere
            nunc id diam ornare, pretium eleifend mi molestie. Fusce feugiat
            tortor malesuada pulvinar sagittis hendrerit purus felis. Vestibulum
            et auctor porttitor lectus sit amet consequat. Pellentesque rutrum
            risus sed sapien.
          </p>
          <p className="text-gray-500">
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum
            imperdiet neque, sit amet porta facilisis elit. Nunc neque enim
            finibus at nisi non, auctor venenatis leo.
          </p>
        </div>

        <div
          className="flex items-center justify-around  w-full"
          data-aos="fade-right"
        >
          <div className="space-y-10 ">
            <div className="text-center space-y-5">
              <div className="text-xl border-4 mx-auto border-basicColor rounded-full font-semibold flex items-center justify-center h-32 w-32">
                95%
              </div>
              <p className=" text-xl font-semibold text-darkBlueColor">
                Factory Experience
              </p>
            </div>
            <div className="text-center space-y-5">
              <div className="text-xl border-4 mx-auto border-basicColor rounded-full font-semibold flex items-center justify-center h-32 w-32">
                97%
              </div>
              <p className=" text-xl font-semibold text-darkBlueColor">
                Worker Skills
              </p>
            </div>
          </div>
          <div className="space-y-10 ">
            <div className="text-center space-y-5">
              <div className="text-xl border-4 mx-auto border-basicColor rounded-full font-semibold flex items-center justify-center h-32 w-32">
                97%
              </div>
              <p className=" text-xl font-semibold text-darkBlueColor">
                Textile Material
              </p>
            </div>
            <div className="text-center space-y-5">
              <div className="text-xl border-4 mx-auto border-basicColor rounded-full font-semibold flex items-center justify-center h-32 w-32">
                93%
              </div>
              <p className=" text-xl font-semibold text-darkBlueColor">
                Machinery & Equipment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecondSection;
