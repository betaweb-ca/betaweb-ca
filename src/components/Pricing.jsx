import { motion } from 'motion/react';
import { pricing } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';
import { getIcon } from './iconMap.js';

export default function Pricing() {
  const Check = getIcon('check');

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {pricing.tiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                tier.highlighted
                  ? 'bg-[#0A0A0A] text-white ring-1 ring-[#4F7CFF]/40 shadow-[0_30px_80px_-20px_rgba(79,124,255,0.4)] md:-translate-y-3'
                  : 'bg-white border border-black/5'
              }`}
            >
              {tier.highlighted && tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#4F7CFF] text-white text-[11px] font-medium whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              <div
                className={
                  tier.highlighted ? 'text-white/60 text-[13px]' : 'text-[#71717A] text-[13px]'
                }
              >
                {tier.name}
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-2">
                <span
                  className="text-[36px] sm:text-[44px] font-bold tracking-tight leading-none"
                >
                  {tier.price}
                </span>
                <span
                  className={
                    tier.highlighted ? 'text-white/50 text-[13px]' : 'text-[#A1A1AA] text-[13px]'
                  }
                >
                  {tier.priceNote}
                </span>
              </div>
              <div
                className={`mt-3 text-[14px] ${tier.highlighted ? 'text-white/60' : 'text-[#52525B]'}`}
              >
                {tier.desc}
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[14px]">
                    {Check && (
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-[#4F7CFF]' : 'text-[#0A0A0A]'}`}
                        strokeWidth={2.5}
                      />
                    )}
                    <span className={tier.highlighted ? 'text-white/85' : 'text-[#27272A]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center w-full h-11 px-5 rounded-full transition-colors text-[14px] font-medium ${
                  tier.highlighted
                    ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
                    : 'bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90'
                }`}
              >
                {tier.cta}
              </a>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 sm:mt-10 text-center text-[13px] text-[#71717A] px-4">
          {pricing.footnote}{' '}
          <span className="text-[#0A0A0A] font-medium">{pricing.footnotePrice}</span>.
        </p>
      </div>
    </section>
  );
}
