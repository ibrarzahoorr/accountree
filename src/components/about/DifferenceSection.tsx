export default function DifferenceSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 text-center sm:px-8 lg:px-[146px] lg:pt-24">
      <h2 className="font-poppins text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
        Ready to experience the{" "}
        <span className="font-outfit text-[#3a9b4b]">Difference.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-[813px] font-poppins text-base leading-[25px] text-black">
        We have extensive experience working across diverse sectors,
        delivering tailored accounting solutions for each industry.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6 lg:mt-12">
        <button className="rounded-full bg-gradient-to-r from-[#3a9b4b] to-[#01b444] px-8 py-4 font-poppins text-base font-medium text-white">
          Start a free trial
        </button>
        <button className="rounded-full border border-[#3a9b4b] px-8 py-4 font-poppins text-base font-medium text-[#3a9b4b]">
          Book a Discovery Call
        </button>
      </div>
    </section>
  );
}
