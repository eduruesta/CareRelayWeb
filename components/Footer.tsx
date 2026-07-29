import Link from "next/link";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-mist/60 py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <BrandMark className="w-7 h-7" />
            <span className="text-lg font-semibold text-brand-night">
              CareRelay
            </span>
          </div>
          <p className="text-brand-slate text-sm max-w-xs">
            Know what happened, what&apos;s next, and who&apos;s in charge.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-night mb-3">
            Links
          </h3>
          <ul className="space-y-2 text-sm text-brand-slate">
            <li>
              <a href="#about" className="hover:text-brand-night transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-brand-night transition-colors">
                What we offer
              </a>
            </li>
            <li>
              <a href="#download" className="hover:text-brand-night transition-colors">
                Download
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-night mb-3">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-brand-slate">
            <li>
              <Link href="/privacy" className="hover:text-brand-night transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-night transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-brand-mist/60 mt-10 pt-6 text-center">
        <p className="text-brand-slate/70 text-sm">
          © {new Date().getFullYear()} CareRelay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
