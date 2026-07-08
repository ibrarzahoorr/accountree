import Image from "next/image";
import ServiceHero from "@/components/shared/ServiceHero";
import WhatsIncludedTabs from "@/components/shared/WhatsIncludedTabs";
import ComparisonSection from "@/components/shared/ComparisonSection";
import BenefitsPills from "@/components/shared/BenefitsPills";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import FAQSection from "@/components/shared/FAQSection";
import SoftwareSupport from "@/components/services/SoftwareSupport";
import StatsBanner from "@/components/services/StatsBanner";
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
      <ServiceHero heading={heroHeading} heroImage={heroImage} />

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

      <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 sm:px-8 lg:px-[146px] lg:pt-40">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex">
            {["1", "2", "3", "4"].map((n, i) => (
              <div
                key={n}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
                style={{ marginLeft: i === 0 ? 0 : -14 }}
              >
                <Image
                  src={`/images/service-detail/ellipse-${19 + i}-${
                    ["513531a6", "5717002d", "cb9ddf68", "cebc59fb"][i]
                  }.png`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="font-poppins text-2xl font-semibold text-black">1986</p>
            <p className="font-poppins text-lg text-black">Client Satisfied</p>
          </div>
        </div>

        <BenefitsPills />
      </section>

      <SoftwareSupport />
      <TestimonialsSection />
      <FAQSection />
      <StatsBanner />
      <Footer />
    </main>
  );
}
