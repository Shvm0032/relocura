"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/home/bg-6.jpg')",
        }}
      ></div>


      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <form className="grid gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Surname */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Surname
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your surname"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Country of Origin
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your country"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
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
              <label className="block text-gray-700 font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold shadow-lg mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
