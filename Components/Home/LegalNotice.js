export default function LegalNotice() {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/home/bg-5.avif')",
      }}
    >
      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="rounded-3xl shadow-xl border border-gray-200 p-10 bg-white/90 backdrop-blur-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Legal Notice
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are{" "}
            <span className="font-semibold">NOT an employment agency</span>.
            We do not offer jobs or guarantee hiring. Our services are limited
            to{" "}
            <span className="font-semibold">
              documentation, logistical support, training, and informational
              guidance
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
