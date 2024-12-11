import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0) });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      {goUp ? (
        <h2
          onClick={scrollToTop}
          className="rtl:tracking-wider group bg-secondary text-gold fixed bottom-4 end-5 z-30 font-bold h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full uppercase cursor-pointer ease-linear duration-150 lg:bottom-[2rem] shadow-2xl"
        >
          <span>
            <FaArrowUp className="text-2xl duration-300 group-hover:-translate-y-1" />
          </span>
        </h2>
      ) : null}
    </>
  );
};

export default BackToTop;
