import Image from "next/image";
import Link from "next/link";

const bookkeepingDesc =
  "Comprehensive bookkeeping solutions including transaction recording, detailed financial reporting, and timely tax preparation services.";
const payrollDesc =
  "End-to-end payroll management including RTI submissions, pension auto-enrolment, and all statutory requirements. Accurate, compliant, and on time.";

const services = [
  {
    title: "Book Keeping",
    desc: bookkeepingDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-a92c66bd.png",
    href: "/services/bookkeeping",
  },
  {
    title: "VAT Returns",
    desc: payrollDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-a92c66bd.png",
    href: "/services/vat-returns",
  },
  {
    title: "Payroll",
    desc: payrollDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-a3fc2ec4.png",
    href: "/services/payroll",
  },
  {
    title: "Self Assessment",
    desc: bookkeepingDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-dd83d611.png",
    href: "/services/self-assessment",
  },
  {
    title: "Accounts Preparation",
    desc: payrollDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-0bd1b85f.png",
    href: "/services/accounts-preparation",
  },
  {
    title: "Corporation Tax",
    desc: payrollDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-7ea46b9c.png",
    href: "/services/corporate-tax",
  },
  {
    title: "Company Secretarial",
    desc: bookkeepingDesc,
    image: "/images/services/spreadsheet-marketing-budget-report-file-concept-1-0aa8920a.png",
    href: "/services/company-secretarial",
  },
  {
    title: "Management Accounts",
    desc: bookkeepingDesc,
    image: "/images/services/rectangle-40-3734b04e.png",
    href: "/services/management-accounts",
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[100px]">
      <div className="mx-auto max-w-[781px] text-center">
        <h2 className="font-poppins text-2xl font-semibold text-black sm:text-3xl lg:text-4xl">
          Expert Accounting Services
        </h2>
        <p className="mx-auto mt-4 max-w-[961px] font-poppins text-base text-black sm:text-lg">
          Our accounting team consists of top talents selected for their
          expertise in specific areas. Each member excels as a star performer
          in their respective domain.
        </p>
      </div>

      <div className="mx-auto mt-10 w-fit rounded-full bg-[#3a9b4b] px-8 py-4">
        <span className="font-poppins text-base font-medium text-white">
          Outsource Workload
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10 lg:px-[146px]">
        {services.map((s) => (
          <div key={s.title} className="w-full rounded-2xl bg-[#fbfafa] p-3 sm:mx-auto sm:max-w-[265px]">
            <div className="relative h-[214px] w-full overflow-hidden rounded-xl">
              <Image src={s.image} alt={s.title} fill className="object-cover" />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-poppins text-xs font-medium text-black">
                Start Trial
              </span>
            </div>
            <h3 className="mt-4 font-poppins text-lg font-semibold tracking-[-0.6px] text-[#101828]">
              {s.title}
            </h3>
            <p className="mt-2 font-poppins text-sm leading-[22px] tracking-[-0.14px] text-black">
              {s.desc}
            </p>
            <Link
              href={s.href}
              className="mt-3 inline-block font-poppins text-sm font-medium text-[#00a63e]"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
