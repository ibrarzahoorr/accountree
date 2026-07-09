import ServiceHero from "@/components/shared/ServiceHero";
import WhatsIncludedTabs from "@/components/shared/WhatsIncludedTabs";
import ComparisonSection from "@/components/shared/ComparisonSection";
import BenefitsCard from "@/components/shared/BenefitsCard";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import FAQSection from "@/components/shared/FAQSection";
import SoftwareSupport from "@/components/services/SoftwareSupport";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function ServicePageTemplate({
  serviceName,
  heroHeading,
  heroImage,
  introHeading,
  introBody,
}: {
  serviceName: string;
  heroHeading: string;
  heroImage: string;
  introHeading: string;
  introBody: string;
}) {
  return (
    <main className="flex flex-1 flex-col">
      <ServiceHero heading={heroHeading} heroImage={heroImage} serviceName={serviceName} />

      <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 text-center sm:px-8 lg:px-[146px] lg:pt-24">
        <h2 className="mx-auto max-w-[781px] font-poppins text-2xl font-semibold text-black sm:text-[28px] lg:text-[32px]">
          {introHeading}
        </h2>
        <p className="mx-auto mt-6 max-w-[1037px] font-poppins text-base leading-[29px] text-black">
          {introBody}
        </p>
      </section>

      <WhatsIncludedTabs serviceName={serviceName} />
      <ComparisonSection serviceName={serviceName} />
      <BenefitsCard />

      <SoftwareSupport />
      <TestimonialsSection />
      <FAQSection />
      <CTASection tone="green" />
      <Footer />
    </main>
  );
}
