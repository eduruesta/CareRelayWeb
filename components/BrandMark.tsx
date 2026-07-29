/**
 * The CareRelay "relay circle" mark: two arcs — caregivers handing off
 * care — around a central dot, the person being cared for. Same geometry
 * and colors as the in-app brand mark (CareRelayBrandMark.kt).
 */
export default function BrandMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" className={className} aria-hidden="true">
      <path
        d="M372 310.1 A128 128 0 0 1 140 310.1"
        stroke="#2A7F78"
        strokeWidth="44"
        strokeLinecap="round"
      />
      <path
        d="M140 201.9 A128 128 0 0 1 372 201.9"
        stroke="#203A43"
        strokeWidth="44"
        strokeLinecap="round"
      />
      <circle cx="384" cy="256" r="33" fill="#D66A5E" />
    </svg>
  );
}
