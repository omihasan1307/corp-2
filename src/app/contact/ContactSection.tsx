import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faLocationPin,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <div className=" py-20 mt-28">
      <div className="max-w-screen-xl mx-auto px-2 ">
        <div className="grid lg:grid-cols-2 gap-40">
          <div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold  text-left">
                GET CLOSER
              </h2>
              <hr className="border-basicColor my-5 w-40 border-2 text-center lg:text-left" />
              <p className="my-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>

              <div className="grid lg:grid-cols-2  lg:place-content-center  lg:gap-10 my-10 ">
                <div>
                  <div className="flex items-center  mb-10 lg:mb-12">
                    <FontAwesomeIcon
                      className=" w-[20px] h-[25px]"
                      icon={faLocationPin}
                    />
                    <div className="ms-5">
                      <p className=" text-xl font-bold mb-2">LOCATION</p>
                      <p>Jl. Pantai Kuta No.34, Badung, Bali</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-10 lg:mb-0 ">
                    {" "}
                    <FontAwesomeIcon
                      className=" w-[20px] h-[50px]  "
                      icon={faPhone}
                    />
                    <div className="ms-5 ">
                      <p className=" text-xl font-bold mb-2">PHONE</p>
                      <p>01862404050</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center lg:mb-16 mb-10  ">
                      <FontAwesomeIcon
                        className=" w-[20px] h-[40px]"
                        icon={faPaperPlane}
                      />
                      <div className="ms-5">
                        <p className=" text-xl font-bold mb-2">EMAIL</p>
                        <p>omihasan1307@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex  items-center  ">
                      {" "}
                      <FontAwesomeIcon
                        className=" w-[20px] h-[50px]  "
                        icon={faClock}
                      />
                      <div className="ms-5 ">
                        <p className=" text-xl font-bold mb-2">OPEN HOUR</p>
                        <p>10.00 am - 09.00 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-4 border-slate-800 my-8" />
              <div className="my-6 grid lg:grid-cols-3 lg:place-content-center items-center">
                <div className="col-span-2 text-2xl  font-bold">
                  OUR SOCIAL MEDIA
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    className="text-basicColor w-[25px] h-[50px] lg:me-5 me-10 "
                    icon={faFacebook}
                  />
                  <FontAwesomeIcon
                    className="text-basicColor w-[25px] h-[50px] lg:me-5 me-10"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="text-basicColor w-[25px] h-[50px] lg:me-5 me-10"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="text-basicColor w-[25px] h-[50px] lg:me-5 me-10"
                    icon={faYoutube}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl font-bold mb-8">YOUR DETAILS</h1>
            <div>
              <div className="grid lg:grid-cols-2 ">
                <div className="mb-5 lg:mb-5">
                  <h2 className="text-xl  mb-3">First Name </h2>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border rounded w-[98%] lg:w-[95%]"
                    required
                  />
                </div>
                <div>
                  <h2 className="text-xl mb-3">Email Address </h2>
                  <input
                    type="email"
                    placeholder="email@youremail.com"
                    className="px-4 py-2 border rounded w-[98%] lg:w-[95%]"
                    required
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl  my-5">Subject </h2>
                <input
                  type="email"
                  placeholder="subject"
                  className="px-4 py-2 border rounded w-[98%] lg:w-[95%]"
                  required
                />
              </div>
              <div>
                <h2 className="text-xl  my-5">Comments / Questions </h2>
                <textarea
                  name="comment"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  className="px-4 py-2 border rounded w-[98%] lg:w-[95%] h-[150px]"
                ></textarea>
                <button className="bg-basicColor w-[200px] mx-auto py-2 my-5 text-white rounded hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 ">
                  Submit Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
