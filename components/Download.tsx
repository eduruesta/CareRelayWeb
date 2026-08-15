import { APP_STORE_URL } from "@/lib/storeLinks";

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/15 transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 shrink-0">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-xs text-white/60">Download on the</span>
        <span className="block text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <button
      type="button"
      disabled
      title="Coming soon"
      aria-disabled="true"
      className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-xl cursor-not-allowed select-none opacity-60"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 shrink-0">
        <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.28 0 .55.08.79.22l13.56 7.78c.69.4.69 1.39 0 1.79L5.29 19.28c-.24.14-.51.22-.79.22-.83 0-1.5-.67-1.5-1.5z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-xs text-white/60">Get it on</span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </button>
  );
}

export default function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-brand-night">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Download Family Care Relay
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Available now on the App Store for iPhone. Android is coming soon.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>
      </div>
    </section>
  );
}
