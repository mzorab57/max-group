import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import logo from "../assets/hero/max-group.png";

const Footer = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    var templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        templateParams,
        {
          publicKey: "g2oP9-snny1AUe41h",
        }
      )
      .then(
        () => {
          toast("message sent", {
            bodyClassName: "toast-body",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          toast("There was an error delivering your message!", {
            bodyClassName: "toast-body",
          });
        }
      );
  };

  return (
    <footer className="pt-0 bg-gray-200">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto bg-darkLike py-10 px-4 lg:px-14">
        <div className="grid md:grid-cols-2 gap-14 text-lightGrey">
          {/* company and contact */}
          <div className="flex flex-col text-sm gap-4">
            <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-normal md:items-start md:flex-row gap-4">
              <img src={logo} alt="" className="w-[3.75rem] h-[4.25rem]" />
              <p className="max-w-md rtl:tracking-wider">{t("info")}</p>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-6 md:gap-2 text-lightGrey my-4">
              {/* Address */}
              <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-normal md:items-start md:flex-row gap-x-2">
                <span className="text-primary">{t("address")}:</span>
                <span className="capitalize rtl:tracking-wider">{t("address1")}</span>
              </div>
              {/* Email */}
              {/* <div className="flex gap-x-2">
                <span className="text-primary tracking-widest rtl:tracking-wide">
                  {t("email_address")}:
                </span>
                <span className="hover:text-primary duration-500 cursor-pointer">
                  example@gmail.com
                </span>
              </div> */}
              {/* Email */}
              <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-normal md:items-start md:flex-row gap-x-2">
                <span className="text-primary tracking-widest rtl:tracking-wide">
                  {t("open hours")}:
                </span>
                <span className="hover:text-primary duration-500 cursor-pointer">
                  9:00 - 6:00
                </span>
              </div>
              {/* Phone Numbers */}
              <div className="flex gap-x-2 text-center sm:text-left sm:rtl:text-right flex-col justify-center items-center md:text-start md:justify-normal md:items-start md:flex-row">
                <span className="text-primary tracking-wider">
                  {t("phone")}:
                </span>
                <a
                  href="tel:+9647725219698"
                  className="hover:text-primary duration-500"
                >
                  0772&nbsp;521&nbsp;9698
                </a>
              </div>
            </div>
          </div>

          {/* contact us */}
          <div id="email-section" className="bg-white p-8 pb-10">
            <h3 className="text-lg pb-4 font-medium">
              {t("sne_email_header")}
            </h3>
            {/* form */}
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="relative z-0 w-full mb-7 group mt-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  {t("name")}
                </label>
              </div>

              <div className="relative z-0 w-full mb-7 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  {t("email_address")}
                </label>
              </div>

              <div className="relative z-0 w-full mb-7 group">
                <textarea
                  id="phone"
                  className="block py-2.5 h-14 resize-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                  placeholder=" "
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  {t("your_message")}
                </label>
              </div>

              <button
                type="submit"
                className=" tracking-widest rtl:tracking-wide text-darkLike border border-darkLike hover:border-orange-500 hover:text-orange-500  focus:ring-4 focus:outline-none focus:ring-darkLike font-medium text-sm mt-6 sm:w-auto px-5 py-2.5 text-center uppercase duration-500"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
