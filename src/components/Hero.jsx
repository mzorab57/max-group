import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import stationaryOne from "../assets/furnishing/f5.jpg";
import stationaryTwo from "../assets/house/one/interior/bathroom/m10.jpg";
import stationaryThree from "../assets/house/one/exterior/m32.webp";
import max from "../assets/hero/max-group.jpg";
// social icons from react-icons
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  {
    image: stationaryOne,
    alt: "max group",
  },
  {
    image: stationaryTwo,
    alt: "max group",
  },
  {
    image: stationaryThree,
    alt: "max group",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const [jump, setJump] = useState(0);

  // auto next for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setJump((prevJump) => (prevJump < slides.length - 1 ? prevJump + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative  mx-auto" >
      <div className="w-full h-screen overflow-hidden relative pt-20 lg:pt-0">
        <div key={jump}>
          <div className="flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center md:relative">
            {/* Headline */}
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1000"
              className="z-30 lg:px-[1.75rem] p-4 absolute top-20 start-0"
            >
              <h1 className="tracking-wide text-4xl sm:text-5xl md:text-6xl font-medium rtl:font-medium leading-7 rtl:leading-10 md:rtl:leading-[5.5rem] relative text-[#22252a]] text-white italic rtl:not-italic">
                {t("hero1")}
                <span className="text-primary ps-2 end-6 bottom-6 text-2xl md:text-5xl font-extralight tracking-normal md:bottom-14 md:end-2 rtl:bottom-10 md:rtl:text-4xl rtl:end-2 md:rtl:bottom-[4.5rem]">
                  {t("hero2")}
                </span>
                <span className="block ps-14 capitalize">{t("hero3")}</span>
              </h1>
            </div>

            {/* Image */}
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="100"
              className="w-full h-screen overflow-hidden text-center aspect-[4/3] brightness-50 z-10"
              // className="w-full md:w-[55%] md:h-[37rem] lg:h-[41rem] overflow-hidden text-center aspect-[4/3] z-10 my-4 md:my-0"
            >
              <div className="gr absolute z-30 w-full h-full rotate-180 pointer-events-none" />
              <img
                src={slides[jump].image}
                alt={t(`slides.${jump}.alt`)} // Dynamic alt text from translations
                className="w-full h-full object-cover brightness-"
              />
            </div>

            {/* Socials */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="700"
              data-aos-offset="0"
              className="absolute bottom-4 md:bottom-24 start-4 md:start-8 flex justify-center items-center gap-6 z-20"
            >
              <a
                href="https://www.facebook.com/Maxgroupp"
                className="border rounded-full p-1.5 w-[30px] h-[30px] border-white text-white scale-90 hover:text-primary hover:border-primary duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/maxgroup__/"
                className="border rounded-full p-1.5 w-[30px] h-[30px] border-white text-white scale-90 hover:text-primary hover:border-primary duration-300"
              >
                <FaInstagram />
              </a>
            </div>

            {/* max shape shape */}
            <div className="w-full  h-full absolute top-0 end-0 px-4 lg:px-10 z-30 pointer-events-none lg:top-14">
            <div dir="ltr" className="overflow-hidden  ">
              
                <div className="relative h-screen w-full  max-w-5xl mx-auto ">
                  {/* Gradient border 1 - Top to Bottom Animation */}
                  <motion.div
                    className="size-full absolute px-4 "
                    animate={{ y: [0, 10, 0] }} // Animate up and down
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <div
                      className="relative h-[90%] top-[22vh] sm:top-56  xl:top-[25vh] -skew-y-12 border-t border-r border-l"
                      style={{
                        borderImage:
                          "linear-gradient(to bottom, rgb(249 115 22), rgba(255, 165, 0, 0.3), transparent) 1",
                        borderWidth: "3px",
                      }}
                    ></div>
                  </motion.div>

                  {/* Gradient border 2 - Bottom to Top Animation */}
                  <motion.div
                    className="h-full absolute top-10 sm:top-[43vh] lg:left-[22%]  left-[12%] px-4 "
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
                    </div>
                  </motion.div>

                  {/* Gradient border 3 - Bottom to Top Animation */}
                  <motion.div
                    className="h-full absolute top-0 sm:top-[28vh] lg:top-[35vh] left-[55%] lg:left-[60%]  px-4 "
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
                     
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex flex-col justify-center items-center gap-8 absolute top-1/2 translate-y-1/4 end-6 sm:-translate-y-1/2 z-20">
          {slides.map((_, index) => (
            <button
              key={`item${index}`}
              className={`border border-white px-3 py-[1px] duration-700 ${
                jump === index && "bg-primary"
              }`}
              onClick={() => setJump(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
