import { motion } from 'motion/react';
import { portfolio } from '../data/siteContent.js';
import BrowserFrame from './BrowserFrame.jsx';
import SectionHeading from './SectionHeading.jsx';

function DemoMockup({ demo }) {
  const { palette, name, tagline, category } = demo;
  const isDark =
    palette.bg !== '#FFFFFF' && palette.bg !== '#FAFAF7' && palette.bg !== '#F4F8FC';
  const fgSoft = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(10,10,10,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(10,10,10,0.06)';

  return (
    <div
      style={{ background: palette.bg, color: palette.fg }}
      className="aspect-[16/10] relative overflow-hidden min-h-[180px]"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5">
        <div style={{ fontWeight: 600, fontSize: 11, letterSpacing: '-0.01em' }}>{name}</div>
        <div className="flex gap-3 sm:gap-4 text-[9px]" style={{ color: fgSoft }}>
          <span>Menu</span>
          <span>About</span>
          <span>Book</span>
        </div>
      </div>
      <div className="px-4 sm:px-6 mt-4 sm:mt-6">
        <div
          style={{
            background: `${palette.accent}22`,
            color: palette.accent,
            fontSize: 8,
            fontWeight: 500,
          }}
          className="inline-block px-1.5 py-0.5 rounded-full"
        >
          • {category}
        </div>
        <div
          className="mt-2.5"
          style={{
            fontSize: 'clamp(16px, 4vw, 22px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {tagline}
        </div>
        <div className="mt-2 space-y-1" style={{ opacity: 0.55 }}>
          <div className="h-1 rounded w-3/5" style={{ background: palette.fg }} />
          <div className="h-1 rounded w-2/5" style={{ background: palette.fg }} />
        </div>
        <div className="mt-3 flex gap-1.5">
          <div
            className="h-5 w-16 rounded-full grid place-items-center"
            style={{
              background: palette.accent,
              color: palette.bg,
              fontSize: 8,
              fontWeight: 600,
            }}
          >
            Book now
          </div>
          <div className="h-5 w-16 rounded-full border" style={{ borderColor: border }} />
        </div>
      </div>
      <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-md p-2"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(10,10,10,0.04)',
            }}
          >
            <div className="h-1 w-1/2 rounded" style={{ background: palette.accent }} />
            <div
              className="h-0.5 w-full rounded mt-1.5"
              style={{ background: palette.fg, opacity: 0.3 }}
            />
            <div
              className="h-0.5 w-2/3 rounded mt-1"
              style={{ background: palette.fg, opacity: 0.2 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          subtitle={portfolio.subtitle}
        />
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {portfolio.demos.map((demo, i) => (
            <motion.div
              key={demo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <BrowserFrame
                url={demo.url}
                className="hover:-translate-y-1 transition-transform duration-500"
              >
                <DemoMockup demo={demo} />
              </BrowserFrame>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-1">
                <div>
                  <div className="text-[12px] tracking-[0.15em] uppercase text-[#A1A1AA] font-medium">
                    {demo.category}
                  </div>
                  <div className="mt-1 font-semibold">{demo.name}</div>
                </div>
                <div className="text-[13px] text-[#71717A]">{demo.url}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
