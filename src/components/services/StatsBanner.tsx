"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { label: "Years of Expertise", value: "12+ Year of Serving Experience" },
  { label: "Client Success", value: "98% Client Satisfaction Rate" },
  { label: "Payroll Accuracy", value: "9000+ Payrolls Accurately Processed" },
  { label: "Accounting Excellence", value: "12000+ Accounts Finalized" },
  { label: "Vat Precision", value: "8000+ Vat Returns Filed" },
  { label: "Tax Return Efficiency", value: "15000+ Self-Assessment Tax Returns" },
];

const ROW_HEIGHT = 72;

export default function StatsBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % stats.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-40">
      <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[28px]">
        <Image
          src="/images/services/ecofriendly-building-2e5af841.jpg"
          alt=""
          fill
          sizes="1220px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#01b444]/70 via-black/50 to-black/75 backdrop-blur-[2px]" />

        <div className="relative flex flex-col p-6 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute left-4 right-4 rounded-full border border-white/40 bg-white/10 shadow-[0_0_24px_rgba(255,255,255,0.15)] backdrop-blur-md transition-transform duration-700 ease-in-out sm:left-8 sm:right-8 lg:left-10 lg:right-10"
            style={{
              height: ROW_HEIGHT - 8,
              transform: `translateY(${active * ROW_HEIGHT + 4}px)`,
            }}
          />
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative z-10 flex items-center justify-between gap-4 px-4 sm:px-6"
              style={{ height: ROW_HEIGHT }}
            >
              <span className="font-outfit text-sm font-medium text-white sm:text-base lg:text-lg">
                {s.label}
              </span>
              <span className="font-outfit text-base font-medium text-white sm:text-lg lg:text-[22px]">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
