import React from "react";
import { IoMdImages } from "react-icons/io";
import { FaGoogleWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewAbout = () => {
  return (
    <section className="relative  text-ambed-gray font-ambed py-[57px] mt-[-250px]  overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 float-bob-x">
        <img
          src="https://ambed-html.vercel.app/main-html/assets/images/shapes/quality-work-shape-1.png"
          alt=""
          className="animate-custom-bounce2 "
        />
      </div>
      <div className="absolute bottom-0 left-[0%] float-bob-y ">
        <img
          src="https://ambed-html.vercel.app/main-html/assets/images/shapes/quality-work-shape-4.png"
          alt=""
          className="hidden lg:block"
        />
      </div>
      <div className="absolute -bottom-5 right-0 float-bob-x">
        <img
          src="https://ambed-html.vercel.app/main-html/assets/images/shapes/quality-work-shape-3.png"
          alt=""
          className="animate-custom-bounce2 lg:size-[21rem]"
        />
      </div>
      <div className="absolute -bottom-5 left-0 float-bob-x">
        <img
          src="https://ambed-html.vercel.app/main-html/assets/images/shapes/quality-work-shape-2.png"
          alt=""
          className="hidden lg:block animate-custom-bounce"
        />
      </div>
      {/* Content Container */}
      <div className="container mx-auto pt-72  px-4 relative z-10">
        <div className="flex flex-wrap  items-center ">
          {/* Left Section: Images */}
          <div className="w-full xl:w-1/2  relative">
            <div className="relative flex flex-col ">
              <img
                src="https://ambed-html.vercel.app/main-html/assets/images/resources/quality-work-img-1.png"
                alt=""
                className="pt-5  "
              />
              <img
                src="https://ambed-html.vercel.app/main-html/assets/images/resources/quality-work-small-img.jpg"
                alt=""
                className="absolute top-10 right-0 border-8 border-white/50 shadow-orange-200 shadow-lg lg:size-fit sm:size-56 md:size-64 size-40 "
              />
              <div className="absolute  hidden lg:block lg:top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <span className="text-center text-xs text-white bg-black/60 px-4 py-1 rounded-full">
                    NEW COLLECTION 2024
                  </span>
                  <span className="ml-4 bg-white rounded-full p-1.5 "></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="w-full xl:w-1/2 pt-10 xl:pt-0 pl-8">
            <div className="">
              <Link
                to="/about"
                className="text-orange-400 font-semibold uppercase"
              >
                About Us
              </Link>
              <h2 className="text-3xl xl:text-4xl font-bold mt-2 text-slate-700">
                Quality Work That Meets Your Expectations
              </h2>
              <div className="w-16 h-1 bg-orange-400 mt-4"></div>
              <p className="mt-6 text-orange-400">
                Deliver innovative and client-focused solutions in exterior and
                interior design, labor management, furnishing, and construction.
                We ensure seamless project execution with a commitment to
                quality and professionalism in every phase.
              </p>
              <ul className="mt-6 space-y-4 flex flex-col lg:flex-row lg:gap-4">
                <li className="flex items-center">
                  <span className="icon-image-gallery1 mr-4 text-xl"></span>
                  <p className="text-lg flex justify-center items-center gap-5 text-slate-700">
                    <span className="bg-orange-400 p-4 rounded-full ">
                      <IoMdImages size={35} className="text-white" />
                    </span>
                    Innovative <br /> Decoration Designs
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="icon-wallpaper-5 mr-4 text-xl"></span>
                  <p className="text-lg flex justify-center items-center gap-5 text-slate-700">
                    <span className="bg-orange-400 p-4 rounded-full ">
                      <FaGoogleWallet size={35} className="text-white" />
                    </span>{" "}
                    High Quality Wall <br /> Materials
                  </p>
                </li>
              </ul>
              <p className="mt-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration by injected humour.
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-medium">Interior Wall Design</h4>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Exterior Painting</h4>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
