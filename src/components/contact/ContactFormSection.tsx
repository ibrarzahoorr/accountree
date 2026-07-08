"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 py-16 sm:px-8 lg:px-[146px] lg:py-20">
      <div className="mx-auto max-w-[720px] rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-10">
        {!submitted ? (
          <>
            <h2 className="font-poppins text-2xl font-semibold text-[#101828] sm:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 font-poppins text-base text-[#4c4c4c]">
              Fill out the form below and our team will get back to you
              within one business day.
            </p>

            <form
              className="mt-8 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  placeholder="First Name"
                  className="h-[49px] rounded-[11px] border border-[#beaaaa] px-4 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b] sm:w-1/2"
                />
                <input
                  placeholder="Last Name"
                  className="h-[49px] rounded-[11px] border border-[#beaaaa] px-4 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b] sm:w-1/2"
                />
              </div>
              <input
                placeholder="Email"
                type="email"
                className="h-[49px] rounded-[11px] border border-[#beaaaa] px-4 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b]"
              />
              <input
                placeholder="Phone number"
                className="h-[49px] rounded-[11px] border border-[#beaaaa] px-4 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b]"
              />
              <input
                placeholder="Company name"
                className="h-[49px] rounded-[11px] border border-[#beaaaa] px-4 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b]"
              />
              <textarea
                placeholder="Enquiry message"
                className="h-[120px] resize-none rounded-[11px] border border-[#beaaaa] px-4 py-3 font-poppins text-base placeholder:text-black focus:outline-none focus:border-[#3a9b4b]"
              />
              <button
                type="submit"
                className="mt-2 h-[49px] rounded-[11px] bg-[#00a63e] font-poppins text-base font-bold text-white"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <h2 className="font-poppins text-3xl font-semibold text-[#101828]">
              Thanks for reaching out!
            </h2>
            <p className="mt-2 max-w-[400px] font-poppins text-base text-[#4c4c4c]">
              We&rsquo;ve received your message and will be in touch shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
