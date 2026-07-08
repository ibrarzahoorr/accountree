import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "300+", label: "UK accounting firms served" },
  { value: "50,000+", label: "Transactions processed monthly" },
  { value: "25,000+", label: "VAT Returns filed" },
];

export default function IntroStats() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="lg:max-w-[568px]">
          <h2 className="font-poppins text-2xl font-semibold text-black sm:text-[28px] lg:text-[32px]">
            From Humble Beginnings to Industry Leaders
          </h2>
          <p className="mt-6 font-poppins text-base font-light leading-[26px] text-black">
            Accountree was founded with a clear vision: to provide UK
            accountancy practices with access to highly skilled professionals
            who could seamlessly integrate into their operations while
            delivering exceptional value. Over the years, we have grown from
            a small team to a comprehensive outsourcing partner serving
            hundreds of UK accounting firms. Our growth has been driven by
            our unwavering commitment to quality, transparency, and client
            success. Today, we continue to innovate and expand our services,
            staying ahead of industry trends and technological advancements
            to ensure our clients receive the best possible support for
            their practices.
          </p>
          <button className="mt-8 font-poppins text-base font-medium text-[#01b444]">
            Trust and join the accountree team →
          </button>
        </div>

        <div className="relative grid flex-1 grid-cols-2 gap-4">
          <div className="relative col-span-2 h-[180px] overflow-hidden rounded-2xl sm:h-[244px]">
            <Image src="/images/about/rectangle-6103-ef8269a7.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative h-[160px] overflow-hidden rounded-2xl sm:h-[240px]">
            <Image src="/images/about/rectangle-6102-d6a727bc.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative h-[160px] overflow-hidden rounded-2xl sm:h-[221px]">
            <Image src="/images/about/rectangle-6104-1408ac14.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#e5e5e5] pt-10 sm:grid-cols-4 lg:mt-16">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-poppins text-3xl font-semibold text-black">
              {s.value}
            </p>
            <p className="mt-2 font-poppins text-sm text-black">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
