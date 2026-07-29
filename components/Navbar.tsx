"use client";

import Link from "next/link";
import BrandMark from "./BrandMark";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-mist/60">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark className="w-8 h-8" />
          <span className="text-lg font-semibold text-brand-night">CareRelay</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-slate">
          <a href="#about" className="hover:text-brand-night transition-colors">
            About
          </a>
          <a href="#features" className="hover:text-brand-night transition-colors">
            What we offer
          </a>
          <a href="#download" className="hover:text-brand-night transition-colors">
            Download
          </a>
        </div>

        <button
          type="button"
          disabled
          title="Coming soon"
          aria-disabled="true"
          className="bg-brand-mist/70 text-brand-slate font-semibold text-sm px-5 py-2.5 rounded-full cursor-not-allowed select-none"
        >
          Download — Coming soon
        </button>
      </nav>
    </header>
  );
}
