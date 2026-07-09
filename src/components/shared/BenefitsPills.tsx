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

function BorderPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#3a9b4b] px-5 py-2 font-poppins text-sm font-medium text-[#3a9b4b] transition-all duration-300 hover:bg-[#3a9b4b] hover:text-white cursor-pointer select-none">
      {label}
    </span>
  );
}

export default function BenefitsPills({
  heading = "Benefits of Partnering with accountree.",
}: {
  heading?: string;
}) {
  return (
    <div>
      <h2 className="font-outfit text-3xl font-semibold leading-[38px] tracking-[-0.9px] text-black sm:text-4xl sm:leading-[42px] lg:text-5xl lg:leading-[56px]">
        <span className="text-[#3a9b4b]">Benefits</span>{" "}
        {heading.replace(/^Benefits /, "")}
      </h2>

      <div className="mt-8 flex flex-col gap-4 lg:mt-10">
        <div className="flex flex-wrap gap-3">
          {row1.map((label) => (
            <BorderPill key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {row2.map((label) => (
            <BorderPill key={label + "2"} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
