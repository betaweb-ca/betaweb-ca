import { motion } from 'motion/react';
import { whyUs } from '../data/siteContent.js';
import { getIcon } from './iconMap.js';

export default function WhyUs() {
  const Check = getIcon('check');

  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 50% at 80% 20%, rgba(79,124,255,0.3) 0%, rgba(79,124,255,0) 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[12px] text-white/70 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
              {whyUs.eyebrow}
            </div>
            <h2 className="text-white">
              {whyUs.title}
              <br />
              <span className="text-white/50">{whyUs.titleAccent}</span>
            </h2>
            <p className="mt-5 text-[15px] sm:text-[17px] text-white/60 leading-relaxed max-w-md">
              {whyUs.subtitle}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center h-11 px-5 rounded-full bg-white text-[#0A0A0A] hover:bg-white/90 transition-colors text-[14px] font-medium"
            >
              {whyUs.cta}
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyUs.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#4F7CFF]/15 grid place-items-center">
                  {Check && <Check className="w-3.5 h-3.5 text-[#4F7CFF]" strokeWidth={3} />}
                </div>
                <div className="mt-4 text-white font-medium">{point.title}</div>
                <div className="mt-1 text-[13px] text-white/55 leading-relaxed">{point.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
