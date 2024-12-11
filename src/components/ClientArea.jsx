import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedNumber from "./AnimatedNumber";

const ClientArea = () => {
  let date1996 = new Date("2016-01-01");
  let today = new Date();
  let timeDifference = today - date1996;

  let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let years = Math.floor(differenceInDays / 365.25);

  const { t } = useTranslation();
  return (
    <section className="p-2 lg:px-0 mx-auto max-w-[86rem]" id="clients">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto">
        <ul className="grid gap-14 px-8 lg:ps-20 md:grid-cols-4 xl:gap-x-24 font-bold text-2xl">
          <li className="flex flex-col gap-y-4 justify-center items-center md:items-start md:border-e border-orange-500">
            <span>
              <AnimatedNumber duration={2000} end={40} />
            </span>
            <h4 className="uppercase text-lg">{t("happy")}</h4>
          </li>
          <li className="flex flex-col gap-y-4 justify-center items-center md:items-start md:border-e border-orange-500">
            <span>
              <AnimatedNumber duration={3000} end={245} />
            </span>
            <h4 className="uppercase text-lg">{t("product")}</h4>
          </li>
          <li className="flex flex-col gap-y-4 justify-center items-center md:items-start md:border-e border-orange-500">
            <span>
              <AnimatedNumber duration={1500} end={years} />
            </span>
            <h4 className="uppercase text-lg">{t("years")}</h4>
          </li>
          <li className="flex flex-col gap-y-4 justify-center items-center md:items-start">
            <span>
              <AnimatedNumber duration={2500} end={5} />
            </span>
            <h4 className="uppercase text-lg">{t("team")}</h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClientArea;
