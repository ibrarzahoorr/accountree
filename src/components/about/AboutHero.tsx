import Image from "next/image";
import Header from "@/components/layout/Header";

const tags = [
  "Accounting",
  "Bookkeeping",
  "Payroll",
  "VAT Returns",
  "Self Assessment",
  "Corporate tax",
  "All services",
];

export default function AboutHero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-black sm:h-[580px] lg:h-[655px]">
      <Image
        src="/images/about/0-london-england-1920x1080-1-75650c07.png"
        alt="London skyline"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <Header />

      <div className="relative mx-auto flex h-full max-w-[1512px] flex-col items-center justify-center px-6 text-center sm:px-8 lg:px-[146px]">
        <h1 className="font-poppins text-3xl font-semibold leading-[36px] tracking-[-0.5px] text-white sm:text-4xl sm:leading-[48px]">
          Your Trusted
          <br />
          Outsourcing Partners
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-16 sm:gap-4">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 font-poppins text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-[#01b444] hover:border-[#01b444] cursor-pointer shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
