import Header from "@/components/layout/Header";

export default function ContactHero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden bg-[#101828] sm:h-[380px]">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #94d09f 0%, #3fbc6d 100%)",
          opacity: 0.15,
        }}
      />
      <Header />
      <div className="relative mx-auto flex h-full max-w-[1512px] flex-col items-center justify-center px-6 text-center sm:px-8 lg:px-[146px]">
        <h1 className="font-poppins text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-[600px] font-poppins text-base text-white/80">
          Have a question about outsourcing your accounting? Our team is
          ready to help you find the right solution for your practice.
        </p>
      </div>
    </section>
  );
}
