import Image from "next/image";

const industries = [
  "Car Care",
  "Retail",
  "Franchises",
  "Law Firms",
  "Restaurant",
  "Property Management",
  "Construction",
  "Healthcare",
  "Nonprofits",
  "Health & Wellness",
  "Hospitality",
  "Education",
  "Distribution & Manufacturing",
  "Senior Living Centres",
];

export default function IndustriesSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 text-center sm:px-8 lg:px-[146px] lg:pt-24">
      <h2 className="font-poppins text-2xl font-semibold text-black sm:text-3xl lg:text-4xl">
        Industries We Serve
      </h2>
      <p className="mx-auto mt-4 max-w-[693px] font-poppins text-base leading-[25px] text-black">
        We have extensive experience working across diverse sectors,
        delivering tailored accounting solutions for each industry.
      </p>

      <div className="relative mx-auto mt-10 h-[420px] max-w-[1219px] overflow-hidden rounded-2xl sm:h-[480px] lg:mt-12 lg:h-[576px]">
        <Image
          src="/images/about/0-new-york-city-nyc-1920x1080-1-4a1d423c.png"
          alt="City skyline"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative grid grid-cols-2 items-center justify-items-center gap-6 p-6 sm:grid-cols-3 sm:p-8 lg:h-full lg:grid-cols-4 lg:p-12">
          {industries.map((ind) => (
            <span
              key={ind}
              className="max-w-[140px] text-center font-poppins text-xs text-white sm:text-sm"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
