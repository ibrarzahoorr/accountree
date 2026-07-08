import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Accounts Preparation", href: "/services/accounts-preparation" },
  { label: "VAT Returns", href: "/services/vat-returns" },
  { label: "Payroll Processing", href: "/services/payroll" },
  { label: "Tax Returns", href: "/services/corporate-tax" },
];

const socialIcons = [
  { label: "LinkedIn", path: "M4.98 3.5a2 2 0 11-4 0 2 2 0 014 0zM.5 8h4v12h-4V8zm7.5 0h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V20h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20h-4V8z" },
  { label: "Twitter", path: "M23 4.5c-.8.35-1.6.6-2.5.7.9-.55 1.6-1.4 1.9-2.4-.85.5-1.8.85-2.8 1.05C18.8 2.9 17.7 2.4 16.5 2.4c-2.35 0-4.25 1.9-4.25 4.25 0 .35.04.65.1.95-3.55-.2-6.7-1.9-8.8-4.5-.35.65-.6 1.4-.6 2.2 0 1.5.75 2.8 1.9 3.6-.7 0-1.35-.2-1.95-.5v.05c0 2.1 1.5 3.8 3.45 4.2-.35.1-.75.15-1.15.15-.3 0-.55-.05-.8-.1.55 1.7 2.15 2.95 4.05 3-1.5 1.15-3.35 1.85-5.4 1.85-.35 0-.7 0-1.05-.05C3.5 20.3 5.8 21 8.3 21c7.55 0 11.7-6.25 11.7-11.7v-.55c.8-.55 1.5-1.3 2-2.25z" },
  { label: "Facebook", path: "M13 22v-9h3l.5-4H13V6.5c0-1.15.3-1.95 1.95-1.95H16.5V1.1C16.2 1.05 15.15 1 13.95 1 11.4 1 9.65 2.55 9.65 5.3v3.7H7v4h2.65v9H13z" },
  { label: "Instagram", path: "M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.07.06 1.42.06 4.13s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.06-.01-4.13-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.06.06-4.13c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 011.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 1.8c-2.66 0-2.98.01-4.03.06-.97.04-1.5.2-1.85.34-.46.18-.8.4-1.15.75-.35.35-.57.69-.75 1.15-.14.35-.3.88-.34 1.85C3.83 9.02 3.82 9.34 3.82 12s.01 2.98.06 4.03c.04.97.2 1.5.34 1.85.18.46.4.8.75 1.15.35.35.69.57 1.15.75.35.14.88.3 1.85.34 1.05.05 1.37.06 4.03.06s2.98-.01 4.03-.06c.97-.04 1.5-.2 1.85-.34.46-.18.8-.4 1.15-.75.35-.35.57-.69.75-1.15.14-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.03s-.01-2.98-.06-4.03c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.35-.14-.88-.3-1.85-.34C14.98 3.83 14.66 3.82 12 3.82zm0 3.06a5.12 5.12 0 110 10.24 5.12 5.12 0 010-10.24zm0 1.8a3.32 3.32 0 100 6.64 3.32 3.32 0 000-6.64zm5.32-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
  { label: "YouTube", path: "M23 12s0-3.6-.46-5.32a2.9 2.9 0 00-2.05-2.06C18.8 4.15 12 4.15 12 4.15s-6.8 0-8.5.47a2.9 2.9 0 00-2.05 2.06C1 8.4 1 12 1 12s0 3.6.45 5.32c.26 1 1.03 1.77 2.05 2.06 1.7.47 8.5.47 8.5.47s6.8 0 8.5-.47a2.9 2.9 0 002.05-2.06C23 15.6 23 12 23 12zM9.75 15.4V8.6L15.5 12l-5.75 3.4z" },
];

const contactItems = [
  { label: "info@accountree.co.uk", icon: "mail" },
  { label: "+44 (0) 20 1234 5678", icon: "phone" },
  { label: "London, United Kingdom", icon: "pin" },
];

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "mail") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a9b4b" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 6l10 7 10-7" />
      </svg>
    );
  }
  if (icon === "phone") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a9b4b" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a9b4b" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1512px] px-5 pt-12 sm:px-8 lg:px-[146px] lg:pt-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/logo-white.svg"
              alt="accountree"
              width={140}
              height={20}
              className="invert"
            />
          </div>
          <p className="mt-4 max-w-[260px] font-poppins text-sm text-[#686868]">
            Your trusted partner for accounting outsourcing. Helping UK
            accounting firms scale efficiently.
          </p>
          <div className="mt-4 flex gap-2">
            {socialIcons.map((s) => (
              <span
                key={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f2] text-[#686868]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-semibold text-black">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="font-poppins text-sm text-[#686868]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-semibold text-black">Services</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="font-poppins text-sm text-[#686868]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-lg font-semibold text-black">Contact Us</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {contactItems.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <ContactIcon icon={c.icon} />
                <span className="font-poppins text-sm text-[#686868]">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#e5e5e5] py-6 sm:flex-row sm:justify-between sm:gap-0">
        <p className="font-poppins text-sm text-[#686868]">
          © 2026 Accountree. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="font-poppins text-sm text-[#686868]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-poppins text-sm text-[#686868]">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
