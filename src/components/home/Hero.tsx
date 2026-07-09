"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/layout/Header";

// ---------------------------------------------------------------------------
// Video / slide data – add more entries here to show more slides
// ---------------------------------------------------------------------------
const slides = [
  {
    thumb: "/images/home/hero-video-thumb.png",
    label: "Learn accountree model",
    videoUrl: "", // add real URL when ready e.g. "https://www.youtube.com/embed/xxx"
  },
  {
    thumb: "/images/home/partner-photo-3-opt.jpg",
    label: "Meet our partner firms",
    videoUrl: "",
  },
  {
    thumb: "/images/home/understanding-photo-1-opt.jpg",
    label: "How outsourcing works",
    videoUrl: "",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const total = slides.length;
  const prev = () => { setPlaying(false); setCurrent((c) => (c - 1 + total) % total); };
  const next = () => { setPlaying(false); setCurrent((c) => (c + 1) % total); };

  const slide = slides[current];

  return (
    <section className="relative w-full">
      {/* ------------------------------------------------------------------ */}
      {/* Mobile / tablet layout                                              */}
      {/* ------------------------------------------------------------------ */}
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

        {/* Mobile video card */}
        <div className="relative mx-4 -mt-10 overflow-hidden rounded-xl sm:h-[320px]">
          <div className="relative h-[220px] w-full overflow-hidden rounded-xl sm:h-[320px]">
            {playing && slide.videoUrl ? (
              <iframe
                src={slide.videoUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src={slide.thumb}
                  alt={slide.label}
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
                  onClick={() => setPlaying(true)}
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  <Image src="/icons/play-circle.svg" alt="" fill />
                </button>
              </>
            )}
          </div>

          {/* Mobile nav dots */}
          {total > 1 && (
            <div className="mt-3 flex items-center justify-between px-2">
              <span className="font-poppins text-sm font-medium text-[#4c4c4c]">{slide.label}</span>
              <div className="flex items-center gap-3">
                <button onClick={prev} aria-label="Previous" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3a9b4b] text-[#3a9b4b] hover:bg-[#3a9b4b] hover:text-white transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M8 1L3 6l5 5"/></svg>
                </button>
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => { setPlaying(false); setCurrent(i); }} aria-label={`Slide ${i+1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-[#3a9b4b]" : "w-2 bg-gray-300"}`}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3a9b4b] text-[#3a9b4b] hover:bg-[#3a9b4b] hover:text-white transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M4 1l5 5-5 5"/></svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="h-10" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Desktop layout                                                      */}
      {/* ------------------------------------------------------------------ */}
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
              background: "linear-gradient(160deg, #94d09f 0%, #3fbc6d 100%)",
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

          {/* Video thumbnail / carousel */}
          <div
            className="absolute left-1/2 top-[460px] h-[456px] w-[1098px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded-[18px]"
            style={{ boxShadow: "9.15px -10.98px 58.56px rgba(0,0,0,0.17)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              {playing && slide.videoUrl ? (
                <iframe
                  src={slide.videoUrl + "?autoplay=1"}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={slide.thumb}
                    alt={slide.label}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1098px"
                    className="object-cover transition-opacity duration-500"
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
                    onClick={() => setPlaying(true)}
                    className="absolute left-1/2 top-1/2 h-[111px] w-[111px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 hover:brightness-110 active:scale-95 cursor-pointer"
                  >
                    <Image src="/icons/play-circle.svg" alt="Play Video" fill />
                  </button>
                </>
              )}

              {/* Bottom bar */}
              <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-between px-9">
                <span className="font-poppins text-base font-medium tracking-[-0.16px] text-white">
                  {slide.label}
                </span>

                {/* Prev / Progress / Next */}
                <div className="flex items-center gap-3">
                  {total > 1 && (
                    <button
                      onClick={prev}
                      aria-label="Previous video"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/35 transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                  )}

                  {/* Dot indicators */}
                  {total > 1 && (
                    <div className="flex items-center gap-1.5">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setPlaying(false); setCurrent(i); }}
                          aria-label={`Go to slide ${i + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/40"}`}
                        />
                      ))}
                    </div>
                  )}

                  {total > 1 && (
                    <button
                      onClick={next}
                      aria-label="Next video"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/35 transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>

                {/* Volume & Maximize */}
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
