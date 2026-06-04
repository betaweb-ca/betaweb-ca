import { site } from '../data/siteContent.js';

export default function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2 text-[#0A0A0A] ${className}`}>
      <span className="w-7 h-7 rounded-md bg-[#0A0A0A] grid place-items-center shrink-0">
        <span className="w-2.5 h-2.5 rounded-sm bg-[#4F7CFF]" />
      </span>
      <span className="font-semibold tracking-tight">{site.name}</span>
    </span>
  );
}
