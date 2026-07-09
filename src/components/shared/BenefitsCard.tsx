import Image from "next/image";

function SwapIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#01b444]">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 5h8m0 0l-3-3m3 3l-3 3"
          stroke="#01b444"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9H4m0 0l3-3m-3 3l3 3"
          stroke="#01b444"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[#01b444] px-5 py-2.5 font-poppins text-sm font-medium text-[#01b444] sm:text-base">
      {label}
    </span>
  );
}

type Item = { pill?: string; icon?: true };

const row1: Item[] = [
  { pill: "MTD Ready" },
  { pill: "Never Miss Deadlines" },
  { icon: true },
  { pill: "No more chasing employees" },
  { pill: "Error-Free Filing" },
];

const row2: Item[] = [
  { pill: "100% Client's Satisfaction" },
  { icon: true },
  { pill: "Error-Free Filing" },
  { pill: "Maximise Reclaims" },
  { icon: true },
  { pill: "Maximise Profits" },
];

export default function BenefitsCard() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 sm:px-8 lg:px-[146px] lg:pt-40">
      <div className="rounded-[28px] bg-white p-6 shadow-xl sm:p-10 lg:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <h2 className="font-poppins text-2xl font-semibold leading-[34px] text-black sm:text-3xl sm:leading-[40px] lg:text-[32px] lg:leading-[40px]">
              <span className="text-[#01b444]">Benefits</span> of partnering
              <br />
              with accountree
            </h2>
            <p className="mt-6 font-poppins text-base leading-[26px] text-black">
              Comprehensive bookkeeping solutions that integrate seamlessly
              with your practice. We handle the day-to-day so you can focus
              on growing your business. Our expert team ensures accuracy and
              efficiency, allowing you to make informed decisions. Let us
              take care of the numbers while you concentrate on what you do
              best.
            </p>

            <div className="relative mt-8 h-[200px] w-full overflow-hidden rounded-2xl sm:h-[240px] lg:hidden">
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

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
            {row1.map((item, i) =>
              item.icon ? <SwapIcon key={i} /> : <Pill key={i} label={item.pill!} />
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
            {row2.map((item, i) =>
              item.icon ? <SwapIcon key={i} /> : <Pill key={i} label={item.pill!} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
