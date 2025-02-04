import { HeroSection } from "@/components/layout/hero-section";
import { AboutSection } from "@/components/layout/about-section";
import { HowWeWorkSection } from "@/components/layout/how-we-work-section";
import { WhyChooseSection } from "@/components/layout/why-choose-section-2";
import Ballpit from "@/components/ui/ballpit";
import { FAQSection } from "@/components/layout/faq-section";
import { ContactSection } from "@/components/layout/contact-section";
import OurJourneySection from "@/components/layout/why-choose-section";
import { ServicesSection } from "@/components/layout/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      {/* <WhyChooseSection /> */}
      <OurJourneySection />
      {/* <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
        <Ballpit
        />
      </div> */}
      <FAQSection />
      <ContactSection />
    </main>
  );
}
