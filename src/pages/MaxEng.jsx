import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Exterior images
import v2 from "../assets/villa/exterior/entrance/v2.jpg";
import v3 from "../assets/villa/exterior/v3.jpg";
import v4 from "../assets/villa/exterior/entrance/v4.jpg";
import v7 from "../assets/villa/exterior/v7.jpg";
import v12 from "../assets/villa/exterior/entrance/v12.jpg";
import v13 from "../assets/villa/exterior/entrance/v13.jpg";
import v17 from "../assets/villa/exterior/v17.jpg";
import v18 from "../assets/villa/exterior/bbq/v18.jpg";
import v19 from "../assets/villa/exterior/bbq/v19.jpg";
import v27 from "../assets/villa/exterior/v27.jpg";
import v28 from "../assets/villa/exterior/v28.jpg";
import v29 from "../assets/villa/exterior/entrance/v29.jpg";
import v30 from "../assets/villa/exterior/entrance/v30.jpg";
import v31 from "../assets/villa/exterior/entrance/v31.jpg";
import v33 from "../assets/villa/exterior/entrance/v33.jpg";
import v34 from "../assets/villa/exterior/entrance/v34.jpg";
import v36 from "../assets/villa/exterior/v36.jpg";
import v37 from "../assets/villa/exterior/v37.jpg";
import v39 from "../assets/villa/exterior/bbq/v39.jpg";
import v45 from "../assets/villa/exterior/v45.jpg";
import v48 from "../assets/villa/exterior/bbq/v48.jpg";
import v49 from "../assets/villa/exterior/bbq/v49.jpg";
import v50 from "../assets/villa/exterior/bbq/v50.jpg";
import v52 from "../assets/villa/exterior/v52.jpg";
// import v4876 from "../assets/villa/exterior/v4876.jpg";

// Interior images
import v1 from "../assets/villa/interior/bathroom/v1.jpg";
import v5 from "../assets/villa/interior/v5.jpg";
import v6 from "../assets/villa/interior/v6.jpg";
import v8 from "../assets/villa/interior/pool/v8.jpg";
import v9 from "../assets/villa/interior/pool/v9.jpg";
import v10 from "../assets/villa/interior/kitchen/v10.jpg";
import v11 from "../assets/villa/interior/kitchen/v11.jpg";
import v15 from "../assets/villa/interior/bathroom/v15.jpg";
import v16 from "../assets/villa/interior/bathroom/v16.jpg";
import v20 from "../assets/villa/interior/pool/v20.jpg";
import v21 from "../assets/villa/interior/v21.jpg";
import v22 from "../assets/villa/interior/bathroom/v22.jpg";
import v23 from "../assets/villa/interior/bathroom/v23.jpg";
import v24 from "../assets/villa/interior/bathroom/v24.jpg";
import v26 from "../assets/villa/interior/bathroom/v26.jpg";
import v32 from "../assets/villa/interior/v32.jpg";
import v35 from "../assets/villa/interior/bathroom/v35.jpg";
import v38 from "../assets/villa/interior/v38.jpg";
import v40 from "../assets/villa/interior/bathroom/v40.jpg";
import v41 from "../assets/villa/interior/bathroom/v41.jpg";
import v42 from "../assets/villa/interior/bathroom/v42.jpg";
import v43 from "../assets/villa/interior/v43.jpg";
import v44 from "../assets/villa/interior/stairs/v44.jpg";
import v46 from "../assets/villa/interior/v46.jpg";
import v47 from "../assets/villa/interior/stairs/v47.jpg";
import v51 from "../assets/villa/interior/v51.jpg";
import v53 from "../assets/villa/interior/stairs/v53.jpg";
import v56 from "../assets/villa/interior/kitchen/v56.jpg";

