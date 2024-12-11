import { useState } from "react";
import i18next from "i18next";
import england from "../assets/england.svg";
import iraq from "../assets/iraq.svg";
import kurd from "../assets/kurd.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LanguageSelect = ({ sticky }) => {
  const [toggleLang, setToggleLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const handleKu = () => {
    toast("زمانی کوردی دیاری کرا", {
      bodyClassName: "toast-body",
    });
    setCurrentLang("کوردی");
    i18next.changeLanguage("ku");
    document.body.dir = "rtl";
  };
  const handleEn = () => {
    toast("English language selected", {
      bodyClassName: "toast-body",
    });
    setCurrentLang("English");
    i18next.changeLanguage("en");
    document.body.dir = "ltr";
  };
  const handleAr = () => {
    toast("تم اختیار اللغة العربیة", {
      bodyClassName: "toast-body",
    });
    setCurrentLang("عربي");
    i18next.changeLanguage("ar");
    document.body.dir = "rtl";
  };

  return (
    <div className="relative" onClick={() => setToggleLang(!toggleLang)}>
      <ToastContainer
        theme="light"
        hideProgressBar
        autoClose={1500}
        rtl={true}
        position="top-left"
      />
      <div
        className={`cursor-pointer text-lg hover:scale-110 ease-in-out duration-150 mt-[1px] hover:text-primary ${
          sticky ? "text-inherit" : ""
        }`}
      >
        {currentLang === "English" ? (
          <img src={england} alt="england" className=" w-6" />
        ) : currentLang === "عربي" ? (
          <img src={iraq} alt="iraq" className=" w-6" />
        ) : (
          <img src={kurd} alt="kurd" className=" w-6" />
        )}
      </div>
      <div
        className={`${
          toggleLang
            ? "fixed top-0 left-0 w-full h-screen bg-slate-50/5 backdrop-blur-sm z-40"
            : "w-full h-0"
        }`}
      />
      <div
        className={`${
          toggleLang
            ? "absolute -left-8 top-10 z-50 shadow-xl rounded-lg border"
            : "hidden"
        }`}
      >
        <ul className="bg-white text-black flex flex-col justify-center items-center w-[5rem] py-1 rounded-lg">
          {currentLang !== "English" && (
            <li
              className="hover:text-primary text-secondary ease-in-out duration-100 cursor-pointer capitalize text-sm w-full text-center border-b py-1"
              onClick={handleEn}
            >
              english
            </li>
          )}
          {currentLang !== "کوردی" && (
            <li
              className="hover:text-primary font-kurdi text-secondary ease-in-out duration-100 cursor-pointer capitalize w-full text-center py-1 border-b last-of-type:border-b-0"
              onClick={handleKu}
            >
              کوردی
            </li>
          )}
          {currentLang !== "عربي" && (
            <li
              className="hover:text-primary font-kurdi text-secondary ease-in-out duration-100 cursor-pointer capitalize w-full text-center py-1"
              onClick={handleAr}
            >
              عربي
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelect;
