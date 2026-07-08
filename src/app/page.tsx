import Hero from "@/components/home/Hero";
import ProblemsSection from "@/components/home/ProblemsSection";
import SolutionSection from "@/components/home/SolutionSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientsSection from "@/components/home/ClientsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <ClientsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
