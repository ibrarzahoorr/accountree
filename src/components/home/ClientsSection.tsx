import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[161px]">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row lg:px-[186px]">
        <span className="rounded-full border border-[#01b444] px-6 py-2 font-poppins text-[22px] font-medium text-[#01b444]">
          Our Clients
        </span>
        <div className="flex items-center gap-3">
          <div className="flex">
            {["1", "2", "3", "4"].map((n, i) => (
              <div
                key={n}
                className="relative h-[42px] w-[42px] overflow-hidden rounded-full border-2 border-white"
                style={{ marginLeft: i === 0 ? 0 : -12 }}
              >
                <Image
                  src={`/images/home/ellipse-${19 + i}-${
                    ["21a540e4", "0c166c08", "746ec393", "f164ae81"][i]
                  }.png`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="font-poppins text-lg font-semibold text-[#3a9b4b]">
              500+
            </p>
            <p className="font-poppins text-sm text-black">Firms Satisfied</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[820px] text-center font-poppins text-sm leading-[22px] text-[#4c4c4c] lg:text-base">
        We&rsquo;re a UK-based team providing outsourced accounting support
        exclusively for accountancy firms. Our delivery model connects you
        with top-tier accounting talent from around the globe &ndash;
        carefully selected, process-driven, and aligned to your firm&rsquo;s
        exact way of working
      </p>

      <div className="relative mx-auto mt-8 flex max-w-[1400px] w-full items-center justify-center gap-4 px-6 lg:mt-12 lg:h-[557px] lg:px-12">
        <div className="relative hidden h-[463px] lg:flex-[437] max-w-[437px] -rotate-[4deg] overflow-hidden rounded-[21px] shadow-xl lg:block">
          <Image
            src="/images/home/benefits-team-photo-opt.jpg"
            unoptimized
            alt="Partner firm"
            fill
            sizes="437px"
            className="object-cover object-[70%_center]"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[233px]"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 h-[420px] w-full overflow-hidden rounded-[21px] shadow-xl sm:h-[480px] lg:h-[557px] lg:flex-[526] max-w-[526px]">
          <Image
            src="/images/home/partner-photo-3-opt.jpg"
            unoptimized
            alt="Multi-Partner Firms"
            fill
            sizes="526px"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[201px]"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          />
          <div className="absolute bottom-[59px] left-[22px] right-[22px] text-white">
            <p className="font-poppins text-xl font-semibold">
              Multi-Partner Firms
            </p>
            <p className="mt-1 font-poppins text-base font-medium leading-[25px] tracking-[-0.08px]">
              Seamless white-label support that works within your systems,
              processes, and standards — so you can scale without compromise.
            </p>
          </div>
        </div>

        <div className="relative hidden h-[463px] lg:flex-[437] max-w-[437px] rotate-[4deg] overflow-hidden rounded-[21px] shadow-xl lg:block">
          <Image
            src="/images/home/partner-photo-2-opt.jpg"
            unoptimized
            alt="Partner firm"
            fill
            sizes="437px"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[233px]"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
