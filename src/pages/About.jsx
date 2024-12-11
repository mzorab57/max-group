import React, { useEffect } from "react";
import banner from "../assets/house/one/interior/stairs/m33.jpg";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
// import AboutUs from "../components/AboutUs";
import ClientArea from "../components/ClientArea";
import RoutesShape from "../components/RoutesShape";
import NewAbout from "../components/NewAbout";
const About = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { t } = useTranslation();

  return (
    <main className="">
      {/* nav */}
      {/* Pano */}
      <div className="w-full h-[30rem] mb-4 relative z-50">
        <div className="gr absolute z-30 w-full h-[30rem] pointer-events-none" />
        <RoutesShape />
        {/* <img src={Pano} alt="" className=" object-cover w-full h-full" /> */}
        <img
          src={banner}
          alt=""
          className="object-cover w-full h-full pro-bg brightness-50 pointer-events-none select-none"
        />
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-5xl font-black tracking-wider rtl:tracking-normal whitespace-nowrap">
          {t("about")}
        </h2>
        <div className="absolute top-20 start-2 lg:top-0 lg:start-28 lg:translate-y-1/2 lg:-translate-x-1/2 font-bold text-white bg- py-2 px-3 rounded lg:text-lg whitespace-nowrap">
          <Link to={"/"}> {t("home")}</Link>
          <span> / {t("about")}</span>
        </div>
      </div>
      {/* <AboutUs /> */}
      <NewAbout />
      <div className="pp-bg1 my-20 py-10">
        {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full"> */}
        <ClientArea />
        {/* </div> */}
      </div>
    </main>
  );
};

export default About;
