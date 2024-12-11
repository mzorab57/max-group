import React from "react";

const ProductCard = ({
  title,
  image,
  tags,
  setIsOpen,
  setImages,
  emblaImages,
}) => {
  return (
    <div
      data-aos={"fade-up"}
      className="rounded"
      onClick={() => {
        setIsOpen(true);
        setImages(emblaImages);
      }}
    >
      <div className="relative rounded overflow-hidden   transition-transform duration-300 transfrm bg-gray-100 shado">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0b0c] to-transparent p-4 rounded">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#22252a] text-white text-xs font-semibold px-2 py-1 rounded-full me-1 bg-opacity-50"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
