import React from "react";
import mayorca from "/partners/mayorca.jpg";
import miran from "/partners/miran.png";
import pak from "/partners/pak.jpg";
import rovar from "/partners/rovar.jpg";
import shacity from "/partners/shacity.jpg";
import shad from "/partners/shad.jpg";
import sharisharan from "/partners/sharisharan.jpg";
import titanictowers from "/partners/titanictowers.jpg";
import suli from "/partners/suli.png";
import homele from "/partners/homele.jpg";

const images = [
  mayorca,
  miran,
  pak,
  sharisharan,
  rovar,
  shad,
  shacity,
  titanictowers,
  suli,
  homele,
];

const Marq = () => {
  return (
    <main
      dir="ltr"
      className="flex flex-col items-center justify-between py-10 overflow-hidden relative bg-gradient-to-b from-white via-primary/10 to-primary/30"
    >
      {/* Left Fog */}
      <h4 className="text-primary text-2xl lg:text-3xl mb-10 font-medium">
        Our Collaborations
      </h4>
      <div className="absolute inset-y-0 left-0 w-8 lg:w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />

      {/* marquee */}
      <div className="flex overflow-hidden select-none gap-4 w-full stopScroll">
        {/* marquee content */}
        <ul className="flex justify-around shrink-0 min-w-full gap-4 enable-animation-x">
          {images.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <img
                src={src}
                alt={`Partner logo ${index + 1}`}
                className="h-28 w-auto rounded-lg"
              />
            </li>
          ))}
        </ul>
        <ul
          aria-hidden="true"
          className="flex justify-around shrink-0 min-w-full gap-4 enable-animation-x"
        >
          {images.map((src, index) => (
            <li key={index + images.length} className="flex-shrink-0">
              <img src={src} alt="" className="h-28 w-auto rounded-lg" />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Fog */}
      <div className="absolute inset-y-0 right-0 w-8 lg:w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />
    </main>
  );
};

export default Marq;
