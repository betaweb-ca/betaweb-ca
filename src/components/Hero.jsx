import { motion } from 'motion/react';
import { hero } from '../data/siteContent.js';
import BrowserFrame from './BrowserFrame.jsx';
import { getIcon } from './iconMap.js';

function MockupDashboard() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-8">
        <div className="col-span-12 md:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4F7CFF]/10 text-[10px] text-[#4F7CFF] font-medium">
            <span className="w-1 h-1 rounded-full bg-[#4F7CFF]" />
            {hero.mockupBadge}
          </div>
          <div className="space-y-2">
            <div className="h-6 sm:h-8 w-4/5 rounded-md bg-[#0A0A0A]" />
            <div className="h-6 sm:h-8 w-3/5 rounded-md bg-[#0A0A0A]/80" />
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="h-2 rounded bg-black/10 w-full" />
            <div className="h-2 rounded bg-black/10 w-11/12" />
            <div className="h-2 rounded bg-black/10 w-9/12" />
          </div>
          <div className="flex flex-wrap gap-2 pt-3">
            <div className="h-8 w-28 rounded-full bg-[#0A0A0A]" />
            <div className="h-8 w-28 rounded-full border border-black/15" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0A0A0A] to-[#27272A] relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(80% 60% at 30% 20%, rgba(79,124,255,0.35), transparent 60%)',
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
              <div className="h-2 w-2/3 rounded bg-white/80" />
              <div className="h-2 w-1/3 rounded bg-white/40" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-4 sm:px-8 pb-6 sm:pb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-black/5 bg-[#FAFAFA] p-4 space-y-2">
            <div className="h-1.5 w-1/2 rounded bg-black/15" />
            <div className="h-5 w-2/3 rounded bg-[#0A0A0A]" />
            <div className="h-1.5 w-full rounded bg-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ArrowRight = getIcon('arrowRight');
  const Play = getIcon('play');

  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-24 h-[600px] -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 40%, rgba(79,124,255,0.18) 0%, rgba(79,124,255,0.06) 35%, rgba(79,124,255,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 backdrop-blur text-[12px] text-[#0A0A0A]/70 mb-6 sm:mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
          {hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl mx-auto"
        >
          {hero.title}
          <br />
          <span className="text-[#A1A1AA]">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 sm:mt-6 max-w-xl mx-auto text-[15px] sm:text-[17px] text-[#52525B] leading-relaxed px-2"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-2 sm:px-0"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 h-12 px-6 rounded-full bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 transition-all hover:scale-[1.02] text-[14px] font-medium"
          >
            {hero.primaryCta}
            {ArrowRight && <ArrowRight className="w-4 h-4" />}
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-1.5 h-12 px-6 rounded-full bg-white border border-black/10 text-[#0A0A0A] hover:border-black/30 transition-colors text-[14px] font-medium"
          >
            {Play && <Play className="w-3.5 h-3.5 fill-current" />}
            {hero.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative mt-12 sm:mt-20 mx-auto max-w-5xl"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-x-4 sm:-inset-x-10 -inset-y-6 -z-10 rounded-[40px] pointer-events-none"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 50%, rgba(79,124,255,0.25) 0%, rgba(79,124,255,0) 70%)',
            }}
          />
          <BrowserFrame url={hero.browserUrl}>
            <MockupDashboard />
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
