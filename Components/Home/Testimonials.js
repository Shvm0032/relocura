"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    { 
      text: "The support I received was exceptional. They made my relocation process smooth and hassle-free.", 
      name: "John Doe", 
      rating: 5 
    },
    { 
      text: "Professional team with excellent guidance throughout the entire process. Highly recommended!", 
      name: "Jane Smith", 
      rating: 5 
    },
    { 
      text: "Training and documentation support was outstanding. They really care about their clients.", 
      name: "Ahmed Khan", 
      rating: 4 
    },
    { 
      text: "Smooth process from start to finish. The team was always available to answer my questions.", 
      name: "Maria Lopez", 
      rating: 5 
    },
    { 
      text: "Great experience with friendly staff. They made me feel comfortable throughout the journey.", 
      name: "Lucas Brown", 
      rating: 4 
    },
    { 
      text: "Outstanding service! They exceeded my expectations in every aspect of the relocation.", 
      name: "Sarah Chen", 
      rating: 5 
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-40 h-1 bg-[#1C398E] mb-10 rounded mx-auto "></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people have to say about their experience with us.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full 
            shadow-lg  items-center justify-center hover:bg-gray-50 transition-all duration-200 
            border border-gray-200 hover:shadow-xl hover:cursor-pointer active:scale-95 hidden md:flex"
          >
            <ChevronLeft className="text-gray-700 w-6 h-6" />
          </button>

          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hover:cursor-pointer bg-white w-12 h-12 rounded-full 
            shadow-lg  items-center justify-center hover:bg-gray-50 transition-all duration-200 
            border border-gray-200 hover:shadow-xl active:scale-95 hidden md:flex"
          >
            <ChevronRight className="text-gray-700 w-6 h-6" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Attach navigation after initialization
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="pb-2"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1C398E] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-100">
                  
                  {/* Comment/Text - Top */}
                  <div className="mb-6">
                    <p className="text-gray-100 text-lg leading-relaxed ">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Name - Middle */}
                  <div className="mb-4">
                    <p className="text-gray-100 font-semibold text-base">
                      {testimonial.name}
                    </p>
                  </div>

                  {/* Rating - Bottom */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        fill={starIndex < testimonial.rating ? "currentColor" : "none"}
                        className={`w-5 h-5 ${
                          starIndex < testimonial.rating 
                            ? "text-yellow-400" 
                            : "text-gray-100"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-100">
                      ({testimonial.rating}.0)
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {testimonials.slice(0, 3).map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-200"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}