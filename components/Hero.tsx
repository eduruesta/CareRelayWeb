import BrandMark from "./BrandMark";
import { APP_STORE_URL } from "@/lib/storeLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#203A43] via-[#17252A] to-[#0d1417]" />

      <div className="absolute top-24 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2A7F78]/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-brand-mint text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#D66A5E] animate-pulse" />
            Family caregiving, coordinated
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Everyone in the family,{" "}
            <span className="text-[#7FD1C5]">on the same page</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            CareRelay replaces the family group chat, sticky notes, and phone
            tag with one shared timeline, care plan, and handoff summary — so
            everyone always knows what happened, what&apos;s next, and
            who&apos;s in charge.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-night font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all"
            >
              Download on the App Store
            </a>
            <a
              href="#features"
              className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              See what it does →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-white shadow-2xl flex items-center justify-center">
            <div className="absolute inset-6 rounded-full border border-brand-mist/60" />
            <BrandMark className="w-40 h-40 md:w-48 md:h-48" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
