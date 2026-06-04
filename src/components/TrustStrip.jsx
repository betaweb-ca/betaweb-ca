import { motion } from 'motion/react';
import { trust } from '../data/siteContent.js';
import { getIcon } from './iconMap.js';

export default function TrustStrip() {
  return (
    <section className="py-16 sm:py-20 border-y border-black/5 bg-[#FAFAFA]" aria-label="Trust and benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[11px] sm:text-[12px] tracking-[0.15em] uppercase text-[#A1A1AA] font-medium">
          {trust.eyebrow}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3 text-[#0A0A0A]/40">
          {trust.brands.map((brand) => (
            <span
              key={brand}
              className="font-semibold tracking-tight text-base sm:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {trust.stats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl bg-white border border-black/5 p-4 sm:p-5"
              >
                {Icon && <Icon className="w-4 h-4 text-[#4F7CFF]" />}
                <div className="mt-3 font-semibold text-sm sm:text-base">{stat.value}</div>
                <div className="text-[12px] sm:text-[13px] text-[#71717A] mt-0.5">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
