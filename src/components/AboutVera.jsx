import React from "react";
import v7 from "../assets/vera/m29.jpg";

const AboutVera = () => {
  return (
    <div className="w-full overflow-hidden relative pt-20 lg:pt-0 md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto space-y-20 mb-10">
      {/* Laurers Section */}
      <div className="flex flex-col xl:flex-row items-center gap-14">
        {/* Left Column (Image) */}
        <div className="xl:w-1/2">
          <div className="p- rounded-tl-[2.5rem] rounded-br-[2.55rem] border-2 border-[#31213c]">
            <img
              src={v7}
              alt="Laurers Decoration"
              className="w-full object-cover rounded-tl-[2.5rem] rounded-br-[2.5rem]"
            />
          </div>
        </div>

        {/* Right Column (Text Content) */}
        <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#31213c]">
            The Beauty of Laurers <br />
          </h2>
          <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
            Discover the timeless appeal of laurers, crafted to bring a touch of
            elegance and sophistication to your interior spaces with
            customizable designs that allow you to tailor their look to match
            your interior style. Made from high-quality materials for
            long-lasting durability, laurers are designed for straightforward,
            hassle-free installation.
          </p>
        </div>
      </div>

      {/* Baseboards Section */}
      <div className="flex flex-col xl:flex-row-reverse items-center gap-14">
        {/* Right Column (Image) */}
        <div className="xl:w-1/2">
          <div className="p- rounded-tl-[2.5rem] rounded-br-[2.55rem] border-2 border-[#31213c]">
            <img
              src={v7}
              alt="Baseboards Decoration"
              className="w-full object-cover rounded-tl-[2.5rem] rounded-br-[2.5rem]"
            />
          </div>
        </div>

        {/* Left Column (Text Content) */}
        <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#31213c]">
            Elegant Baseboards <br />
          </h2>
          <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
            Enhance your space with baseboards that offer both functional
            protection and elegant style. These baseboards feature a protective
            design to shield walls from everyday wear and tear, are available in
            versatile styles to complement any interior decor, and are
            engineered for quick and easy installation.
          </p>
        </div>
      </div>

      {/* Classic Moldings Section */}
      <div className="flex flex-col xl:flex-row items-center gap-14">
        {/* Left Column (Image) */}
        <div className="xl:w-1/2">
          <div className="p- rounded-tl-[2.5rem] rounded-br-[2.55rem] border-2 border-[#31213c]">
            <img
              src={v7}
              alt="Classic Moldings Decoration"
              className="w-full object-cover rounded-tl-[2.5rem] rounded-br-[2.5rem]"
            />
          </div>
        </div>

        {/* Right Column (Text Content) */}
        <div className="xl:w-1/2 text-center xl:text-start ps-2 xl:ps-0">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#31213c]">
            Classic Moldings <br />
          </h2>
          <p className="text-sm mb-8 font-light text-lightGrey max-w-lg">
            Add classic, detailed moldings that elevate the style and
            sophistication of any room. With intricate designs and traditional
            patterns, these moldings enhance your space's character, offering
            long-lasting durability and straightforward installation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVera;
