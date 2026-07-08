"use client";

import { useState } from "react";

const tabs = [
  "MTD reports",
  "Cloud integration",
  "Xero and QB Migration",
  "Industry specific bookkeeping",
  "Critical financial indicators check",
  "Record-keeping",
  "Backlog clearance services",
  "Processing Sales, Revenue & Transactions",
];

const panelDescription =
  "Our accounting team consists of top talents selected for their expertise in specific areas. Each member excels as a star performer in their respective domain. Our accounting team consists of top talents selected for their expertise in specific areas. Each member excels as a star performer in their respective domain.";

export default function WhatsIncludedTabs({
  serviceName,
}: {
  serviceName: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 sm:px-8 lg:px-[146px] lg:pt-40">
      <h2 className="font-poppins text-2xl font-semibold tracking-[-1px] text-black sm:text-[28px] lg:text-[32px]">
        What&rsquo;s Included in {serviceName}
      </h2>

      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-10">
        <div className="flex w-full flex-col rounded-2xl bg-[#3a9b4b] p-2 lg:w-[380px] lg:shrink-0">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`rounded-xl px-4 py-3 text-left font-poppins text-base font-medium tracking-[-0.16px] transition-colors ${
                active === i
                  ? "bg-white text-[#3a9b4b]"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 pt-2">
          <h3 className="font-poppins text-2xl font-semibold tracking-[-0.24px] text-[#3a9b4b]">
            MTD (Making Tax Digital) Reporting
          </h3>
          <p className="mt-4 max-w-[623px] font-poppins text-sm leading-[25px] text-[#5c5c5c]">
            {panelDescription}
          </p>
          <div className="mt-8 flex gap-6">
            <button className="font-poppins text-sm font-medium text-[#bfbfbf]">
              Back
            </button>
            <button className="font-poppins text-sm font-medium text-[#3a9b4b]">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
