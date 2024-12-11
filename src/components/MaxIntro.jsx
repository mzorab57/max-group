import React from "react";
import mayorca from "../assets/vids/mayorka.mp4";
import miran from "../assets/vids/miran-edited.mp4";
import shad from "../assets/vids/shadApt.mp4";

const MaxIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mx-auto max-w-[86rem] pb-10 lg:pt-10 lg:pb-14 ">
      {/* First Video */}
      <div className="">
        <video
          src={mayorca}
          className="w-full h-[30rem] rounded-lg mb-4"
          controls
        />
        <h3 className="text-lg font-semibold text-primary/70 text-center w-full lg:text-2xl capitalize">
          mayorca city
        </h3>
      </div>

      {/* Second Video */}
      <div className="">
        <video
          src={shad}
          className="w-full h-[30rem] rounded-lg mb-4"
          controls
        />
        <h3 className="text-lg font-semibold text-primary/70 text-center w-full lg:text-2xl capitalize">
          shari shad
        </h3>
      </div>

      {/* Third Video */}
      <div className="">
        <video
          src={miran}
          className="w-full h-[30rem] rounded-lg mb-4"
          controls
        />
        <h3 className="text-lg font-semibold text-primary/70 text-center w-full lg:text-2xl capitalize">
          miran city
        </h3>
      </div>
    </div>
  );
};

export default MaxIntro;
