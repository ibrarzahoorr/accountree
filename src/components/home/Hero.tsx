import Image from "next/image";
import Header from "@/components/layout/Header";

export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      {/* Mobile / tablet layout */}
      <div className="relative flex flex-col lg:hidden">
        <div className="relative h-[420px] w-full overflow-hidden">
          <Image
            src="/images/home/hero-tower-bridge.png"
            alt="London Tower Bridge"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #94d09f 0%, #3fbc6d 100%)",
              opacity: 0.55,
              mixBlendMode: "multiply",
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <Header />
          <h1 className="absolute inset-x-0 top-[110px] px-6 text-center font-poppins text-2xl font-semibold leading-[34px] tracking-[-0.36px] text-white">
            Elevate Your Accounting Practice with Expert Outsourcing
          </h1>
        </div>

        <div className="relative mx-4 -mt-10 h-[220px] overflow-hidden rounded-lg sm:h-[320px]">
          <Image
            src="/images/home/hero-video-thumb.png"
            alt="Learn the accountree model"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
            }}
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
          >
            <Image src="/icons/play-circle.svg" alt="" fill />
          </button>
          <span className="absolute bottom-4 left-4 font-poppins text-sm font-medium tracking-[-0.16px] text-white">
            Learn accountree model
          </span>
        </div>
        <div className="h-10" />
      </div>

      {/* Desktop layout (pixel-precise) */}
      <div className="relative hidden h-[916px] w-full lg:block">
        <div className="absolute inset-x-0 top-0 h-[847px] overflow-hidden">
          <Image
            src="/images/home/hero-tower-bridge.png"
            alt="London Tower Bridge"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />

          {/* Green duotone tint + darken */}
          <div
            className="absolute inset-x-0 top-0 h-[748px]"
            style={{
              background:
                "linear-gradient(160deg, #94d09f 0%, #3fbc6d 100%)",
              opacity: 0.55,
              mixBlendMode: "multiply",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[748px] bg-black/14" />

          {/* Top gradient for nav legibility */}
          <div
            className="absolute inset-x-0 top-0 h-[396px]"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-x-0 h-[392px] top-[455px]"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto h-full max-w-[1512px]">
          <Header />

          <h1 className="absolute left-1/2 top-[237px] w-[632px] -translate-x-1/2 text-center font-poppins text-[36px] font-semibold leading-[53px] tracking-[-0.36px] text-white">
            Elevate Your Accounting Practice with Expert Outsourcing
          </h1>

          {/* Video thumbnail */}
          <div
            className="absolute left-1/2 top-[460px] h-[456px] w-[1098px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded-[18px]"
            style={{ boxShadow: "9.15px -10.98px 58.56px rgba(0,0,0,0.17)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src="/images/home/hero-video-thumb.png"
                alt="Learn the accountree model"
                fill
                sizes="(max-width: 1200px) 100vw, 1098px"
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[175px]"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
                }}
              />

              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 h-[111px] w-[111px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 hover:brightness-110 active:scale-95 cursor-pointer"
              >
                <Image src="/icons/play-circle.svg" alt="Play Video" fill />
              </button>

              <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-between px-9">
                <span className="font-poppins text-base font-medium tracking-[-0.16px] text-white">
                  Learn accountree model
                </span>

                <div className="flex h-[24px] w-[135px] items-center gap-2">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="#d9d9d9" opacity="0.72" className="shrink-0 cursor-pointer hover:opacity-100 transition-opacity">
                    <path d="M13 0v12L4 6l9-6z" />
                    <rect x="0" width="2" height="12" />
                  </svg>
                  <div className="h-[10px] flex-1 rounded-full bg-[#d9d9d9]" />
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="#d9d9d9" className="shrink-0 cursor-pointer hover:opacity-100 transition-opacity">
                    <path d="M0 0v12l9-6-9-6z" />
                    <rect x="11" width="2" height="12" />
                  </svg>
                </div>

                <div className="flex items-center gap-5">
                  <div className="relative h-6 w-6 cursor-pointer hover:scale-110 transition-transform">
                    <Image src="/icons/volume.svg" alt="Volume" fill />
                  </div>
                  <div className="relative h-5 w-5 cursor-pointer hover:scale-110 transition-transform">
                    <Image src="/icons/maximize.svg" alt="Maximize" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
