import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdZoomOutMap } from "react-icons/md";
import AOS from "aos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import mx66 from "../assets/house/two/interior/bedroom/Max 66.jpg";
import mx67 from "../assets/house/two/interior/bedroom/Max 67.jpg";

// livin
import h2l1 from "../assets/house2/living/l1.jpg";
import h2l2 from "../assets/house2/living/l2.jpg";
import h2l3 from "../assets/house2/living/l3.jpg";
import h2l4 from "../assets/house2/living/l4.jpg";
import h2l5 from "../assets/house2/living/l5.jpg";
import h2l6 from "../assets/house2/living/l6.jpg";
import h2l7 from "../assets/house2/living/l7.jpg";
import h2l8 from "../assets/house2/living/l8.jpg";
import h2l9 from "../assets/house2/living/l9.jpg";
import h2l10 from "../assets/house2/living/l10.jpg";

import h2k1 from "../assets/house2/kitchen/k1.webp";
import h2k2 from "../assets/house2/kitchen/k2.webp";
import h2k3 from "../assets/house2/kitchen/k3.webp";
import h2k4 from "../assets/house2/kitchen/k4.webp";
import h2k5 from "../assets/house2/kitchen/k5.webp";
import h2k6 from "../assets/house2/kitchen/k6.webp";
import m11 from "../assets/house/one/interior/bathroom/m11.jpg";
import bg from "/images/bgre.jpg";

import { useTranslation } from "react-i18next";

function Gallery() {
  let images = [
    { src: mx66 },
    { src: mx67 },
    { src: h2l1 },
    { src: h2l2 },
    { src: h2l3 },
    { src: h2l4 },
    { src: h2l5 },
    { src: h2l6 },
    { src: h2l7 },
    { src: h2l8 },
    { src: h2l9 },
    { src: h2l10 },
    { src: h2k1 },
    { src: h2k2 },
    { src: h2k3 },
    { src: h2k4 },
    { src: h2k5 },
    { src: h2k6 },
    // { src: m10 },
    { src: m11 },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [index, setIndex] = useState(-1);
  const [isOpen, setModalOpen] = useState(false);
  const setIsOpen = (state, i) => {
    setIndex(i);
    setModalOpen(state);
  };

  const { t } = useTranslation();

  return (
    <section
      id="works"
      className="py-14 lg:py-24 overflow-hidden relative bg-cover bg-center bg-no-repeat"
    >
      <div
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
        }}
        className="container mx-auto relative z-10 max-w-full"
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12 text-primary capitalize">
          {t("take a look")}
        </h2>

        <div className="relative z-20">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i} className="w-full">
                <div
                  className="group relative flex justify-center items-center"
                  onClick={() => setIsOpen(true, i)}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={`Image ${i}`}
                    className="object-cover w-full h-96 lg:h-[500px] cursor-pointer"
                  />
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-primary/80 border-4 border-white text-center flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <MdZoomOutMap className="text-white text-4xl " />{" "}
                    {/* Replace "heloo" with this */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Lightbox
          index={index}
          slides={images}
          open={isOpen}
          plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          close={() => setIsOpen(false)}
          styles={{
            thumbnail: {
              borderColor: "#FB8C00",
            },
          }}
        />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 lg:opacity-40 opacity-100">
        <img src={bg} alt="jhgj" />
      </div>
    </section>
  );
}

export default Gallery;
