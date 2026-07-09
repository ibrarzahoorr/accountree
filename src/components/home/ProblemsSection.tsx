import Image from "next/image";

function UKMapIcon() {
  const dots = [
    [40, 4], [46, 10], [42, 16], [50, 18], [38, 24], [46, 28], [34, 30],
    [42, 34], [30, 36], [38, 40], [26, 42], [34, 46], [24, 50], [32, 52],
    [20, 54], [28, 58], [18, 62], [26, 64], [16, 68], [22, 70], [12, 72],
    [20, 76], [8, 78], [16, 80], [24, 82], [32, 78], [36, 82], [4, 84],
  ];
  return (
    <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="opacity-70">
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="#a3a3a3" />
      ))}
    </svg>
  );
}

function AvatarsAndChartIcon() {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex">
        {["ellipse-19-21a540e4", "ellipse-20-0c166c08", "ellipse-21-746ec393"].map(
          (src, i) => (
            <div
              key={src}
              className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#efefef]"
              style={{ marginLeft: i === 0 ? 0 : -12 }}
            >
              <Image src={`/images/home/${src}.png`} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          )
        )}
      </div>
      <svg width="90" height="32" viewBox="0 0 90 32" fill="none" className="opacity-70">
        <path
          d="M2 26 L16 14 L26 20 L38 6 L50 16 L62 4 L74 12 L88 2"
          stroke="#a3a3a3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function BarChartIcon() {
  const bars = [24, 34, 18, 30, 42];
  return (
    <svg width="72" height="50" viewBox="0 0 72 50" fill="none" className="opacity-70">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 16}
          y={50 - h}
          width="10"
          height={h}
          rx="2"
          fill="#a3a3a3"
        />
      ))}
    </svg>
  );
}

function CurrencyIcon() {
  return (
    <svg width="70" height="100" viewBox="0 0 70 100" fill="none" className="opacity-60">
      <text
        x="35"
        y="80"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="90"
        fontWeight="600"
        fill="#a3a3a3"
      >
        &#163;
      </text>
      <path
        d="M58 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"
        fill="#a3a3a3"
      />
    </svg>
  );
}

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

      <div className="mt-10 flex flex-col gap-3 lg:mt-[97px] lg:pl-[147px] lg:pr-[147px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[11px]">
          <div className="relative w-full lg:flex-[670] overflow-hidden rounded-xl bg-white border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.015)] px-6 py-5 lg:px-[38px] lg:py-[18px] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-[#3a9b4b]/20 hover:-translate-y-0.5">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Hiring the right resource in UK
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[386px]">
              The competitive market makes it challenging for HR to attract
              top talent, and retaining that talent is even harder. Even if
              you manage to maintain your management its harder to maintain
              profitability
            </p>
            <div className="absolute bottom-4 right-6 hidden lg:block">
              <UKMapIcon />
            </div>
          </div>
          <div className="relative w-full lg:flex-[529] overflow-hidden rounded-xl bg-white border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.015)] px-6 py-5 lg:px-[38px] lg:py-[18px] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-[#3a9b4b]/20 hover:-translate-y-0.5">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Losing new clients
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[430px]">
              A frequent reason for losing new clients at accounting firms is
              their failure to give adequate attention to newly acquired
              clients.
            </p>
            <div className="absolute bottom-4 right-6 hidden lg:block">
              <AvatarsAndChartIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[11px]">
          <div className="relative w-full lg:flex-[486] overflow-hidden rounded-xl bg-white border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.015)] px-6 py-5 lg:px-[38px] lg:py-[18px] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-[#3a9b4b]/20 hover:-translate-y-0.5">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Growth vs workload
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[316px]">
              Growth requires your time and so does your workload. We are
              ready to take off your workload so you can focus entirely on
              your firm&rsquo;s growth
            </p>
            <div className="absolute bottom-4 right-6 hidden lg:block">
              <BarChartIcon />
            </div>
          </div>
          <div className="relative w-full lg:flex-[713] overflow-hidden rounded-xl bg-white border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.015)] px-6 py-5 lg:px-[38px] lg:py-[18px] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-[#3a9b4b]/20 hover:-translate-y-0.5">
            <h4 className="font-poppins text-xl font-semibold leading-[30px] tracking-[-0.61px] text-[#3a9b4b] lg:text-2xl lg:leading-[43px]">
              Profitability &amp; Margins
            </h4>
            <p className="mt-2 font-poppins text-base font-medium leading-[19px] tracking-[-0.16px] text-[#4c4c4c] lg:w-[479px]">
              We are more than often offering charges to our clients which
              are not entirely profitable just to maintain relationships. We
              understand the economics of the business and our understanding
              is that we make profit when you do.
            </p>
            <div className="absolute bottom-2 right-8 hidden lg:block">
              <CurrencyIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
