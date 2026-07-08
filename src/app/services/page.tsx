import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import TrustSection from "@/components/services/TrustSection";
import SoftwareSupport from "@/components/services/SoftwareSupport";
import StatsBanner from "@/components/services/StatsBanner";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TrustSection />
      <SoftwareSupport />
      <StatsBanner />
      <Footer />
    </main>
  );
}
