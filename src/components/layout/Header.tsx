"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header({
  variant = "dark",
  active,
}: {
  variant?: "dark" | "light";
  active?: string;
}) {
  const [open, setOpen] = useState(false);
  const textColor = variant === "dark" ? "text-white" : "text-[#4c4c4c]";
  const logoSrc = "/icons/logo-white.svg";
  const logoClass = variant === "dark" ? "" : "invert";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-[80px] max-w-[1512px] items-center justify-between px-5 sm:px-8 lg:h-[103px] lg:pl-[53px] lg:pr-[67px]">
        <Link href="/" className="block h-5 w-[149px] shrink-0 lg:h-6 lg:w-[179px]">
          <Image
            src={logoSrc}
            alt="accountree"
            width={179}
            height={24}
            priority
            className={`h-5 w-[149px] lg:h-6 lg:w-[179px] ${logoClass}`}
          />
        </Link>

        <nav className="relative hidden h-12 w-[661px] items-center rounded-full lg:flex">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(180deg, #8d8d8d 0%, #bcbcbc 100%)",
              opacity: 0.46,
            }}
          />
          <div className="relative z-10 flex w-full items-center pl-[27px] pr-8">
            <svg
              width="23"
              height="14"
              viewBox="0 0 23 14"
              fill="none"
              className="mr-[38px] shrink-0"
            >
              <rect width="23" height="8" rx="2" fill={variant === "dark" ? "white" : "#4c4c4c"} />
              <rect y="9" width="23" height="5" rx="2" fill={variant === "dark" ? "white" : "#4c4c4c"} />
            </svg>
            <div className="flex items-center gap-[45px]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-poppins text-base font-medium ${
                    active === link.label ? "text-[#00a63e]" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                className={`flex items-center gap-1 font-poppins text-base font-medium ${textColor}`}
              >
                More Options
                <Image
                  src="/icons/chevron-down.svg"
                  alt=""
                  width={21}
                  height={6}
                  className={`mt-0.5 ${variant === "light" ? "invert" : ""}`}
                />
              </button>
            </div>
          </div>
        </nav>

        <Link
          href="#start-free-trial"
          className={`hidden h-[39px] w-[218px] items-center justify-center gap-2 rounded-full border font-poppins text-base font-medium tracking-[-0.16px] lg:flex ${textColor} ${
            variant === "dark" ? "border-white" : "border-[#4c4c4c]"
          }`}
        >
          Start Free Trial
          <Image
            src="/icons/arrow-right-circle.svg"
            alt=""
            width={21}
            height={21}
            className={variant === "light" ? "invert" : ""}
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 ${variant === "dark" ? "bg-white" : "bg-[#4c4c4c]"}`} />
          <span className={`h-0.5 w-6 ${variant === "dark" ? "bg-white" : "bg-[#4c4c4c]"}`} />
        </button>
      </div>

      {open && (
        <div className="mx-5 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-xl sm:mx-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-poppins text-base font-medium ${
                active === link.label ? "text-[#00a63e]" : "text-[#101828]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button type="button" className="text-left font-poppins text-base font-medium text-[#101828]">
            More Options
          </button>
          <Link
            href="#start-free-trial"
            onClick={() => setOpen(false)}
            className="flex h-[45px] items-center justify-center gap-2 rounded-full bg-[#3a9b4b] font-poppins text-base font-medium text-white"
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </header>
  );
}
