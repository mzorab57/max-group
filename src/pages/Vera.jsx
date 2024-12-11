import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import v3 from "../assets/vera/m3.jpg";
import v4 from "../assets/vera/m4.jpg";
import v5 from "../assets/vera/m22.jpg";
import v6 from "../assets/vera/m24.jpg";
import v7 from "../assets/vera/m29.jpg";
import v8 from "../assets/vera/m30.jpg";
import v9 from "../assets/vera/m39.jpg";
import v10 from "../assets/vera/m41.jpg";
import v11 from "../assets/vera/m43.jpg";
import v12 from "../assets/vera/m44.jpg";
import v13 from "../assets/vera/m52.jpg";
import v14 from "../assets/vera/m55.jpg";
import v15 from "../assets/vera/m62.jpg";
import v16 from "../assets/vera/max63.jpg";
import RoutesShape from "../components/RoutesShape";
import AboutVera from "../components/AboutVera";

// Overall Images
const images = [v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16];

const Vera = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <main>
      {/* Pano */}
      <div className="w-full h-[30rem] mb-4 relative">
        <div className="gr absolute z-30 w-full h-[30rem] pointer-events-none" />
        <RoutesShape />
        <img
          src={v16}
          alt=""
          className="object-cover w-full h-full pro-bg brightness-50 pointer-events-none select-none"
        />
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-5xl font-black tracking-wider rtl:tracking-normal whitespace-nowrap">
          Vera
        </h2>
        <div className="absolute top-20 start-2 lg:top-0 lg:start-28 lg:translate-y-1/2 lg:-translate-x-1/2 font-bold text-white py-2 px-3 rounded lg:text-lg whitespace-nowrap">
          <Link to={"/"}> {t("home")} / </Link>
          <span className="ltr:underline"> {t("vera")} </span>
        </div>
      </div>

      <div className="max-w-[96rem] flex flex-wrap items-center justify-between mx-auto px-4 md:px-10 my-6">
        <div className="container mx-auto px4">
          <h2 className="text-3xl text-center mb8 text-[#6E4F75] font-extrabold tracking-widest rtl:tracking-wide uppercase mt-4">
            {t("Interior Decoration")}
          </h2>

          {/* AboutVera */}
          <section
            id="about"
            className="relative px-2 mx-auto max-w-[86rem] pb-10 lg:pt-20 lg:pb-0"
          >
            {/* <AboutVera /> */}

            <div className="w-full overflow-hidden relative pt-20 lg:pt-0 md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto space-y-20 mb-10">
              {/* Laurers Section */}
              <div className="flex flex-col xl:flex-row items-center gap-14">
                {/* Left Column (Image) */}
                <div className="xl:w-1/2">
                  <div className="border-2 border-[#6E4F75]">
                    <img
                      src={v7}
                      alt="Laurers Decoration"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column (Text Content) */}
                <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#6E4F75]">
                    The Beauty of Laurers <br />
                    {/* <span className="text-[#6E4F75]">Timeless Appeal</span> */}
                  </h2>
                  <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
                    Discover the timeless appeal of laurers, crafted to bring a
                    touch of elegance and sophistication to your interior spaces
                    with customizable designs that allow you to tailor their
                    look to match your interior style. Made from high-quality
                    materials for long-lasting durability, laurers are designed
                    for straightforward, hassle-free installation.
                  </p>
                </div>
              </div>

              {/* Baseboards Section */}
              <div className="flex flex-col xl:flex-row-reverse items-center gap-14">
                {/* Right Column (Image) */}
                <div className="xl:w-1/2">
                  <div className="border-2 border-[#6E4F75]">
                    <img
                      src={v15}
                      alt="Baseboards Decoration"
                      className="w-full object-cover max-h-96 object-bottom"
                    />
                  </div>
                </div>

                {/* Left Column (Text Content) */}
                <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#6E4F75]">
                    Elegant Baseboards <br />
                    {/* <span className="text-[#6E4F75]">Functional and Stylish</span> */}
                  </h2>
                  <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
                    Enhance your space with baseboards that offer both
                    functional protection and elegant style. These baseboards
                    feature a protective design to shield walls from everyday
                    wear and tear, are available in versatile styles to
                    complement any interior decor, and are engineered for quick
                    and easy installation.
                  </p>
                </div>
              </div>

              {/* Classic Moldings Section */}
              <div className="flex flex-col xl:flex-row items-center gap-14">
                {/* Left Column (Image) */}
                <div className="xl:w-1/2">
                  <div className="border-2 border-[#6E4F75]">
                    <img
                      src={v16}
                      alt="Classic Moldings Decoration"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column (Text Content) */}
                <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#6E4F75]">
                    Classic Moldings <br />
                    {/* <span className="text-[#6E4F75]">Timeless Detail</span> */}
                  </h2>
                  <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
                    Add classic, detailed moldings that elevate the style and
                    sophistication of any room. With intricate designs and
                    traditional patterns, these moldings enhance your space's
                    character, offering long-lasting durability and
                    straightforward installation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 lg:px-9">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm shadow-lg transform
                  ${index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  ${index % 3 === 0 ? "md:col-span-1 md:row-span-1" : ""}
                  hover:shadow-2xl transition-all duration-500 ease-in-out`}
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`Gallery item ${index}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <img
            src={currentImage}
            alt="Full screen"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </main>
  );
};

export default Vera;
