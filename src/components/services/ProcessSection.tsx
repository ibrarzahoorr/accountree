import Image from "next/image";

const steps = [
  {
    title: "Preliminary Discussion",
    body: "We kickstart our working relationship by discussing your business requirements, reason for outsourcing, and what you hope to achieve with our support.",
  },
  {
    title: "Weaving Master Plan",
    body: "After analyzing your workflow, we will develop a tailored management plan designed around your specific processes.",
  },
  {
    title: "Contract agreement",
    body: "With your Approval we move towards signing the contract and formalising our partnership.",
  },
  {
    title: "Service commencement",
    body: "Once the formalities and paperwork are completed, we will assign your dedicated accounting team.",
  },
  {
    title: "Weekly Meeting",
    body: "We also take this time out to hear your grievances and improve our processes accordingly. It also gives us an opportunity to check you are satisfied with our work and to make any adjustments accordingly.",
  },
];

export default function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-[161px]">
      <h2 className="font-poppins text-2xl font-semibold text-black sm:text-3xl lg:text-4xl">
        The Process
      </h2>
      <p className="mt-4 max-w-[1046px] font-poppins text-base leading-[26px] text-black lg:text-lg lg:leading-[30px]">
        As a process-driven company, we prioritize what matters most to you
        and your business. Our dedicated team collaborates closely with you
        to tailor solutions that align with your goals. We believe that
        understanding your unique needs is key to delivering exceptional
        results.
      </p>

      <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-16">
        <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[320px] lg:h-[352px] lg:w-[534px]">
          <Image
            src="/images/services/image-6-557a6ee3.png"
            alt="Team discussing process"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-6">
          {steps.map((s) => (
            <div key={s.title}>
              <h3 className="font-poppins text-lg font-semibold text-black">
                {s.title}
              </h3>
              <p className="mt-1 font-poppins text-base leading-[25px] text-black">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
