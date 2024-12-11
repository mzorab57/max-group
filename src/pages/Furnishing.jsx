import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import f3 from "../assets/furnishing/f3.jpg";
import f4 from "../assets/furnishing/f4.jpg";
import f5 from "../assets/furnishing/f5.jpg";
import f6 from "../assets/furnishing/f6.jpg";
import f7 from "../assets/furnishing/f7.jpg";
import f8 from "../assets/furnishing/f8.jpg";
import f9 from "../assets/furnishing/f9.jpg";
import f10 from "../assets/furnishing/f10.jpg";
import f11 from "../assets/furnishing/f11.jpg";
import f12 from "../assets/furnishing/f12.jpg";
import f13 from "../assets/furnishing/f13.jpg";
import f14 from "../assets/furnishing/f14.jpg";
import f15 from "../assets/furnishing/f15.jpg";
import f16 from "../assets/furnishing/f16.jpg";
import RoutesShape from "../components/RoutesShape";

const Furnishing = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { t } = useTranslation();

  // State for modal visibility and selected image
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of images
  const images = [
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
  ];

  // Open modal and set selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <main className="furnishing-page">
      {/* Header section */}
      <div className="w-full h-[30rem] mb-4 relative">
        <div className="gr absolute z-30 w-full h-[30rem] pointer-events-none" />
        <RoutesShape />
        <img
          src={f7}
          alt=""
          className="object-cover w-full h-full pro-bg brightness-50 pointer-events-none select-none"
        />

        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-3xl sm:text-5xl font-black tracking-wider rtl:tracking-normal whitespace-nowrap">
          {t("maxFurnishing")}
        </h2>
        <div className="absolute top-20 start-2 lg:top-0 lg:start-28 lg:translate-y-1/2 lg:-translate-x-1/3 font-bold text-white bg- py-2 px-3 rounded lg:text-lg whitespace-nowrap">
          <Link to={"/"}>{t("home")} / </Link>
          <span className="ltr:underline">{t("Max Group Furnishing")}</span>
        </div>
      </div>

      {/* Introduction text and featured images */}
      <div className="max-w-[96rem] mx-auto px-4 md:px-10 my-6">
        <section className="text-center mb-20 pt-10">
          <h2 className="text-3xl text-primary font-extrabold tracking-widest uppercase mt-4">
            {t("furniture")}
          </h2>
          <p className="text-lg mt-4 mb-8 text-gray-400 font-medium">
            {t(
              "Discover a wide range of luxury furnishings designed to bring elegance and comfort to your home."
            )}
          </p>

          {/* Additional featured images */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <img
              src={f6}
              alt="Featured Furnishing 1"
              className="w-64 h-64 object-cover rounded-md shadow-md"
            />
            <img
              src={f10}
              alt="Featured Furnishing 2"
              className="w-64 h-64 object-cover rounded-md shadow-md"
            />
            <img
              src={f13}
              alt="Featured Furnishing 3"
              className="w-64 h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Gallery section */}
        <div className="container mx-auto px-4 relative">
          <h3 className="text-2xl text-center mb-8 text-primary font-bold tracking-wide uppercase">
            {t("Explore Our Collection")}
          </h3>
          <div className="lg:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm shadow-lg transform
                  ${index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  ${index % 3 === 0 ? "md:col-span-1 md:row-span-1" : ""}
                  `}
              >
                <img
                  onClick={() => handleImageClick(image)}
                  loading="lazy"
                  src={image}
                  alt={`Gallery item ${index}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 cursor-pointer"
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
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={closeModal}
          />
        </div>
      )}
    </main>
  );
};

export default Furnishing;
