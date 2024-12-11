import React from "react";
import { useTranslation } from "react-i18next";
import ima from "../assets/hero/hero1.jpg";
import pano from "../assets/hero/hero2.jpg";
import p2 from "../assets/hero/hero3.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative px-4 mx-auto max-w-[86rem] pb-10 lg:pt-20 lg:pb-0"
    >
      <div className="w-full overflow-hidden relative pt-20 lg:pt-0 md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-14">
          {/* Left Column (Images and Video) */}
          <div className="xl:w-1/2">
            <div className="flex flex-col sm:flex-row items-center gap-8 relative">
              <div className="absolute -z-10 w-[100%] h-[90%] pp-bg rounded-tl-3xl"></div>
              {/* fog */}
              <div className="absolute -z-10 inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white"></div>
              </div>

              {/* fog */}
              <div className="absolute -z-10 inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
              </div>

              <div className="sm:w-1/2">
                <div className="p-1.5 rounded-tl-[2.875rem] rounded-br-[2.875rem] border border-primary">
                  <img
                    src={ima}
                    alt=""
                    className="w-full object-cover rounded-tl-[2.5rem] rounded-br-[2.5rem]"
                  />
                </div>
              </div>
              <div className="sm:w-1/2 space-y-8">
                <div className="h-80 p-1.5 rounded-tl-[2.875rem] rounded-br-[2.875rem] border-2 border-primary">
                  <img
                    src={pano}
                    alt=""
                    className="object-cover h-full w-full rounded-tl-[2.5rem] rounded-br-[2.5rem]"
                  />
                </div>
                <div className="h-80 p-1.5 rounded-tr-[2.875rem] rounded-bl-[2.875rem] border-2 border-primary">
                  <img
                    src={p2}
                    alt=""
                    className="object-cover h-full w-full rounded-tr-[2.5rem] rounded-bl-[2.5rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0 mb-10 xl:mb-0">
            <div className="text-start mb-8">
              <span className="block text-orange-500 text-xl mb-3 ms-12 relative">
                <span className="before:absolute before:w-10 before:h-0.5 before:bg-orange-500 before:-start-12 before:top-1/2"></span>
                {t("about_us.title")}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold mb-6">
                {t("about_us.heading")} <br />
                <span className="text-orange-500">
                  {t("about_us.company_name")}
                </span>
              </h2>
              <p className="text-sm mb-8 font-light text-lightGrey">
                {t("about_us.description")}
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-6 font-bold">
              {t("about_us.features", {
                returnObjects: true,
              }).map((item) => (
                <li key={item} className="flex items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-orange-500 me-2"
                  >
                    <path
                      d="M16.002 1L5.22195 11L1.00195 6.5"
                      stroke="#F44E19"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              to="/about"
              className="inline-block bg-orange-500 text-white py-2 px-4 rounded-sm transition hover:bg-orange-600"
            >
              {t("about_us.more_button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
