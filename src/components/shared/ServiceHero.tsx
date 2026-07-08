import Image from "next/image";
import Header from "@/components/layout/Header";

const stats = [
  { value: "1,000+", label: "Active Clients in UK" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "6,000+", label: "Multinational Clients" },
  { value: "100%", label: "Deliverables on time" },
];

export default function ServiceHero({
  heading,
  heroImage,
}: {
  heading: string;
  heroImage: string;
}) {
  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-black sm:h-[560px] lg:h-[610px]">
      <Image src={heroImage} alt={heading} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />

      <Header />

      <div className="relative mx-auto max-w-[1512px] px-5 pt-[120px] sm:px-8 sm:pt-[150px] lg:px-[146px] lg:pt-[180px]">
        <p className="font-poppins text-base font-medium tracking-[-0.5px] text-white">
          All services
        </p>
        <h1 className="mt-4 max-w-[680px] whitespace-pre-line font-poppins text-2xl font-semibold leading-[32px] tracking-[-0.5px] text-white sm:text-3xl sm:leading-[40px] lg:text-[40px] lg:leading-[47px]">
          {heading}
        </h1>

        <div className="mt-10 grid w-fit grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-16 sm:gap-y-0 lg:mt-16">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-poppins text-xl font-semibold tracking-[-2px] text-white lg:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 font-poppins text-xs font-bold tracking-[-0.5px] text-white sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
