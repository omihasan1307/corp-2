import React from "react";
import blog1 from "../../../public/blog-1.jpg";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-32">
      <div className=" text-center space-y-5">
        <h1 className="text-3xl font-semibold text-basicColor">Blog Posts</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-6 px-2 pt-16 ">
        <div className="rounded-2xl text-center border duration-300 hover:duration-300 hover:shadow-xl overflow-hidden bg-white">
          <div className="overflow-hidden">
            <Image
              src={blog1}
              alt="blog"
              height={200}
              width={500}
              className="rounded-t-2xl mx-auto"
            />
          </div>
          <div className="space-y-2 my-5 px-5">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Domain & Hosting
            </p>
            <p className="text-lg font-semibold text-basicColor hover:text-indigo-600 transition-colors duration-300">
              How to host a website on any hosting provider?
            </p>
            <div>
              <p className="font-medium text-gray-700">William Bla</p>
              <p className="text-gray-400 text-sm">Feb 1, 2023</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl text-center border duration-300 hover:duration-300 hover:shadow-xl overflow-hidden bg-white">
          <div className="overflow-hidden">
            <Image
              src={blog1}
              alt="blog"
              height={200}
              width={500}
              className="rounded-t-2xl mx-auto"
            />
          </div>
          <div className="space-y-2 my-5 px-5">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Domain & Hosting
            </p>
            <p className="text-lg font-semibold text-basicColor hover:text-indigo-600 transition-colors duration-300">
              How to host a website on any hosting provider?
            </p>
            <div>
              <p className="font-medium text-gray-700">William Bla</p>
              <p className="text-gray-400 text-sm">Feb 1, 2023</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl text-center border duration-300 hover:duration-300 hover:shadow-xl overflow-hidden bg-white">
          <div className="overflow-hidden">
            <Image
              src={blog1}
              alt="blog"
              height={200}
              width={500}
              className="rounded-t-2xl mx-auto"
            />
          </div>
          <div className="space-y-2 my-5 px-5">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Domain & Hosting
            </p>
            <p className="text-lg font-semibold text-basicColor hover:text-indigo-600 transition-colors duration-300">
              How to host a website on any hosting provider?
            </p>
            <div>
              <p className="font-medium text-gray-700">William Bla</p>
              <p className="text-gray-400 text-sm">Feb 1, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
