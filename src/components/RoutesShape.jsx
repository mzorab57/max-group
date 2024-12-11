import React from "react";

const RoutesShape = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 px-4 lg:px-10 z-20 pointer-events-none">
      <div
        className="relative w-full h-[60%] top-[20vh] sm:top-40 lg:h-[80%] -skew-y-6 border-t border-r border-l pointer-events-none"
        style={{
          borderImage:
            "linear-gradient(to bottom, orange, rgba(255, 165, 0, 0.3), transparent) 1",
          borderWidth: "2px",
        }}
      ></div>
    </div>
  );
};

export default RoutesShape;
