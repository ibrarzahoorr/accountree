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

function CheckPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="8" fill="#3a9b4b" />
        <path
          d="M4.5 8.2L6.7 10.4L11.5 5.6"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-outfit text-[17px] font-medium text-[#3a9b4b]">
        {label}
      </span>
    </div>
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

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {row1.map((label) => (
                <CheckPill key={label} label={label} />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              {row2.map((label) => (
                <CheckPill key={label + "2"} label={label} />
              ))}
            </div>
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
    </section>
  );
}
