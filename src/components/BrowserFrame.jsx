import { site } from '../data/siteContent.js';

export default function BrowserFrame({ url = site.domain, children, className = '' }) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-black/10 bg-white shadow-[0_30px_80px_-20px_rgba(10,10,10,0.25)] ${className}`}
    >
      <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-black/5 bg-[#FAFAFA]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] shrink-0" />
        <div className="ml-2 sm:ml-4 flex-1 min-w-0 max-w-sm">
          <div className="px-3 py-1 rounded-md bg-white border border-black/5 text-[11px] text-[#A1A1AA] truncate">
            {url}
          </div>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
