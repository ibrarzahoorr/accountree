"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/images/services/image-63-e8d499c3.png", w: 192, h: 48, alt: "Xero" },
  { src: "/images/services/image-59-6d97a515.png", w: 128, h: 41, alt: "QuickBooks" },
  { src: "/images/services/image-61-9cf762fb.png", w: 114, h: 64, alt: "Sage" },
  { src: "/images/services/image-60-dfea00cb.png", w: 208, h: 44, alt: "KashFlow" },
  { src: "/images/services/image-64-ba02efe3.png", w: 149, h: 51, alt: "Zoho Books" },
];

export default function SoftwareSupport() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-[161px] text-center">
      <h2 className="font-poppins text-2xl font-semibold tracking-[-0.35px] text-[#07080b] sm:text-3xl lg:text-[35px]">
        Software We Support
      </h2>
      <div
        ref={ref}
        className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:mt-12 lg:gap-16"
      >
        {logos.map((l, i) => (
          <div
            key={l.alt}
            className="relative transition-all ease-out"
            style={{
              width: l.w * 0.75,
              height: l.h * 0.75,
              maxWidth: l.w,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDuration: "600ms",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <Image src={l.src} alt={l.alt} fill sizes="100vw" className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
