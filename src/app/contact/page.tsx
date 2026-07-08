import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
