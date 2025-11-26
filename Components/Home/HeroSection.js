"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/home/home-slider1.jpg",
  "/home/home-slider2.jpg",
  "/home/home-slider3.jpg",
];

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full mx-auto h-[60vh] sm:h-[70vh] md:h-[90vh] relative">
      {/* Slider */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh]"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </Slider>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white z-40">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Do you want a legal future in Europe? PRP is your opportunity.
        </h2>
        <p className="text-md md:text-lg mb-4">
          We offer a comprehensive program for legal relocation to Portugal,
          with full support for documents, travel, training, and integration.
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm md:text-base mb-6">
          <li>✔ Documentation support</li>
          <li>✔ Organized relocation</li>
          <li>✔ Welcome with room and board</li>
          <li>✔ Professional training</li>
          <li>✔ Ongoing support</li>
        </ul>

        {/* Call to Action Button */}
        <Link
          href="#contact"
          className="bg-[#1C398E] px-6 py-3 rounded-md text-white font-medium transition-transform duration-300 hover:scale-95 hover:bg-blue-800"
        >
          Request Information
        </Link>
      </div>
    </section>
  );
}

// ---------- Custom Arrows ----------
function CustomArrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-40 bg-black/50 hover:bg-black hover:cursor-pointer text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        direction === "next" ? "right-4" : "left-4"
      }`}
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
}