// house - project one - exterior
import m1 from "../assets/house/one/exterior/m1.jpg";
import m2 from "../assets/house/one/exterior/m2.jpg";
import m16 from "../assets/house/one/exterior/m16.jpg";
import m28 from "../assets/house/one/exterior/m28.jpg";
import m32 from "../assets/house/one/exterior/m32.jpg";
import m47 from "../assets/house/one/exterior/m47.jpg";
import m48 from "../assets/house/one/exterior/m48.jpg";
import m49 from "../assets/house/one/exterior/m49.jpg";
import m60 from "../assets/house/one/exterior/m60.jpg";
// house - project one - interior - bathroom
import m6 from "../assets/house/one/interior/bathroom/m6.jpg";
import m7 from "../assets/house/one/interior/bathroom/m7.jpg";
import m8 from "../assets/house/one/interior/bathroom/m8.jpg";
import m9 from "../assets/house/one/interior/bathroom/m9.jpg";
import m10 from "../assets/house/one/interior/bathroom/m10.jpg";
import m11 from "../assets/house/one/interior/bathroom/m11.jpg";
import m12 from "../assets/house/one/interior/bathroom/m12.jpg";
import m14 from "../assets/house/one/interior/bathroom/m14.jpg";
import m59 from "../assets/house/one/interior/bathroom/m59.jpg";
// house - project one - interior - other
import m17 from "../assets/house/one/interior/other/m17.jpg";
import m25 from "../assets/house/one/interior/other/m25.jpg";
import m36 from "../assets/house/one/interior/other/m36.jpg";
import m18 from "../assets/house/one/interior/other/m38.jpg";
import m40 from "../assets/house/one/interior/other/m40.jpg";
import m56 from "../assets/house/one/interior/other/m56.jpg";
// house - project one - interior - stairs
import m20 from "../assets/house/one/interior/stairs/m20.jpg";
import m21 from "../assets/house/one/interior/stairs/m21.jpg";
import m26 from "../assets/house/one/interior/stairs/m26.jpg";
import m27 from "../assets/house/one/interior/stairs/m27.jpg";
import m31 from "../assets/house/one/interior/stairs/m31.jpg";
import m33 from "../assets/house/one/interior/stairs/m33.jpg";
import m50 from "../assets/house/one/interior/stairs/m50.jpg";
import m51 from "../assets/house/one/interior/stairs/m51.jpg";
import m58 from "../assets/house/one/interior/stairs/m58.jpg";

// house - project two - exterior
import mx1 from "../assets/house/two/exterior/Max 4.jpg";
import mx2 from "../assets/house/two/exterior/Max 5.jpg";
import mx9 from "../assets/house/two/exterior/Max 9.jpg";
import mx69 from "../assets/house/two/exterior/max 69.jpg";
import mx71 from "../assets/house/two/exterior/max 71.jpg";
// house - project two - interior - bathroom
import mx6 from "../assets/house/two/interior/bathroom/Max 6.jpg";
import mx7 from "../assets/house/two/interior/bathroom/Max 7.jpg";
import mx8 from "../assets/house/two/interior/bathroom/Max 8.jpg";
import mx33 from "../assets/house/two/interior/bathroom/max 33.jpg";
import mx42 from "../assets/house/two/interior/bathroom/max 42.jpg";
import mx49 from "../assets/house/two/interior/bathroom/Max 49.jpg";
import mx50 from "../assets/house/two/interior/bathroom/Max 50.jpg";
import mx54 from "../assets/house/two/interior/bathroom/max 54.jpg";
import mx59 from "../assets/house/two/interior/bathroom/max 59.jpg";
import mx62 from "../assets/house/two/interior/bathroom/max 62.jpg";
// house - project two - interior - bedroom
import mx15 from "../assets/house/two/interior/bedroom/Max 15.jpg";
import mx21 from "../assets/house/two/interior/bedroom/Max 21.jpg";
import mx30 from "../assets/house/two/interior/bedroom/max 30.jpg";
import mx48 from "../assets/house/two/interior/bedroom/Max 48.jpg";
import mx61 from "../assets/house/two/interior/bedroom/max 61.jpg";
import mx66 from "../assets/house/two/interior/bedroom/Max 66.jpg";
import mx67 from "../assets/house/two/interior/bedroom/Max 67.jpg";
// house - project two - interior - other
import mx3 from "../assets/house/two/interior/other/Max 3.jpg";
import mx10 from "../assets/house/two/interior/other/Max 10.jpg";
import mx11 from "../assets/house/two/interior/other/Max 11.jpg";
import mx14 from "../assets/house/two/interior/other/Max 14.jpg";
import mx18 from "../assets/house/two/interior/other/Max 18.jpg";
import mx20 from "../assets/house/two/interior/other/Max 20.jpg";
import mx34 from "../assets/house/two/interior/other/max 34.jpg";
import mx35 from "../assets/house/two/interior/other/max 35.jpg";
import mx56 from "../assets/house/two/interior/other/max 56.jpg";
import mx57 from "../assets/house/two/interior/other/max 57.jpg";
import mx58 from "../assets/house/two/interior/other/max 58.jpg";
import mx60 from "../assets/house/two/interior/other/max 60.jpg";

