const cards = [
  {
    icon: "mail",
    title: "Email Us",
    value: "info@accountree.co.uk",
  },
  {
    icon: "phone",
    title: "Call Us",
    value: "+44 (0) 20 1234 5678",
  },
  {
    icon: "pin",
    title: "Visit Us",
    value: "London, United Kingdom",
  },
];

function CardIcon({ icon }: { icon: string }) {
  if (icon === "mail") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 6l10 7 10-7" />
      </svg>
    );
  }
  if (icon === "phone") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactInfoCards() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex flex-col items-center gap-4 rounded-2xl bg-[#f2f2f2] p-8 text-center sm:p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3a9b4b]">
              <CardIcon icon={c.icon} />
            </span>
            <p className="font-poppins text-lg font-semibold text-black">
              {c.title}
            </p>
            <p className="font-poppins text-base text-[#4c4c4c]">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
