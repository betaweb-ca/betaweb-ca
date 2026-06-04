import { footer, site } from '../data/siteContent.js';
import Logo from './Logo.jsx';
import { getIcon } from './iconMap.js';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-[14px] text-[#71717A] leading-relaxed">
            {footer.tagline}
          </p>
          <div className="mt-5 flex items-center gap-2">
            {footer.social.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-black/10 grid place-items-center text-[#52525B] hover:text-[#0A0A0A] hover:border-black/30 transition-colors"
                  aria-label={social.label}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
          </div>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title}>
            <div className="text-[12px] tracking-[0.15em] uppercase text-[#A1A1AA] font-medium">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#52525B] hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-[#A1A1AA] text-center md:text-left">
          <div>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
            <span>{footer.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
