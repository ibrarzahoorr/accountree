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

export default function BenefitsPills({
  heading = "Benefits of Partnering with accountree.",
}: {
  heading?: string;
}) {
  return (
    <div>
      <h2 className="font-outfit text-3xl font-semibold leading-[38px] tracking-[-0.9px] text-black sm:text-4xl sm:leading-[42px] lg:text-5xl lg:leading-[46px]">
        <span className="text-[#3a9b4b]">Benefits</span>{" "}
        {heading.replace(/^Benefits /, "")}
      </h2>

      <div className="mt-8 flex flex-col gap-6 lg:mt-10">
        <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6">
          {row1.map((label) => (
            <CheckPill key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6">
          {row2.map((label) => (
            <CheckPill key={label + "2"} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
