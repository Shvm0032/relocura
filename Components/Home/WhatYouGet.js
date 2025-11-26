import { Globe, FileText, Truck, Home, BookOpen, Users } from "lucide-react";

export default function WhatYouGet() {
  const benefits = [
    { text: "Legal entry into Portugal", icon: Globe },
    { text: "Documents prepared by professionals", icon: FileText },
    { text: "Organized transfer", icon: Truck },
    { text: "Accommodation & meals", icon: Home },
    { text: "Professional training", icon: BookOpen },
    { text: "Integration guidance", icon: Users },
  ];

  return (
    <section className="bg-linear-to-r from-blue-100 to-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          What You Get
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          With our program, you get a comprehensive package designed to make your move to Portugal smooth and professional:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-[#1C398E]"
              >
                <div className="w-12 h-12 bg-[#c9d1e9] rounded-full flex items-center justify-center mr-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#1C398E]" />
                </div>
                <p className="text-gray-700 font-medium text-left md:text-lg">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto">
          After 5 years of legal residence, you can apply for permanent residence and citizenship, opening doors to a secure and prosperous future in Portugal.
        </p>
      </div>

      {/* Optional subtle background decoration */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-100 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
