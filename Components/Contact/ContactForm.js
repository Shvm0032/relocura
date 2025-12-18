"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="py-14 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat opacity-20"
        style={{ backgroundImage: "url('/contact/contact-bg-101.png')" }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 leading-snug">
          Ready to Make Your Move to Portugal? <br className="hidden sm:block" />
          Let’s Get Started Today!
        </h2>

        <div className="w-28 sm:w-40 h-1 bg-[#1C398E] mb-8 rounded mx-auto"></div>

        <div className="bg-[#1C398E] rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200">
          <form className="grid gap-5 md:grid-cols-2 md:gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Name
              </label>
              <input
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Surname */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Surname
              </label>
              <input
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your surname"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Country of Origin
              </label>
              <input
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your country"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                WhatsApp Number
              </label>
              <input
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-100 font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border text-white border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-transparent hover:cursor-pointer border border-white text-white py-3 px-10 sm:px-20 rounded-xl font-semibold shadow-lg mt-2 w-full sm:w-auto transition-transform duration-200 transform hover:scale-95"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
