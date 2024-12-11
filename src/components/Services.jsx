import React from "react";
import { FaDraftingCompass, FaCouch, FaWindowRestore } from "react-icons/fa";
import stationaryOne from "../assets/furnishing/f5.jpg";

const services = [
  {
    id: "01",
    icon: <FaDraftingCompass />,
    title: "Max Group",
    description:
      "We provide a range of architectural 3D modeling services to our customers to aid the design, planning and...",
    link: "/services/maxgroup",
  },
  {
    id: "02",
    icon: <FaCouch />,
    title: "Vera Decoration",
    description:
      "Analysis and planning services that help both the client and architects to work out the forthcoming project...",
    link: "/services/vera",
  },
  {
    id: "03",
    icon: <FaWindowRestore />,
    title: "Real Estate",
    description:
      "We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling...",
    link: "/services/realestate",
  },
];

const ServiceCard = ({ id, icon, title, description, link }) => (
  <div className="relative  mx-2   group h-80  p-6  border-primary shadow-md transition-all border duration-1000 hover:shadow-xl shadow-primary/40 ">
    <div className="absolute -left-4  top-4 w-full max-w-lg group h-80 group-hover:left-0 group-hover:top-0  border-primary shadow-md transition-all border duration-1000 hover:shadow-xl shadow-primary/40  "></div>
    {/* Background Image with dark overlay */}
    <div
      className="absolute inset-0 z-20 transition-all duration-500 group-hover:opacity-80 opacity-0 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${stationaryOne})`,
        backgroundBlendMode: "overlay",
      }}
    ></div>

    {/* Dark Overlay to improve readability */}
    <div className="absolute inset-0 group-hover:bg-transparent bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-100 via-orange-50 to-transparent duration-300 z-10"></div>

    {/* Card ID */}
    <h3
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)",
      }}
      className="text-gray-500 h-20 group-hover:text-white text-5xl font-bold bg-primary pt-2 absolute top-0  right-4 z-20 transition-all duration-300"
    >
      {id}
    </h3>

    {/* Icon */}
    <div className="text-5xl text-primary my-4 absolute top-4 left-5 z-20 transition-all duration-300 group-hover:animate-bounce">
      {icon}
    </div>

    <div className="mt-20">
      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-800 absolute top-28 left-5 z-20 transition-colors duration-300 group-hover:text-white mb-2">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm line-clamp-4 font-semibold text-gray-600 z-20 transition-colors duration-300 absolute bottom-16 left-5 group-hover:text-white mb-4">
        {description}
      </p>
    </div>
    {/* Read More Button */}
    <a
      href={link}
      className="absolute bottom-6 left-0 bg-primary text-gray-600 group-hover:text-white px-8 py-1 font-semibold z-20 hover:underline transition-all duration-300"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
      }}
    >
      Read More
    </a>
  </div>
);

const Services = () => (
  <section className="py-12  max-w-[100rem] w-full bg-gray-50 content-center mx-auto">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">All Services</h2>
        <div className="h-1 w-20 bg-primary mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 lg:gap-x-10">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
