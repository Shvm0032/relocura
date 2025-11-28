"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-center bg-repeat opacity-20"
        style={{
          backgroundImage: "url('/contact/contact-bg1.png')",
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Ready to Make Your Move to Portugal? Let’s Get Started Today!
        </h2>
        <div className="w-40 h-1 bg-[#1C398E] mb-10 rounded mx-auto "></div>

        <div className="bg-[#1C398E] rounded-3xl shadow-xl p-10 border border-gray-200">
          <form className="grid gap-6 md:grid-cols-2 md:gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Name
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Surname */}
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Surname
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your surname"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Country of Origin
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your country"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-100 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-transparent border border-white text-white py-3 px-32 rounded-xl font-semibold shadow-lg mt-4 mx-auto hover:cursor-pointer block transition-transform duration-200 transform hover:scale-95"
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
