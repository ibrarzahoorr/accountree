const t3 = [
  {
    title: "Team",
    body: "Qualified professionals with UK accounting expertise and consistent training.",
  },
  {
    title: "Transparency",
    body: "Complete visibility into our processes with regular reporting and updates.",
  },
  {
    title: "Technology",
    body: "Advance software integration and secure systems to ensure efficient delivery.",
  },
];

const c3 = [
  {
    title: "Collaboration",
    body: "Seamless integration with your practice, working as a true extension of your team.",
  },
  {
    title: "Communication",
    body: "Aligned business hours with UK timezone coverage and multiple contact channels.",
  },
  {
    title: "Commitment",
    body: "Reliable delivery with consistent quality and adherence to agreed deadlines.",
  },
];

export default function T3C3Section() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 text-center sm:px-8 lg:px-[146px] lg:pt-24">
      <h2 className="bg-gradient-to-r from-[#3a9b4b] to-[#01b444] bg-clip-text font-poppins text-2xl font-semibold text-transparent sm:text-3xl lg:text-5xl">
        T3 &amp; C3 Framework of Our Company
      </h2>
      <button className="mt-6 rounded-full bg-gradient-to-r from-[#3a9b4b] to-[#01b444] px-8 py-3 font-poppins text-sm font-medium text-white">
        Book a Discovery Call
      </button>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:mt-16">
        <div className="rounded-2xl bg-[#f2f2f2] p-6 sm:p-10">
          <h3 className="bg-gradient-to-r from-[#3a9b4b] to-[#01b444] bg-clip-text font-poppins text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            T3 Policy
          </h3>
          <div className="mt-8 flex flex-col gap-6">
            {t3.map((item) => (
              <div key={item.title}>
                <p className="font-poppins text-base font-semibold text-black">
                  {item.title}
                </p>
                <p className="mt-1 font-poppins text-base text-black">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#f2f2f2] p-6 sm:p-10">
          <h3 className="bg-gradient-to-r from-[#3a9b4b] to-[#01b444] bg-clip-text font-poppins text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            C3 Policy
          </h3>
          <div className="mt-8 flex flex-col gap-6">
            {c3.map((item) => (
              <div key={item.title}>
                <p className="font-poppins text-base font-semibold text-black">
                  {item.title}
                </p>
                <p className="mt-1 font-poppins text-base text-black">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
