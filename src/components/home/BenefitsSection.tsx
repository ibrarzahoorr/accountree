import Image from "next/image";

const row1 = [
  "MTD Ready",
  "Never Miss Deadlines",
  "No more chasing employees",
  "Error-Free Filing",
];
const row2 = [
  "100% Client's Satisfaction",
  "Error-Free Filing",
  "Maximise Reclaims",
  "Maximise Profits",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[#01b444] px-5 py-2.5 font-outfit text-sm font-medium text-[#01b444] sm:text-base">
      {label}
    </span>
  );
}

export default function BenefitsSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[124px]">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:px-[146px]">
        <div className="max-w-[692px] flex-1">
          <h2 className="font-outfit text-[32px] font-semibold leading-[38px] tracking-[-0.9px] text-black lg:text-[50px] lg:leading-[46px]">
            <span className="text-[#3a9b4b]">Benefits</span> of Partnering
            with Accountree
          </h2>
          <p className="mt-8 font-outfit text-base leading-[23px] text-black">
            Comprehensive bookkeeping solutions that integrate seamlessly
            with your practice.
          </p>

          <div className="relative mt-8 h-[220px] w-full overflow-hidden rounded-2xl sm:h-[280px] lg:hidden">
            <Image
              src="/images/home/benefits-team-photo-opt.jpg"
              unoptimized
              alt="Team collaborating"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative hidden h-[210px] w-[437px] shrink-0 overflow-hidden rounded-2xl lg:block">
          <Image
            src="/images/home/benefits-team-photo-opt.jpg"
            unoptimized
            alt="Team collaborating"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:mt-14 lg:px-[146px]">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {row1.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {row2.map((label) => (
            <Pill key={label + "2"} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
