import React from "react";
import { useTranslation } from "react-i18next";
import ParralelShape from "../ui/ParralelShape";
import CardImage from "../ui/CardImage";
import { cardData } from "../data/cardData"; // Keep the import as is

import { Link } from "react-router-dom";

export default function BranchCards() {
  const { t } = useTranslation();
  const cards = cardData(); // Call the cardData function to get the array

  return (
    <section
      id="max"
      className="selection:bg-primary selection:text-white max-w-[150rem] mx-auto px-2 py-12"
    >
      {cards.map((card) => (
        <div key={card.id} className="card-container relative skew-y-1">
          <ParralelShape />
          <Link
            to={card.link}
            className="flex  items-center gap-0.5 group absolute z-20 -left-11 lg:left-0 bottom-32 rotate-90 lg:bottom-14 tracking-widest text-sm border-t border-primary border-r px-2 py-0.5 hover:text-primary duration-300"
          >
            <span>{t("read_more")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="14"
              height="14"
              className="fill-current text-primary transition-transform duration-300 -rotate-90 group-hover:translate-x-1"
            >
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </Link>
          <div className="card z-40 ">
            <div
              dir="ltr"
              className="flex flex-col justify-start items-center md:flex-row gap-4 md:gap-20 w-full  px-2 md:px-0"
            >
              <CardImage src={card.image} alt={card.titleKey} />
              <div
                dir={`${document.body.dir === "rtl" ? "rtl" : "ltr"}`}
                className="flex flex-col px-4 text-center md:text-start"
              >
                <h1 className="font-bold text-2xl md:text-4xl mt-6 mb-8">
                  {card.titleKey}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-3">
                  {card.sections.map((section, index) => (
                    <div
                      key={index}
                      className="text-base flex flex-col justify-start items-center gap-2 md:items-start"
                    >
                      <span className="bg-primary text-xl text-[#fdfdfd] px-3 py-0.5 rounded-sm">
                        {section.tagKey}
                      </span>
                      <h4 className="font-semibold  mt-1">
                        {section.headingKey}
                      </h4>
                      <p className="max-w-md mt-1 font-light text-gray-500">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
