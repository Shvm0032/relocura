"use client";

import {Scale, FileCheck , Home , Plane , MapPin , GraduationCap } from "lucide-react";

const data = [
  {
    icon: <Scale size={40} />,
    title: "100% legal process",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  },
  {
    icon: <FileCheck size={40} />,
    title: "Fast and error-free documentation",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  },
  {
    icon: <Plane  size={40} />,
    title: "Airport support & organized travel",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  },
  {
    icon: <Home  size={40} />,
    title: "Safe accommodation arrangement",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  },
  {
    icon: <MapPin  size={40} />,
    title: "On-ground Portugal assistance",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  },
  {
    icon: <GraduationCap  size={40} />,
    title: "Professional training after arrival",
    desc: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/about/about-bg1.jpg')" 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center ">

        {/* Heading */}
        <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-2">
          Why Choose Us
        </h2>

        {/* Divider */}
        <div className="w-32 h-1 bg-[#012D71] mx-auto mb-12 opacity-70"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="border border-white/40 rounded-xl p-6 text-center backdrop-blur-sm bg-[#1C398E]  transition shadow-lg"
            >
              {/* Icon */}
              <div className="w-20 text-white h-20 mx-auto mb-4 rounded-full border-2 border-white flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>

              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
