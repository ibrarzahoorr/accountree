"use client";

import { useState } from "react";

const benefits = [
  {
    title: "Focus on Growth",
    body: "Use your time to take on more clients and expand your offering.",
    icon: "target" as const,
  },
  {
    title: "Resource Allocation",
    body: "Invest resources in providing the best experience for your clients.",
    icon: "people" as const,
  },
  {
    title: "Scale Efficiently",
    body: "Grow your practice without the overhead of additional staff.",
    icon: "trend" as const,
  },
];

function BenefitIcon({ type }: { type: "target" | "people" | "trend" }) {
  if (type === "target") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#01b444" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="5.5" stroke="#01b444" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2" fill="#01b444" />
      </svg>
    );
  }
  if (type === "people") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="6" r="3" stroke="#01b444" strokeWidth="1.4" />
        <path d="M2 17c0-3 2.5-5 5-5s5 2 5 5" stroke="#01b444" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14.5" cy="7.5" r="2.4" stroke="#01b444" strokeWidth="1.4" />
        <path d="M11.5 17c.3-2.5 2-4.2 4-4.2s3.7 1.7 4 4.2" stroke="#01b444" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 14l5-5 3 3 6-7" stroke="#01b444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5h4v4" stroke="#01b444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CTASection({
  tone = "gray",
}: {
  tone?: "gray" | "green";
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[161px]">
      <div
        className={`relative mx-auto w-full max-w-[1367px] rounded-[25px] px-6 py-12 sm:px-10 lg:px-[101px] lg:py-[134px] ${
          tone === "green" ? "bg-[#eafbea]" : "bg-[#f2f2f2]"
        }`}
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[120px]">
          <div className="lg:w-[592px]">
            <h2 className="font-poppins text-3xl font-bold leading-[38px] text-[#4c4c4c] sm:text-5xl sm:leading-[56px]">
              Transform Your Accountancy Practice
            </h2>
            <p className="mt-[18px] font-poppins text-base text-[#4c4c4c]">
              Utilise Accountree&rsquo;s dedicated accountants as your
              extended team.
            </p>

            <div className="mt-10 flex flex-col gap-6 lg:mt-[65px]">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="mt-1 shrink-0">
                    <BenefitIcon type={b.icon} />
                  </span>
                  <div>
                    <p className="font-poppins text-xl font-bold text-[#4c4c4c] sm:text-[22px]">
                      {b.title}
                    </p>
                    <p className="mt-1 font-poppins text-base text-[#4c4c4c] lg:w-[458px]">
                      {b.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full rounded-[21px] bg-white p-6 shadow-lg sm:p-[30px] lg:w-[508px]">
            {!submitted ? (
              <>
                <h3 className="font-poppins text-2xl font-bold text-[#4c4c4c]">
                  No more delaying
                </h3>
                <p className="mt-2 font-poppins text-base text-[#4c4c4c]">
                  Get in contact with us today and transform your accounting
                  practice.
                </p>

                <form
                  className="mt-6 flex flex-col gap-[13px]"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="flex flex-col gap-[11px] sm:flex-row">
                    <input
                      placeholder="First Name"
                      className="h-[49px] rounded-[11px] border border-[#d0d5dd] px-4 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all sm:w-1/2"
                    />
                    <input
                      placeholder="Last Name"
                      className="h-[49px] rounded-[11px] border border-[#d0d5dd] px-4 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all sm:w-1/2"
                    />
                  </div>
                  <input
                    placeholder="Email"
                    className="h-[49px] rounded-[11px] border border-[#d0d5dd] px-4 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all"
                  />
                  <input
                    placeholder="Phone number"
                    className="h-[49px] rounded-[11px] border border-[#d0d5dd] px-4 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all"
                  />
                  <input
                    placeholder="Company name"
                    className="h-[49px] rounded-[11px] border border-[#d0d5dd] px-4 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Enquiry message"
                    className="h-[102px] resize-none rounded-[11px] border border-[#d0d5dd] px-4 py-3 font-poppins text-base placeholder:text-gray-400 focus:border-[#00a63e] focus:ring-2 focus:ring-[#00a63e]/20 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="mt-1 h-[49px] rounded-[11px] bg-[#00a63e] font-poppins text-base font-bold text-[#efefef] hover:bg-[#008d34] transition-colors duration-300 cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="flex h-full min-h-[500px] flex-col items-center justify-center text-center">
                <h3 className="font-poppins text-2xl font-bold text-[#4c4c4c]">
                  Thanks for reaching out!
                </h3>
                <p className="mt-2 max-w-[350px] font-poppins text-base text-[#4c4c4c]">
                  We&rsquo;ve received your information and will be in touch
                  shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
