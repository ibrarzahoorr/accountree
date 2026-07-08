import AboutHero from "@/components/about/AboutHero";
import IntroStats from "@/components/about/IntroStats";
import IndustriesSection from "@/components/about/IndustriesSection";
import T3C3Section from "@/components/about/T3C3Section";
import DataSecuritySection from "@/components/about/DataSecuritySection";
import InfrastructureSection from "@/components/about/InfrastructureSection";
import DifferenceSection from "@/components/about/DifferenceSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <IntroStats />
      <IndustriesSection />
      <T3C3Section />
      <DataSecuritySection />
      <InfrastructureSection />
      <DifferenceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
