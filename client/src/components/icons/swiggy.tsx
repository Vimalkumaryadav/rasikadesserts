import { siSwiggy } from "simple-icons";

export default function SwiggyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d={siSwiggy.path} />
    </svg>
  );
}
