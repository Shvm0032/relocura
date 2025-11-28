"use client";

import { Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      className="relative py-20 bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/contact/contactbg-4.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div> {/* 40% opacity black overlay */}

      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 drop-shadow-lg">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="p-4 bg-[#96aae7] rounded-full mb-4">
              <Phone className="text-[#1C398E] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Phone</h3>
              <p className="text-gray-500">+1 234 567 890</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="p-4 bg-[#96aae7] rounded-full mb-4">
              <Mail className="text-[#1C398E] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Email</h3>
              <p className="text-gray-500">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