// house2
import h2k1 from "../assets/house2/kitchen/k1.webp";
import h2k2 from "../assets/house2/kitchen/k2.webp";
import h2k3 from "../assets/house2/kitchen/k3.webp";
import h2k4 from "../assets/house2/kitchen/k4.webp";
import h2k5 from "../assets/house2/kitchen/k5.webp";
import h2k6 from "../assets/house2/kitchen/k6.webp";
// lighmix
import h2lm1 from "../assets/house2/lightmix/lm1.jpg";
import h2lm2 from "../assets/house2/lightmix/lm2.jpg";
import h2lm3 from "../assets/house2/lightmix/lm3.jpg";
import h2lm4 from "../assets/house2/lightmix/lm4.jpg";
import h2lm5 from "../assets/house2/lightmix/lm5.jpg";
import h2lm6 from "../assets/house2/lightmix/lm6.jpg";
import h2lm7 from "../assets/house2/lightmix/lm7.jpg";
import h2lm8 from "../assets/house2/lightmix/lm8.jpg";
import h2lm9 from "../assets/house2/lightmix/lm9.jpg";
import h2lm10 from "../assets/house2/lightmix/lm10.jpg";
// living
import h2l1 from "../assets/house2/living/l1.jpg";
import h2l2 from "../assets/house2/living/l2.jpg";
import h2l3 from "../assets/house2/living/l3.jpg";
import h2l4 from "../assets/house2/living/l4.jpg";
import h2l5 from "../assets/house2/living/l5.jpg";
import h2l6 from "../assets/house2/living/l6.jpg";
import h2l7 from "../assets/house2/living/l7.jpg";
import h2l8 from "../assets/house2/living/l8.jpg";
import h2l9 from "../assets/house2/living/l9.jpg";
import h2l10 from "../assets/house2/living/l10.jpg";
// mb
import h2mb1 from "../assets/house2/masterbed/mb1.jpg";
import h2mb2 from "../assets/house2/masterbed/mb2.jpg";
import h2mb3 from "../assets/house2/masterbed/mb3.jpg";
import h2mb4 from "../assets/house2/masterbed/mb4.jpg";
// overall
import h2ol1 from "../assets/house2/overall/sa29.jpg";
import h2ol2 from "../assets/house2/overall/sa33.jpg";
import h2ol3 from "../assets/house2/overall/sa34.jpg";
import h2ol4 from "../assets/house2/overall/sa35.jpg";
import h2ol5 from "../assets/house2/overall/sa38.jpg";
import h2ol6 from "../assets/house2/overall/sa39.jpg";
import h2ol7 from "../assets/house2/overall/sa40.jpg";
import h2ol8 from "../assets/house2/overall/vera.jpg";
import RoutesShape from "../components/RoutesShape";

