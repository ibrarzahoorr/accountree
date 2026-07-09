import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";

const stats = [
  { key: "clients", value: "1,000+", label: "Active Clients in UK" },
  { key: "accuracy", value: "99%", label: "Accuracy Rate" },
  { key: "multinational", value: "6,000+", label: "Multinational Clients" },
  { key: "deliverables", value: "100%", label: "Deliverables on time" },
];

const tabs = [
  { label: "Accounting", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Payroll", href: "/services/payroll" },
  { label: "VAT Returns", href: "/services/vat-returns" },
  { label: "Self Assessment", href: "/services/self-assessment" },
  { label: "More", href: "/services" },
];

function StatIcon({ statKey }: { statKey: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: 2 };
  if (statKey === "clients") {
    return (
      <svg {...common}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V8" strokeLinecap="round" />
      </svg>
    );
  }
  if (statKey === "accuracy") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </svg>
    );
  }
  if (statKey === "multinational") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceHero({
  heading,
  heroImage,
  serviceName,
}: {
  heading: string;
  heroImage: string;
  serviceName: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-black py-6 sm:py-8 lg:py-10">
      <div className="absolute inset-0">
        <Image src={heroImage} alt={heading} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Header />

      <div className="relative mx-auto max-w-[1512px] px-4 pt-[90px] sm:px-6 lg:px-8 lg:pt-[110px]">
        <div className="mx-auto max-w-[890px] rounded-[28px] border border-white/20 bg-white/10 p-5 text-center backdrop-blur-md sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tabs.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className={`rounded-full px-3 py-1.5 font-poppins text-xs font-medium sm:px-4 sm:text-sm ${
                  t.label === serviceName
                    ? "bg-white/25 text-white"
                    : "bg-white/10 text-white/80"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>

          <h1 className="mx-auto mt-6 max-w-[520px] whitespace-pre-line font-poppins text-2xl font-semibold leading-[32px] text-white sm:text-3xl sm:leading-[40px]">
            {heading}
          </h1>

          <div className="mx-auto mt-8 h-px w-full bg-white/25" />

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="font-poppins text-sm font-semibold text-white sm:text-base">
              {serviceName} Statistics
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2v6" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-left sm:px-4"
              >
                <p className="font-poppins text-xs font-medium text-white/85 sm:text-sm">
                  {s.label}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-poppins text-lg font-semibold text-white sm:text-xl">
                    {s.value}
                  </span>
                  <StatIcon statKey={s.key} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
