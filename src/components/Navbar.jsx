/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useState } from "react";
import Logo from "../assets/hero/max-group.jpg";
import Hamburger from "hamburger-react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import caret from "../assets/caret-down.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          const id = section.getAttribute("id");
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Function to handle smooth scrolling
  const smoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {isVisible && <BookingModal setIsVisible={setIsVisible} />}
      <nav className="lg:sticky fixed w-full z-50 top-0 start-0 bg-white text-slate-900 scrolling py-4">
        <div className="max-w-[93rem] flex flex-wrap items-center justify-between mx-auto px-2 md:px-4">
          <a href="/" className="flex items-center ps-2 md:ps-0">
            <img
              src={Logo}
              className="h-[2.25rem] rounded"
              alt={t("alt_logo")} // Updated
            />
            <div className="whitespace-nowrap md:text-xl font-semibold text-2xl ps-2">
              <span>{t("max")}</span>{" "}
              <span className="hidden lg:inline">{t("group")}</span>{" "}
            </div>
          </a>
          <div
            className={`${
              location.pathname !== "/" && "me-2"
            } flex lg:order-2 space-x-0.5 sm:gap-2 md:space-x-0 rtl:space-x-reverse justify-end items-center lg:w-[7.5rem] -me-1`}
          >
            <LanguageSelect sticky={sticky} />

            <a
              href="#email-section"
              className="cursor-pointer text-xl hover:scale-110 ease-in-out duration-150 mt-[1px] hover:text-primary ps-3"
            >
              <RxEnvelopeClosed />
            </a>

            {location.pathname === "/" && (
              /* burger menu */
              <div className="lg:hidden overflow-hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={25}
                  duration={0.3}
                  rounded
                />
              </div>
            )}
          </div>
          <div
            className={`items-center justify-between w-full lg:w-auto md:order-1 overflow-hidden lg:overflow-visible rtl:text-gray-500 rtl:text-opacity-70 transition-all duration-300 ${
              isOpen ? "h-screen lg:h-auto" : "h-0 lg:h-auto lg:flex"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col rtl:tracking-normal rtl:text-sm tracking-widest uppercase rounded-lg text-xs gap-5 py-8 lg:p-0 lg:gap-0 lg:text-[0.65rem] lg:space-x-6 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:text-inherit lg:bg-transparent lg:py-0">
              {/* Conditionally render Home link */}
              {location.pathname === "/" && (
                <li
                  className="overflow-hidden rtl:text-gray-500 rtl:text-opacity-70 cursor-pointer"
                  onClick={() => smoothScroll("home")}
                >
                  <a
                    className={`${
                      active === "home"
                        ? "before:bg-primary after:bg-primary text-primary before:left-1/2 after:right-1/2 italic"
                        : "before:left-0 hover:before:left-1/2 rtl:before:right-1/2 rtl:hover:before:right-0 before:right-0 after:right-0 hover:after:right-1/2"
                    }
                  "focus:outline-none focus:ring-0 block relative px-3.5 pt-1 pb-1.5 hover:text-primary rounded hover:bg-black/5 lg:hover:bg-transparent lg:rounded-none before:absolute before:bottom-0 before:w-1/2 before:h-0.5 hover:before:bg-primary before:content-none lg:before:content-[''] before:transition-all before:duration-200 before:ease-linear hover:transition-all hover:duration-200 hover:ease-linear  after:absolute after:top-0 after:w-1/2 after:h-0.5 hover:after:bg-primary after:content-none lg:after:content-[''] after:transition-all after:duration-200 after:ease-linear"
                  `}
                    aria-current="page"
                  >
                    {t("home")}
                  </a>
                </li>
              )}
              {location.pathname === "/" && (
                <li
                  className=" overflow-hidden rtl:text-gray-500 rtl:text-opacity-70 cursor-pointer"
                  onClick={() => smoothScroll("about")}
                >
                  <a
                    className={`${
                      active === "about"
                        ? "before:bg-primary after:bg-primary text-primary before:left-1/2 after:right-1/2 italic"
                        : "before:left-0 hover:before:left-1/2 rtl:before:right-1/2 rtl:hover:before:right-0 before:right-0 after:right-0 hover:after:right-1/2"
                    }
              "focus:outline-none focus:ring-0 block relative px-3.5 pt-1 pb-1.5 hover:text-primary rounded hover:bg-black/5 lg:hover:bg-transparent lg:rounded-none before:absolute before:bottom-0 before:w-1/2 before:h-0.5 hover:before:bg-primary lg:before:content-[''] before:content-none before:transition-all before:duration-200 before:ease-linear hover:transition-all hover:duration-200 hover:ease-linear  after:absolute after:top-0 after:w-1/2 after:h-0.5 hover:after:bg-primary after:content-none lg:after:content-[''] after:transition-all after:duration-200 after:ease-linear "
              `}
                    aria-current="page"
                  >
                    {t("about")}
                  </a>
                </li>
              )}
              {location.pathname === "/" && (
                <li
                  className=" rtl:text-gray-500 rtl:text-opacity-70 relative"
                  onClick={() => {
                    setToggleLang(!toggleLang);
                  }}
                >
                  <a
                    className={`${
                      active === "max"
                        ? "before:bg-primary after:bg-primary text-primary before:left-1/2 after:right-1/2 italic"
                        : "before:left-0 hover:before:left-1/2 rtl:before:right-1/2 rtl:hover:before:right-0 before:right-0 after:right-0 hover:after:right-1/2"
                    }
              "focus:outline-none focus:ring-0 block relative px-3.5 pt-1 pb-1.5 hover:text-primary rounded hover:bg-black/5 lg:hover:bg-transparent lg:rounded-none before:absolute before:bottom-0 before:w-1/2 before:h-0.5 hover:before:bg-primary lg:before:content-[''] before:content-none before:transition-all before:duration-200 before:ease-linear hover:transition-all hover:duration-200 hover:ease-linear  after:absolute after:top-0 after:w-1/2 after:h-0.5 hover:after:bg-primary after:content-none lg:after:content-[''] after:transition-all after:duration-200 after:ease-linear "
              `}
                    aria-current="page"
                  >
                    <div className="flex items-center gap-1 ">
                      <span className=" cursor-pointer">{t("max_group")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="14"
                        height="14"
                        className={`fill-current text-black transition-transform duration-300 ${
                          toggleLang ? "rotate-180 text-orange-500" : ""
                        }`}
                      >
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </div>
                  </a>

                  <div
                    className={`${
                      toggleLang
                        ? "fixed top-0 left-0 w-full h-screen z-40"
                        : "w-full h-0"
                    }`}
                  />
                  <div
                    className={`${
                      toggleLang
                        ? "absolute start-2 lg:-start-4 top-10 z-50 lg:shadow-xl rounded-lg border"
                        : "hidden"
                    }`}
                  >
                    <ul className="bg-white text-black flex flex-col justify-center items-center w-[9rem] py-1 rounded-lg">
                      <li className="capitalize text-sm w-full text-center border-b py-1">
                        <Link
                          className="hover:text-primary text-secondary ease-in-out duration-100 cursor-pointer"
                          to={"/services/engineering"}
                          onClick={() => setIsOpen(false)}
                        >
                          Max Group
                        </Link>
                      </li>
                      <li className="capitalize text-sm w-full text-center border-b py-1">
                        <Link
                          className="hover:text-primary text-secondary ease-in-out duration-100 cursor-pointer"
                          to={"/services/vera"}
                          onClick={() => setIsOpen(false)}
                        >
                          Vera
                        </Link>
                      </li>
                      <li className="capitalize text-sm w-full text-center border-b py-1">
                        <Link
                          className="hover:text-primary text-secondary ease-in-out duration-100 cursor-pointer"
                          to={"/services/furnishing"}
                          onClick={() => setIsOpen(false)}
                        >
                          {" "}
                          Max Furnishing
                        </Link>
                      </li>
                      <li className="capitalize text-sm w-full text-center py-1">
                        <Link
                          className="hover:text-primary text-secondary ease-in-out duration-100 cursor-pointer"
                          to={"/services/real-estate"}
                          onClick={() => setIsOpen(false)}
                        >
                          Max Real Estate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
              {location.pathname === "/" && (
                <li
                  className=" overflow-hidden rtl:text-gray-500 rtl:text-opacity-70 cursor-pointer"
                  onClick={() => smoothScroll("services")}
                >
                  <a
                    className={`${
                      active === "services"
                        ? "before:bg-primary after:bg-primary text-primary before:left-1/2 after:right-1/2 italic"
                        : "before:left-0 hover:before:left-1/2 rtl:before:right-1/2 rtl:hover:before:right-0 before:right-0 after:right-0 hover:after:right-1/2"
                    }
              "focus:outline-none focus:ring-0 block relative px-3.5 pt-1 pb-1.5 hover:text-primary rounded hover:bg-black/5 lg:hover:bg-transparent lg:rounded-none before:absolute before:bottom-0 before:w-1/2 before:h-0.5 hover:before:bg-primary lg:before:content-[''] before:content-none before:transition-all before:duration-200 before:ease-linear hover:transition-all hover:duration-200 hover:ease-linear  after:absolute after:top-0 after:w-1/2 after:h-0.5 hover:after:bg-primary after:content-none lg:after:content-[''] after:transition-all after:duration-200 after:ease-linear "
              `}
                    aria-current="page"
                  >
                    {t("services")}
                  </a>
                </li>
              )}

              {location.pathname === "/" && null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
