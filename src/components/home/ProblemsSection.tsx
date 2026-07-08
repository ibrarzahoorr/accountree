import Image from "next/image";

export default function ProblemsSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 lg:px-0 lg:pt-[115px]">
      <div className="flex items-start justify-center gap-3 lg:justify-start lg:pl-[670px]">
        <h2 className="font-poppins text-[28px] font-semibold leading-[40px] tracking-[-0.36px] text-[#3a9b4b] lg:text-[36px] lg:leading-[60px]">
          Relatable
        </h2>
        <Image
          src="/icons/home/relatable-swap-icon.svg"
          alt=""
          width={53}
          height={49}
          className="mt-2 h-9 w-9 lg:mt-3 lg:h-[49px] lg:w-[53px]"
        />
      </div>

      <h3 className="mx-auto mt-4 max-w-[739px] text-center font-poppins text-xl font-semibold leading-7 tracking-[-0.24px] text-black lg:text-2xl lg:leading-8">
        As an owner of an accountancy firm in UK does any of these problems
        sounds familiar?
      </h3>

      <div className="mt-10 flex flex-col gap-3 lg:mt-[97px] lg:pl-[147px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[11px]">
          <div className="relative w-full rounded-xl bg-[#efefef] px-6 py-5 lg:w-[670px] lg:px-[38px] lg:py-[18px]">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Hiring the right resource in UK
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[386px]">
              The competitive market makes it challenging for HR to attract
              top talent, and retaining that talent is even harder. Even if
              you manage to maintain your management its harder to maintain
              profitability
            </p>
          </div>
          <div className="relative w-full rounded-xl bg-[#efefef] px-6 py-5 lg:w-[529px] lg:px-[38px] lg:py-[18px]">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Losing new clients
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[430px]">
              A frequent reason for losing new clients at accounting firms is
              their failure to give adequate attention to newly acquired
              clients.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[11px]">
          <div className="relative w-full rounded-xl bg-[#efefef] px-6 py-5 lg:w-[486px] lg:px-[38px] lg:py-[18px]">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Growth vs workload
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[316px]">
              Growth requires your time and so does your workload. We are
              ready to take off your workload so you can focus entirely on
              your firm&rsquo;s growth
            </p>
          </div>
          <div className="relative w-full rounded-xl bg-[#efefef] px-6 py-5 lg:w-[713px] lg:px-[38px] lg:py-[18px]">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Profitability &amp; Margins
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[479px]">
              We are more than often offering charges to our clients which
              are not entirely profitable just to maintain relationships. We
              understand the economics of the business and our understanding
              is that we make profit when you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