const bbqImages = [v18, v19, v39, v48, v49, v50];
const exteriorImages = [v2, v7, v17, v27, v28, v36, v37, v45, v52];
const entranceImages = [v3, v4, v12, v13, v29, v30, v31, v33, v34];

// Bathroom Images
const bathroomImages = [v1, v15, v16, v22, v23, v24, v26, v35, v40, v41, v42];

// Kitchen Images
const kitchenImages = [v10, v11, v56];

// Pool Images
const poolImages = [v8, v9, v20];

// Stairs Images
const stairsImages = [v44, v47, v53];

// Other Interior Images
const otherInteriorImages = [v5, v6, v21, v32, v38, v43, v46, v51];

// house
// Project One
const projectOneExterior = [m1, m2, m16, m28, m32, m47, m48, m49, m60];

const projectOneInteriorBathroom = [m6, m7, m8, m9, m10, m11, m12, m14, m59];

const projectOneInteriorOther = [m17, m25, m36, m18, m40, m56];

const projectOneInteriorStairs = [m20, m21, m26, m27, m31, m33, m50, m51, m58];

// Project Two
const projectTwoExterior = [mx1, mx2, mx9, mx69, mx71];

const projectTwoInteriorBathroom = [
  mx6,
  mx7,
  mx8,
  mx33,
  mx42,
  mx49,
  mx50,
  mx54,
  mx59,
  mx62,
];

const projectTwoInteriorBedroom = [mx15, mx21, mx30, mx48, mx61, mx66, mx67];

const projectTwoInteriorOther = [
  mx3,
  mx10,
  mx11,
  mx14,
  mx18,
  mx20,
  mx34,
  mx35,
  mx56,
  mx57,
  mx58,
  mx60,
];

// Kitchen Images
const house2KitchenImages = [h2k1, h2k2, h2k3, h2k4, h2k5, h2k6];

// Lightmix Images
const house2LightmixImages = [
  h2lm1,
  h2lm2,
  h2lm3,
  h2lm4,
  h2lm5,
  h2lm6,
  h2lm7,
  h2lm8,
  h2lm9,
  h2lm10,
];

// Living Room Images
const house2LivingImages = [
  h2l1,
  h2l2,
  h2l3,
  h2l4,
  h2l5,
  h2l6,
  h2l7,
  h2l8,
  h2l9,
  h2l10,
];

// Masterbedroom Images
const house2MasterbedImages = [h2mb1, h2mb2, h2mb3, h2mb4];

// Overall Images
const house2OverallImages = [
  h2ol1,
  h2ol2,
  h2ol3,
  h2ol4,
  h2ol5,
  h2ol6,
  h2ol7,
  h2ol8,
];

