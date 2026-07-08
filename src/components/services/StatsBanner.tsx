import Image from "next/image";

const stats = [
  { label: "Years of Expertise", value: "12+ Year of Serving Experience" },
  { label: "Client Success", value: "98% Client Satisfaction Rate" },
  { label: "Payroll Accuracy", value: "9000+ Payrolls Accurately Processed" },
  { label: "Accounting Excellence", value: "12000+ Accounts Finalized" },
  { label: "Vat Precision", value: "8000+ Vat Returns Filed" },
  { label: "Tax Return Efficiency", value: "15000+ Self-Assessment Tax Returns" },
];

export default function StatsBanner() {
  return (
    <section className="relative mt-16 w-full overflow-hidden py-10 lg:mt-[161px] lg:h-[431px] lg:py-0">
      <Image
        src="/images/services/ecofriendly-building-2e5af841.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto grid max-w-[1512px] grid-cols-1 items-center gap-x-16 gap-y-4 px-6 sm:grid-cols-2 sm:gap-y-6 lg:h-full lg:px-[146px]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="font-outfit text-base font-medium text-white lg:text-lg">
              {s.label}
            </span>
            <span className="font-outfit text-lg font-medium text-white lg:text-[22px]">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
