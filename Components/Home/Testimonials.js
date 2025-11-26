"use client";

import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Amazing support, very professional.",
      name: "John Doe",
      rating: 5,
    },
    {
      text: "They helped me relocate legally and safely.",
      name: "Jane Smith",
      rating: 5,
    },
    {
      text: "Training and guidance was excellent.",
      name: "Ahmed Khan",
      rating: 4,
    },
    {
      text: "Highly recommended, smooth process.",
      name: "Maria Lopez",
      rating: 5,
    },
    {
      text: "Friendly staff and great guidance.",
      name: "Lucas Brown",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/bg-3.jpg')" }}
      ></div>

      {/* White overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Testimonials</h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#1C398E] rounded-2xl shadow-lg p-6 min-h-[200px] flex flex-col justify-start text-white">
                {/* Comment */}
                <p className="text-left text-lg mb-4">“{item.text}”</p>

                {/* Name */}
                <p className="font-semibold text-sm text-left mb-2">{item.name}</p>

                {/* Rating */}
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 mr-1 ${
                        i < item.rating ? "text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
