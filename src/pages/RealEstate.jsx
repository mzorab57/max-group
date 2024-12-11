import React, { useEffect } from "react";
import banner from "../assets/house2/kitchen/k1.webp";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import ima from "../assets/house/two/exterior/Max 9.jpg";
import RoutesShape from "../components/RoutesShape";
import Marq from "../components/Marq";
import MaxIntro from "../components/MaxIntro";

const RealEstate = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { t } = useTranslation();

  return (
    <main className=" rtl:tracking-wide">
      {/* Pano */}
      <div className="w-full h-[30rem] mb-4 relative">
        <div className="gr absolute z-30 w-full h-[30rem] pointer-events-none" />
        <RoutesShape />
        <img
          src={banner}
          alt=""
          className="object-cover w-full h-full pro-bg brightness-50 pointer-events-none select-none"
        />

        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-3xl sm:text-5xl font-black tracking-wider rtl:tracking-normal whitespace-nowrap">
          {t("max_estates.company_name")}
        </h2>
        <div className="absolute top-20 start-2 lg:top-0 lg:start-32 lg:translate-y-1/2 lg:-translate-x-1/2 font-bold text-white bg- py-2 px-3 rounded lg:text-lg whitespace-nowrap">
          <Link to={"/"}> {t("home")} / </Link>
          <span>{t("max_estates.title")}</span>
        </div>
      </div>

      <section
        id="about"
        className="relative px-4 mx-auto max-w-[86rem] pb-10 lg:pt-10 lg:pb-14 "
      >
        <div className="w-full overflow-hidden relative pt-20 lg:pt-0 md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto">
          <div className="flex flex-col-reverse xl:flex-row items-center gap-4">
            {/* Left Column (Images and Video) */}
            <div className="xl:w-1/2">
              <div className="flex flex-col sm:flex-row items-center gap-8 relative">
                <div className="p-1.5 rounded-tl-[2.875rem] rounded-br-[2.875rem] h-96">
                  <img
                    src={ima}
                    alt=""
                    className="w-full h-full object-cover rounded-tl-[2.5rem] rounded-br-[2.5rem]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Text Content) */}
            <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0 mb-10 xl:mb-0">
              <div className="text-start mb-8">
                {/* <span className="block text-orange-500 text-xl mb-3 ms-12 relative">
                  <span className="before:absolute before:w-10 before:h-0.5 before:bg-orange-500 before:-start-12 before:top-1/2"></span>
                  {t("max_estates.title")}
                </span> */}

                <h2 className="text-2xl sm:text-4xl font-bold mb-6">
                  {t("max_estates.heading")}{" "}
                  <span className="text-orange-500">
                    {t("max_estates.company_name")}
                  </span>
                </h2>
                <p className="text-sm mb-8 font-light text-lightGrey">
                  {t("max_estates.description")}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6 font-bold">
                {t("max_estates.features", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item} className="flex justify-start items-start">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <MaxIntro />
      <Marq />
    </main>
  );
};

export default RealEstate;
