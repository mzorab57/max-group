import React from "react";
import { motion } from "framer-motion";
import { IoMdImages } from "react-icons/io";
import { FaGoogleWallet } from "react-icons/fa6";

const NewHero = () => {
  return (
    <>
      <div className="overflow-hidden">
        <img
          src="https://i.postimg.cc/3RsrzcFs/inter-4.webp"
          alt="uigh"
          className="size-full absolute object-cover brightness-50"
        />
        <div className="relative h-screen max-w-7xl bg-cover bg-center">
          {/* Gradient border 1 - Top to Bottom Animation */}
          <motion.div
            className="size-full absolute top-0 2xl:left-40 lg:-left-56 px-4 lg:px-9"
            animate={{ y: [0, 10, 0] }} // Animate up and down
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div
              className="relative mx-auto lg:max-w-7xl xl:w-full max-w-4xl h-[90%] lg:top-[40vh] xl:top-[25vh] top-[22vh] sm:top-56 left-0 2xl:left-[100px] lg:left-[20%] -skew-y-12 border-t border-r border-l"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgb(249 115 22), rgba(255, 165, 0, 0.3), transparent) 1",
                borderWidth: "3px",
              }}
            ></div>
          </motion.div>

          {/* Gradient border 2 - Bottom to Top Animation */}
          <motion.div
            className="h-full absolute top-10 sm:top-[43vh] lg:left-[20%] 2xl:left-[40%] left-[12%] px-4 lg:px-24"
            animate={{ y: [10, 0, 10] }} // Animate down and back up
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div
              className="relative w-[100px] sm:w-[120px] 2xl:w-[150px] h-[60%] top-[30vh] sm:top-16 skew-y-12 border-t border-r border-l"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgb(249 115 22), rgba(255, 165, 0, 0.3), transparent) 1",
                borderWidth: "3px",
              }}
            >
              <span className="text-2xl text-white/40 size-full flex justify-center items-start">
                Max
              </span>
            </div>
          </motion.div>

          {/* Gradient border 3 - Bottom to Top Animation */}
          <motion.div
            className="h-full absolute top-0 sm:top-[28vh] lg:top-[35vh] lg:left-[70%] 2xl:left-[85%] left-[55%] px-4 lg:px-10"
            animate={{ y: [10, 0, 10] }} // Animate down and back up
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div
              className="relative w-[100px] sm:w-[120px] 2xl:w-[150px] h-[70%] top-[30vh] sm:top-16 skew-y-12 border-t border-r border-l"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgb(249 115 22), rgba(255, 160, 0, 0.3), transparent) 1",
                borderWidth: "3px",
              }}
            >
              <span className="text-2xl text-white/40 size-full flex justify-center items-start">
                Group
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="relative  text-ambed-gray font-ambed py-[57px] mt-[-250px]  overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-0 left-0 -z-10 float-bob-x overflow-hidden">
          <img
            src="https://ambed-html.vercel.app/main-html/assets/images/shapes/quality-work-shape-1.png "
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
            <div className="w-full xl:w-1/2 pl-8">
              <div className="">
                <span className="text-orange-400 font-semibold uppercase">
                  About Us
                </span>
                <h2 className="text-4xl font-bold mt-2 text-slate-700">
                  Quality Work That Meets Your Expectations
                </h2>
                <div className="w-16 h-1 bg-orange-400 mt-4"></div>
                <p className="mt-6 text-orange-400">
                  Deliver innovative and client-focused solutions in exterior
                  and interior design, labor management, furnishing, and
                  construction. We ensure seamless project execution with a
                  commitment to quality and professionalism in every phase.
                </p>
                <ul className="mt-6 space-y-4 grid lg:flex  ">
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
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration by
                  injected humour.
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-medium">
                      Interior Wall Design
                    </h4>
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
    </>
  );
};

export default NewHero;