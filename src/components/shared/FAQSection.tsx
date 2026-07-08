"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the payment method and procedure?",
    a: "The payment procedure is simple and customized according to your firm's preferred billing cycle, whether monthly or per-project.",
  },
  {
    q: "What will be the workflow to deliver the tasks assigned?",
    a: "The payment procedure is simple and customized according to your firm's preferred billing cycle, whether monthly or per-project.",
  },
  {
    q: "Does accountree has an office in UK?",
    a: "Accountree boasts a diverse network of offices across the UK, ensuring local support alongside our global delivery model.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-20 sm:px-8 lg:px-[146px] lg:pt-40">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-outfit text-xl font-semibold text-black sm:text-2xl">
            Have some questions? Ask away..
          </h2>
          <h3 className="mt-6 font-poppins text-2xl font-semibold text-black sm:text-3xl lg:mt-10 lg:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 font-poppins text-sm leading-[22px] text-[#676767]">
            Here are some common questions that many users have. If you
            don&rsquo;t see the answer you&rsquo;re looking for, don&rsquo;t
            hesitate to reach out and ask your question below. We&rsquo;re
            here to help!
          </p>

          <form className="mt-8">
            <div className="relative rounded-2xl border border-[#e5e5e5] p-4">
              <input
                placeholder="Type your question here.."
                className="w-full font-poppins text-sm text-black placeholder:text-[#b9b9b9] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 rounded-full bg-[#3a9b4b] px-6 py-2 font-poppins text-sm font-medium text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col divide-y divide-[#e5e5e5]">
          {faqs.map((f, i) => (
            <div key={f.q} className="py-5">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between text-left font-poppins text-base font-semibold text-[#676767]"
              >
                {f.q}
                <span className="ml-4 text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="mt-3 font-poppins text-sm leading-[22px] text-[#676767]">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
