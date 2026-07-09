import Image from "next/image";
import BenefitsPills from "@/components/shared/BenefitsPills";

export default function TrustSection() {
  return (
    <section className="mx-auto w-full max-w-[1512px] px-6 pt-16 sm:px-8 lg:px-[146px] lg:pt-[161px]">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex">
          {["1", "2", "3", "4"].map((n, i) => (
            <div
              key={n}
              className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
              style={{ marginLeft: i === 0 ? 0 : -14 }}
            >
              <Image
                src={`/images/home/ellipse-${19 + i}-${
                  ["21a540e4", "0c166c08", "746ec393", "f164ae81"][i]
                }.png`}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div>
          <p className="font-poppins text-2xl font-semibold text-black">1986</p>
          <p className="font-poppins text-lg text-black">Client Satisfied</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <BenefitsPills />
        </div>
        <div className="flex w-full gap-4 sm:w-[290px] sm:shrink-0 sm:flex-col">
          <div className="relative h-[160px] w-1/2 overflow-hidden rounded-2xl sm:h-[175px] sm:w-[263px]">
            <Image
              src="/images/services/rectangle-6031-b2f01185.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[160px] w-1/2 overflow-hidden rounded-2xl sm:h-[199px] sm:w-[290px]">
            <Image
              src="/images/services/handshake-opt.jpg"
              unoptimized
              alt="Successful partnership agreement"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
