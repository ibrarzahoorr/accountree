import Image from "next/image";

const measures = [
  {
    title: "Strong Passwords",
    body: "Strong password protocol through combination of characters, numbers and symbols.",
  },
  {
    title: "Tough Firewall",
    body: "Network protection via stringent firewall configuration and monitoring.",
  },
  {
    title: "Secure Every Device",
    body: "Disk level data encryption & password restricted access on every device.",
  },
  {
    title: "Regular Updates",
    body: "All computers are regularly patched and updated with the latest security fixes.",
  },
  {
    title: "Scheduled Backups",
    body: "Rigorous implementation of pre-scheduled data backups across all systems.",
  },
  {
    title: "Anti-virus Protection",
    body: "Anti-virus and anti-malware enabled continuously across every workstation.",
  },
];

export default function DataSecuritySection() {
  return (
    <section className="relative mx-auto mt-16 w-full overflow-hidden lg:mt-24">
      <div className="relative w-full lg:h-[607px]">
        <Image
          src="/images/about/0-abstract-green-1280x720-1-d49da98a.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative mx-auto max-w-[1512px] px-6 py-12 text-center sm:px-8 lg:px-[146px] lg:py-16">
          <h2 className="font-poppins text-2xl font-semibold text-black sm:text-3xl lg:text-5xl">
            We Deliver{" "}
            <span className="font-outfit text-[#101828]">Uncompromised</span>
          </h2>
          <h2 className="font-outfit text-2xl font-semibold text-[#3a9b4b] sm:text-3xl lg:text-5xl">
            Data Security.
          </h2>

          <h3 className="mt-10 text-left font-poppins text-xl font-semibold text-black sm:text-2xl lg:mt-16 lg:text-4xl">
            Security Measures
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
            {measures.map((m) => (
              <div key={m.title}>
                <p className="font-poppins text-base font-semibold text-black">
                  {m.title}
                </p>
                <p className="mt-1 font-poppins text-sm leading-5 text-black">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