const MaxEng = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { t } = useTranslation();

  const productItems = [
    {
      src: v12,
      title: t("products.entrance_title"),
      category: ["Exterior", "Villa"],
      tags: [
        t("tags.entrance"),
        t("categories.exterior"),
        t("categories.villa"),
      ],
      emblaImages: entranceImages,
    },
    {
      src: v19,
      title: t("products.bbq_title"),
      category: ["Exterior", "Villa"],
      tags: [t("tags.bbq"), t("categories.exterior"), t("categories.villa")],
      emblaImages: bbqImages,
    },
    {
      src: v36,
      title: t("products.design_title"),
      category: ["Villa", "Design", "Exterior"],
      tags: [t("tags.design"), t("categories.exterior"), t("categories.villa")],
      emblaImages: exteriorImages,
    },
    {
      src: v1,
      title: t("products.bathroom_title"),
      category: ["Interior", "Villa"],
      tags: [
        t("tags.bathroom"),
        t("categories.interior"),
        t("categories.villa"),
      ],
      emblaImages: bathroomImages,
    },
    {
      src: v10,
      title: t("products.kitchen_title"),
      category: ["Interior", "Villa"],
      tags: [
        t("tags.kitchen"),
        t("categories.interior"),
        t("categories.villa"),
      ],
      emblaImages: kitchenImages,
    },
    {
      src: v8,
      title: t("products.pool_title"),
      category: ["Interior", "Villa"],
      tags: [t("tags.pool"), t("categories.interior"), t("categories.villa")],
      emblaImages: poolImages,
    },
    {
      src: v44,
      title: t("products.stairs_title"),
      category: ["Interior", "Villa"],
      tags: [t("tags.stairs"), t("categories.interior"), t("categories.villa")],
      emblaImages: stairsImages,
    },
    {
      src: v5,
      title: t("products.other_interior_title"),
      category: ["Interior", "Villa"],
      tags: [t("tags.interior"), t("categories.villa")],
      emblaImages: otherInteriorImages,
    },
    {
      src: m1,
      title: t("products.project_one_exterior_title"),
      category: ["Exterior", "House"],
      tags: [t("tags.exterior"), t("categories.house")],
      emblaImages: projectOneExterior,
    },
    {
      src: m10,
      title: t("products.project_one_bathroom_title"),
      category: ["Interior", "House"],
      tags: [
        t("tags.bathroom"),
        t("categories.interior"),
        t("categories.house"),
      ],
      emblaImages: projectOneInteriorBathroom,
    },
    {
      src: m25,
      title: t("products.project_one_interior_title"),
      category: ["Interior", "House"],
      tags: [t("tags.interior"), t("categories.house")],
      emblaImages: projectOneInteriorOther,
    },
    {
      src: m27,
      title: t("products.project_one_stairs_title"),
      category: ["Interior", "House"],
      tags: [t("tags.stairs"), t("categories.interior"), t("categories.house")],
      emblaImages: projectOneInteriorStairs,
    },
    {
      src: mx71,
      title: t("products.project_two_exterior_title"),
      category: ["Exterior", "House"],
      tags: [t("tags.exterior"), t("categories.house")],
      emblaImages: projectTwoExterior,
    },
    {
      src: mx49,
      title: t("products.project_two_bathroom_title"),
      category: ["Interior", "House"],
      tags: [
        t("tags.bathroom"),
        t("categories.interior"),
        t("categories.house"),
      ],
      emblaImages: projectTwoInteriorBathroom,
    },
    {
      src: mx66,
      title: t("products.project_two_bedroom_title"),
      category: ["Interior", "House"],
      tags: [
        t("tags.bedroom"),
        t("categories.interior"),
        t("categories.house"),
      ],
      emblaImages: projectTwoInteriorBedroom,
    },
    {
      src: mx20,
      title: t("products.project_two_living_title"),
      category: ["Interior", "House"],
      tags: [t("tags.interior"), t("categories.house")],
      emblaImages: projectTwoInteriorOther,
    },
    {
      src: h2k1,
      title: t("products.house2_kitchen_title"),
      category: ["Interior", "House 2"],
      tags: [
        t("tags.kitchen"),
        t("categories.interior"),
        t("categories.house_2"),
      ],
      emblaImages: house2KitchenImages,
    },
    {
      src: h2lm1,
      title: t("products.house2_lightmix_title"),
      category: ["Interior", "House 2"],
      tags: [
        t("tags.lightmix"),
        t("categories.interior"),
        t("categories.house_2"),
      ],
      emblaImages: house2LightmixImages,
    },
    {
      src: h2l1,
      title: t("products.house2_living_room_title"),
      category: ["Interior", "House 2"],
      tags: [
        t("tags.living_room"),
        t("categories.interior"),
        t("categories.house_2"),
      ],
      emblaImages: house2LivingImages,
    },
    {
      src: h2mb1,
      title: t("products.house2_master_bedroom_title"),
      category: ["Interior", "House 2"],
      tags: [
        t("tags.master_bedroom"),
        t("categories.interior"),
        t("categories.house_2"),
      ],
      emblaImages: house2MasterbedImages,
    },
    {
      src: h2ol1,
      title: t("products.house2_overall_title"),
      category: ["Exterior", "House 2"],
      tags: [
        t("tags.overall"),
        t("categories.exterior"),
        t("categories.house_2"),
      ],
      emblaImages: house2OverallImages,
    },
  ];

  const [active, setActive] = useState("all");
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
  const [images, setImages] = useState([]);

  const filterItems = productItems.filter((item) => {
    if (active === "all") return true; // Return all items if 'all' is selected
    return item.category.includes(active); // Check if the 'active' state is one of the categories
  });

  return (
    <main className="">
      {/* Pano */}
      <div className="w-full h-[30rem] mb-4 relative">
        <div className="gr absolute z-30 w-full h-[30rem] pointer-events-none" />
        <RoutesShape />
        <img
          src={v51}
          alt=""
          className="object-cover w-full h-full pro-bg brightness-50 pointer-events-none select-none"
        />

        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-3xl sm:text-5xl font-black tracking-wider rtl:tracking-normal whitespace-nowrap">
          {t("company_name")}
        </h2>
        <div className="absolute top-20 start-2 lg:top-0 lg:start-28 lg:translate-y-1/2 lg:-translate-x-1/2 font-bold text-white bg- py-2 px-3 rounded lg:text-lg whitespace-nowrap">
          <Link to={"/"}>{t("home")} / </Link>
          <span className="ltr:underline"> {t("services")}</span>{" "}
        </div>
      </div>
      <div className="max-w-[96rem] flex flex-wrap items-center justify-between mx-auto px-4 md:px-10 my-6">
        {/* Filter */}
        <div className="flex justify-center items-center w-full md:mt-6">
          <ul className="flex flex-col justify-center items-center flex-wrap gap-x-6 gap-y-2 md:flex-row tracking-widest rtl:tracking-wide rtl:font-medium capitalize">
            <li
              onClick={() => setActive("all")}
              className={`${
                active === "all" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("all")} {/* Translate All */}
            </li>
            <li
              onClick={() => setActive("Interior")}
              className={`${
                active === "Interior" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("interior")} {/* Translate Interior */}
            </li>
            <li
              onClick={() => setActive("Exterior")}
              className={`${
                active === "Exterior" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("exterior")} {/* Translate Exterior */}
            </li>
            <li
              onClick={() => setActive("Commercial")}
              className={`${
                active === "Commercial" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("commercial")} {/* Translate Commercial */}
            </li>
            <li
              onClick={() => setActive("Villa")}
              className={`${
                active === "Villa" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("villa")} {/* Translate Villa */}
            </li>
            <li
              onClick={() => setActive("House")}
              className={`${
                active === "House" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("house")} {/* Translate House */}
            </li>
            <li
              onClick={() => setActive("WoodWorking")}
              className={`${
                active === "WoodWorking" ? "text-primary" : "text-darkLike"
              } cursor-pointer duration-300 hover:text-primary`}
            >
              {t("woodworking")} {/* Translate WoodWorking */}
            </li>
          </ul>
        </div>
        {/* Products */}
        <section
          id="products"
          key={active}
          className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        >
          {filterItems.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              image={item.src}
              link={item.link}
              tags={item.tags}
              setIsOpen={setIsOpen}
              setImages={setImages}
              emblaImages={item.emblaImages}
            />
          ))}
        </section>
      </div>
      {/* {isOpen && ( // Conditionally render the modal
        <Modal setIsOpen={setIsOpen} images={images} /> // Pass image data
      )} */}
      <Lightbox
        index={1}
        slides={images.map(image => ({ src: image }))}
        open={isOpen}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        close={() => setIsOpen(false)}
        styles={{
          thumbnail: {
            borderColor: "#FB8C00",
          },
        }}
      />
    </main>
  );
};

export default MaxEng;
