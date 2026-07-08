import Image from "next/image";

const description =
  "Expert preparation of annual accounts for sole traders, partnerships, and limited companies. We ensure compliance with all regulatory requirements and provide insightful financial analysis.";

const cards = [
  {
    title: "Accounting Bookkeeping",
    image: "/images/home/service-card-bookkeeping.png",
    resources: "40+",
    activeClients: "460+",
  },
  {
    title: "Accounts Preparations",
    image: "/images/home/service-card-accounts-prep.png",
    resources: "50+",
    activeClients: "460+",
  },
  {
    title: "Company Secretarial",
    image: "/images/home/service-card-company-secretarial.png",
    resources: "100+",
    activeClients: "800+",
  },
];

function ServiceCard({
  title,
  image,
  resources,
  activeClients,
}: (typeof cards)[number]) {
  return (
    <div className="relative w-full max-w-[335px] rounded-[27px] bg-[#fbfafa] p-[17px]">
      <div className="relative h-[243px] w-full overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
        <div
          className="absolute inset-x-0 bottom-0 h-[156px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,33,91,0) 0%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div className="absolute left-[8px] top-[13px] flex items-center gap-1.5 text-white">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white">
            <span className="text-xs leading-none">+</span>
          </span>
          <span className="font-poppins text-sm">Need Help?</span>
        </div>
        <h3 className="absolute bottom-3 left-3 right-3 font-poppins text-[27px] font-semibold leading-[35px] tracking-[-0.71px] text-white">
          {title}
        </h3>
      </div>

      <p className="mt-[18px] font-poppins text-sm font-semibold tracking-[-0.71px] text-[#101828]">
        About service:
      </p>
      <p className="mt-1 font-poppins text-sm leading-[22px] tracking-[-0.14px] text-[#4c4c4c]">
        {description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-poppins text-[15px] tracking-[-0.71px] text-[#9c9b9b]">
        <span>Contract Duration</span>
        <span>365Days</span>
        <span>Resources available</span>
        <span>{resources}</span>
        <span>Active Clients</span>
        <span>{activeClients}</span>
      </div>

      <p className="mt-3 font-poppins text-lg font-medium tracking-[-0.71px] text-[#101828]">
        Rating
      </p>
      <div className="mt-1 flex items-center justify-between">
        <div className="flex text-[#ffcd3c]">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-xl leading-none">
              {s}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="h-[50px] w-[145px] rounded-full border border-[#00a63e] font-poppins text-lg tracking-[-0.71px] text-[#00a63e]"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[161px]">
      <div className="mx-auto max-w-[781px] text-center">
        <h2 className="font-poppins text-2xl font-semibold leading-[34px] text-black lg:text-[36px] lg:leading-[39px]">
          Comprehensive Accounting Services
        </h2>
        <p className="mt-6 font-poppins text-base leading-[22px] text-black">
          Our accounting team consists of top talents selected for their
          expertise in specific areas. Each member excels as a star performer
          in their respective domain.
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex h-12 w-full max-w-[449px] items-center rounded-full border border-[#01b444] lg:mt-[75px]">
        <div className="absolute left-0 flex h-12 w-[48%] max-w-[219px] items-center justify-center rounded-full bg-[#01b444]">
          <span className="font-poppins text-sm font-medium text-white sm:text-base">
            Signature Services
          </span>
        </div>
        <span className="ml-auto mr-8 font-poppins text-sm font-medium text-[#101828] sm:text-base">
          All Services
        </span>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:mt-[57px] lg:flex-row lg:gap-[41px]">
        {cards.map((c) => (
          <ServiceCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
