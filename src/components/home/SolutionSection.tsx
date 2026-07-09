import Image from "next/image";

const leftBullets = [
  {
    title: "We reduce costs by up to 60%",
    body: "Get more profit margins plus economical rate to clients with skilled resources.",
  },
  {
    title: "UK-trained accountants",
    body: "Qualified professionals who understand UK compliance.",
  },
  {
    title: "Scale without hiring",
    body: "Grow your team without recruitment hassles.",
  },
];

const rightBullets = [
  {
    title: "Meet every deadline",
    body: "Our efficient processes ensure timely delivery.",
  },
  {
    title: "Focus on clients",
    body: "Spend more time building relationships and growth.",
  },
  {
    title: "Complete data security",
    body: "Your data is protected with enterprise-grade security.",
  },
];

export default function SolutionSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[124px]">
      <div className="mx-auto max-w-[782px] text-center">
        <svg
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
          className="mx-auto mb-4"
        >
          <path
            d="M20 0l3.5 3.2 4.7-1 1.9 4.5 4.8.8-0.3 4.9 4 2.9-2.6 4.1 2.6 4.1-4 2.9.3 4.9-4.8.8-1.9 4.5-4.7-1L20 37l-3.5-3.2-4.7 1-1.9-4.5-4.8-.8.3-4.9-4-2.9 2.6-4.1L1.4 13l4-2.9-.3-4.9 4.8-.8 1.9-4.5 4.7 1L20 0z"
            fill="#00a63e"
          />
          <path
            d="M13 19l4.5 4.5L27 14"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-poppins text-2xl font-semibold leading-[34px] text-black lg:text-[28px] lg:leading-[39px]">
          Outsourcing is the new solution
        </h2>
        <p className="mt-4 font-poppins text-base leading-[22px] text-black">
          Outsourcing does not mean compromise. We deliver the quality, care,
          and control your clients need with flexibility and cost efficiency.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-[1247px] rounded-[32px] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.10)] lg:mt-[91px] lg:rounded-[40px] lg:px-[41px] lg:py-[50px]">
        <div className="relative z-10 lg:max-w-[792px]">
          <h3 className="font-poppins text-2xl font-semibold leading-[40px] text-[#101828] lg:text-[28px] lg:leading-[60px]">
            Understanding
          </h3>
          <p className="-mt-2 font-poppins text-sm leading-[22px] text-black">
            We understand the challenges UK accounting firms face. Our
            outsourcing solutions help you scale efficiently while
            maintaining the highest standards of quality and compliance.
          </p>

          <div className="relative mt-8 h-[300px] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[380px] lg:hidden">
            <Image
              src="/images/home/understanding-photo-1-opt.jpg"
              unoptimized
              alt="Accountree team presenting"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            <div className="flex flex-col gap-8">
              {leftBullets.map((b) => (
                <div key={b.title}>
                  <p className="font-poppins text-sm font-semibold text-black">
                    {b.title}
                  </p>
                  <p className="mt-1 font-poppins text-sm text-black">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              {rightBullets.map((b) => (
                <div key={b.title}>
                  <p className="font-poppins text-sm font-semibold text-black">
                    {b.title}
                  </p>
                  <p className="mt-1 font-poppins text-sm text-black">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo breaking out the top-right of the card (desktop only) */}
        <div className="pointer-events-none absolute left-[949px] top-[-37px] hidden h-[559px] w-[378px] overflow-hidden rounded-2xl shadow-xl lg:block">
          <Image
            src="/images/home/understanding-photo-1-opt.jpg"
              unoptimized
            alt="Accountree team presenting"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
