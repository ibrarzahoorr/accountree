import Image from "next/image";
import Header from "@/components/layout/Header";

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-10 lg:h-[760px] lg:pb-0">
      <Header variant="light" active="Services" />

      <span className="pointer-events-none absolute left-1/2 top-[180px] hidden -translate-x-1/2 select-none whitespace-nowrap font-outfit text-[305px] font-semibold leading-none tracking-[-3px] text-black/5 lg:top-[266px] lg:block">
        Services
      </span>

      <div className="relative mx-auto max-w-[1512px] px-5 pt-[100px] sm:px-8 lg:px-[146px] lg:pt-[242px]">
        <h1 className="max-w-[732px] font-outfit text-3xl font-semibold leading-[38px] tracking-[-0.5px] text-black sm:text-4xl lg:text-5xl lg:leading-[54px]">
          We are ready to take off your Workload.
        </h1>
        <p className="mt-6 max-w-[749px] font-poppins text-base leading-5 text-black">
          Expert services we offer are well designed to lower down your cost
          and increase in growth. The error free SOPs are well designed for
          accounting firms as well as clients
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="h-[53px] rounded-full bg-[#3a9b4b] px-8 font-poppins text-base font-semibold text-white">
            Start Free Trial
          </button>
          <button className="h-[53px] rounded-full border border-[#00a63e] px-8 font-poppins text-base font-semibold text-[#00a63e]">
            Book a call
          </button>
        </div>

        <div className="relative mt-10 h-[280px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:absolute lg:right-0 lg:top-[95px] lg:mt-0 lg:h-[633px] lg:w-[841px]">
          <Image
            src="/images/services/image-87-99cdac7f.png"
            alt="Accountree team at work"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
