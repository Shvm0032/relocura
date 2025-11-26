import HeroSection from "@/Components/Home/HeroSection"
import WhoWeAre from "@/Components/Home/WhoWeAre";
import Process from "@/Components/Home/Process";
import WhatYouGet from "@/Components/Home/WhatYouGet";
import FAQ from "@/Components/Home/FAQ";
import Testimonials from "@/Components/Home/Testimonials";
import LegalNotice from "@/Components/Home/LegalNotice";
import ContactForm from "@/Components/Home/ContactForm";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 pt-24">
      <HeroSection />
      <WhoWeAre />
      <Process />
      <WhatYouGet />
      <FAQ />
      <Testimonials />
      <LegalNotice />
      <ContactForm />
    </main>
  );
}
