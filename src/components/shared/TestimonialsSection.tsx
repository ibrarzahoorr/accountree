import Image from "next/image";

const testimonials = [
  {
    name: "Robert William",
    firm: "Accounting firm in Milton Keynes.",
    quote:
      "I have an amazing experience outsourcing my Payroll clients to Accountree. Their team is professional, responsive, and always delivers on time.",
    avatar: "/images/service-detail/ellipse-193-1106f2f2.png",
  },
  {
    name: "Sonia Marmeladova",
    firm: "Accounting Firm in Peterborough",
    quote:
      "The best perk I enjoyed outsourcing clients was that I am left with more time to focus on growing my practice instead of drowning in paperwork.",
    avatar: "/images/service-detail/ellipse-193-0dfa15d9.png",
  },
  {
    name: "Artful Dodger",
    firm: "Accounting firm in Stamford",
    quote:
      "I have recommended Accountree to my friends having accounting firms of their own. The quality of work and communication has been outstanding.",
    avatar: "/images/service-detail/ellipse-195-7451a1b4.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 sm:px-8 lg:px-[146px] lg:pt-40">
      <h2 className="text-center font-poppins text-2xl font-semibold tracking-[-0.9px] text-black sm:text-3xl lg:text-4xl">
        What our customers say
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl bg-[#3a9b4b] p-8 text-white"
          >
            <p className="font-poppins text-[15px] leading-[25px]">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-[52px] w-[52px] overflow-hidden rounded-full">
                <Image src={t.avatar} alt={t.name} fill sizes="100vw" className="object-cover" />
              </div>
              <div>
                <p className="font-poppins text-lg font-semibold">{t.name}</p>
                <p className="font-poppins text-xs">{t.firm}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
