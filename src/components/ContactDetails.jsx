import { site } from '../data/siteContent.js';

export default function ContactDetails({ className = '', dark = false }) {
  const textClass = dark ? 'text-white/65' : 'text-[#52525B]';
  const linkClass = dark
    ? 'text-white hover:text-white/80 transition-colors'
    : 'text-[#0A0A0A] hover:text-[#4F7CFF] transition-colors';

  return (
    <div className={`space-y-2 text-[15px] ${textClass} ${className}`}>
      <p>
        <a href={`mailto:${site.email}`} className={linkClass}>
          {site.email}
        </a>
      </p>
      <p>
        <a href={`tel:+1${site.phone}`} className={linkClass}>
          {site.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
