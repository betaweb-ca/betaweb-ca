import { useEffect, useState } from 'react';
import { nav, site } from '../data/siteContent.js';
import Logo from './Logo.jsx';
import { getIcon } from './iconMap.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const MenuIcon = getIcon('menu');
  const CloseIcon = getIcon('x');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="shrink-0" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#0A0A0A]/70" aria-label="Main">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0A0A0A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full bg-[#0A0A0A] text-white text-[13px] font-medium hover:bg-[#0A0A0A]/90 transition-colors"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-full border border-black/10 grid place-items-center text-[#0A0A0A]"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen && CloseIcon ? (
              <CloseIcon className="w-5 h-5" />
            ) : MenuIcon ? (
              <MenuIcon className="w-5 h-5" />
            ) : null}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-[16px] font-medium text-[#0A0A0A] border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center h-11 rounded-full bg-[#0A0A0A] text-white text-[14px] font-medium"
            >
              {nav.cta}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={closeMenu}
              className="py-2 text-center text-[14px] text-[#71717A]"
            >
              {site.email}
            </a>
            <a
              href={`tel:+1${site.phone}`}
              onClick={closeMenu}
              className="py-2 text-center text-[14px] text-[#71717A]"
            >
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
