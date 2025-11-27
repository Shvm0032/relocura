"use client";

import { CheckCircle } from "lucide-react";

export default function WhoWeAre() {
  const points = [
    "Documentary assistance",
    "Practical preparation",
    "Travel logistics",
    "Arrival support",
    "Food & accommodation",
    "Training programs",
    "Orientation & personal support",
  ];

  return (
    <section className="relative w-full pb-20  bg-white">
      <div className="max-w-7xl  mx-auto flex flex-col md:flex-row h-auto md:h-[600px]">
        {/* ---------- LEFT SIDE IMAGE ---------- */}
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/home/whoweare.jpg')" }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
          {/* Diagonal cut */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-20 bg-[#1C398E] clip-path-polygon-diagonal"></div>
        </div>

        {/* ---------- RIGHT SIDE CONTENT ---------- */}
        <div className="md:w-1/2 bg-white px-8 pt-3 relative z-10">
          <h2 className="text-4xl md:text-5xl text-gray-700 font-bold pb-5">
            Who We Are
          </h2>
          <div className="w-40 h-1 bg-[#1C398E] mb-5 rounded"></div>
          <p className="text-gray-700 text-justify text-lg mb-6">
            We are a company that helps non-EU citizens embark on a legal,
            concrete, and recognized path to relocate to Portugal. Our role is
            to provide comprehensive support to make your relocation smooth,
            efficient, and legally compliant.
          </p>

          {/* Key Points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="text-[#1C398E] w-5 h-5 shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-justify text-lg mt-6">
            Our service does not provide employment and does not operate as a
            recruitment agency. We provide exclusively administrative,
            logistical, and training support.
          </p>
        </div>
      </div>

      {/* Clip-path CSS (tailwind doesn’t have diagonal built-in) */}
      <style jsx>{`
        .clip-path-polygon-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        }
      `}</style>
    </section>
  );
}
