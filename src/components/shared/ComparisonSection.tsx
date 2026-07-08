import Image from "next/image";

const outsourceRows = [
  { title: "Cost effective", value: "60% more affordable" },
  { title: "Low Staff Turnover", value: "Less than 2%" },
  { title: "High Scale/Growth", value: "Easy and Flexible" },
  { title: "Recruitment", value: "No Ads, No Agencies" },
];

const inHouseRows = [
  { title: "Cost Ineffective", value: "Full salary + Benefits + Allowance" },
  { title: "Higher Staff Turnover", value: "Industry Average 15%-20%" },
  { title: "Scale/Growth", value: "Difficult and time consuming" },
  { title: "Recruitment", value: "Ads + Agencies + time" },
];

export default function ComparisonSection({
  serviceName,
}: {
  serviceName: string;
}) {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 text-center sm:px-8 lg:px-[146px] lg:pt-40">
      <h2 className="font-poppins text-2xl font-semibold text-black sm:text-3xl lg:text-4xl">
        Outsourced {serviceName} vs In-House
      </h2>
      <p className="mx-auto mt-4 max-w-[773px] font-poppins text-base leading-[22px] text-black">
        Every account statement we prepare requires your approval We take
        your approval holy! Either it gets approved by you or goes back to
        accountants for revisions
      </p>

      <div className="relative mx-auto mt-12 flex max-w-[1220px] flex-col justify-center gap-0 lg:mt-16 lg:flex-row lg:gap-6">
        <div className="relative w-full overflow-hidden rounded-2xl lg:w-[504px]">
          <div className="relative h-[200px] w-full sm:h-[263px]">
            <Image
              src="/images/service-detail/rectangle-6079-5fd45b0c.png"
              alt={`Outsource ${serviceName}`}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%)" }}
            />
            <h3 className="absolute bottom-4 left-6 font-poppins text-xl font-semibold text-white sm:text-3xl">
              Outsource
              <br />
              {serviceName}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-y-8 bg-white px-6 py-8 text-left">
            {outsourceRows.map((r) => (
              <div key={r.title}>
                <p className="font-poppins text-base font-semibold text-black">
                  {r.title}
                </p>
                <p className="mt-1 font-poppins text-base text-[#3a9b4b]">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 -my-6 mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-poppins text-xl font-semibold text-black shadow-lg lg:absolute lg:left-1/2 lg:top-[110px] lg:my-0 lg:h-16 lg:w-16 lg:-translate-x-1/2 lg:text-2xl">
          VS
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl lg:w-[504px]">
          <div className="relative h-[200px] w-full sm:h-[262px]">
            <Image
              src="/images/service-detail/rectangle-6081-560f4e9d.png"
              alt={`In-house ${serviceName}`}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%)" }}
            />
            <h3 className="absolute bottom-4 left-6 font-poppins text-xl font-semibold text-white sm:text-3xl">
              In-House
              <br />
              {serviceName}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-y-8 bg-white px-6 py-8 text-left">
            {inHouseRows.map((r) => (
              <div key={r.title}>
                <p className="font-poppins text-base font-semibold text-black">
                  {r.title}
                </p>
                <p className="mt-1 font-poppins text-base text-[#beaaaa]">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="mt-8 rounded-full bg-gradient-to-r from-[#3a9b4b] to-[#01b444] px-8 py-4 font-poppins text-base font-medium text-white sm:text-lg">
        Switch to outsourcing
      </button>
    </section>
  );
}
