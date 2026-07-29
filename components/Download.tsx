function StoreBadge({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <button
      type="button"
      disabled
      title="Coming soon"
      aria-disabled="true"
      className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-xl cursor-not-allowed select-none"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 shrink-0">
        <path d="M12 2a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 12.586V3a1 1 0 0 1 1-1z" />
        <path d="M5 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-xs text-white/60">{sublabel}</span>
        <span className="block text-base font-semibold">{label}</span>
      </span>
    </button>
  );
}

export default function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-brand-night">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Coming soon to iOS and Android
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          CareRelay is in development. The download buttons below will go
          live once the app ships — check back soon, or reach out if
          you&apos;d like to be one of the first families to try it.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <StoreBadge label="App Store" sublabel="Download on the" />
          <StoreBadge label="Google Play" sublabel="Get it on" />
        </div>
      </div>
    </section>
  );
}
