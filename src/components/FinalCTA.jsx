import { motion } from 'motion/react';
import { finalCta, site } from '../data/siteContent.js';
import { getIcon } from './iconMap.js';

export default function FinalCTA() {
  const ArrowRight = getIcon('arrowRight');

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#0A0A0A] text-white overflow-hidden px-6 sm:px-8 py-16 sm:py-24 text-center"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(60% 80% at 50% 0%, rgba(79,124,255,0.35) 0%, rgba(79,124,255,0) 70%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
          />
          <div className="relative">
            <h2 className="text-white max-w-2xl mx-auto">{finalCta.title}</h2>
            <p className="mt-5 max-w-lg mx-auto text-white/65 text-[15px] sm:text-[17px] px-2">
              {finalCta.subtitle}
            </p>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-2 sm:px-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 h-12 px-6 rounded-full bg-white text-[#0A0A0A] hover:bg-white/90 transition-all hover:scale-[1.02] text-[14px] font-medium"
              >
                {finalCta.primaryCta}
                {ArrowRight && <ArrowRight className="w-4 h-4" />}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors text-[14px] font-medium break-all sm:break-normal"
              >
                {finalCta.secondaryCta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
