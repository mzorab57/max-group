import React from "react";
import img from "../../public/partners/UntitledProject.png"; // Keep the import as is
const ParralelShape = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 px-4 lg:px-10 z-20 pointer-events-none">
      {/* Existing Shape */}
      <div
        className="relative overflow-hidden w-full h-[60%] top-[20vh] sm:top-40 md:top-24 lg:h-[80%] -skew-y-3 border-t border-r border-l"
        style={{
          borderImage:
            "linear-gradient(to bottom, orange, rgba(255, 165, 0, 0.3), transparent) 1",
          borderWidth: "3px",
        }}
      >
      <img src={img} alt="ni" className="absolute lg:-left-5 scale-110 lg:top-52 -left-60 top-14 opacity-15" />
        {/* Left Parallel Lines */}
        <div className="absolute top-0 end-10 h-full flex  space-y-4 pl-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="w-[2px] h-32 bg-gradient-to-b from-orange-500/80 to-transparent"
            ></div>
          ))}
        </div>
        {/* Left Parallel Lines */}
        <div className="absolute top-0 end-40 h-full flex  space-y-4 pl-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="w-[2px] h-40 bg-gradient-to-b from-orange-500/80 to-transparent"
            ></div>
          ))}
        </div>
       
        {/* Left Parallel Lines */}
        <div className="absolute top-0 end-72 h-full flex  space-y-4 pl-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="w-[2px] h-48 bg-gradient-to-b from-orange-500/80 to-transparent"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParralelShape;

{
  /* <HiOutlineBuildingLibrary className="absolute end-0 opacity-15 text-primary" size={200} /> */
}
