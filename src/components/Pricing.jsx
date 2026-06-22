import { motion } from 'motion/react';
import { pricing } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';
import { getIcon } from './iconMap.js';

function FeatureList({ features, highlighted = false }) {
  const Check = getIcon('check');

  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-[14px]">
          {Check && (
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${highlighted ? 'text-[#4F7CFF]' : 'text-[#0A0A0A]'}`}
              strokeWidth={2.5}
            />
          )}
          <span className={highlighted ? 'text-white/85' : 'text-[#27272A]'}>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingCard({ tier, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
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
      <div className={tier.highlighted ? 'text-white/60 text-[13px]' : 'text-[#71717A] text-[13px]'}>
        {tier.name}
      </div>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="text-[36px] sm:text-[44px] font-bold tracking-tight leading-none">
          {tier.price}
        </span>
        {tier.priceNote && (
          <span
            className={
              tier.highlighted ? 'text-white/50 text-[13px]' : 'text-[#A1A1AA] text-[13px]'
            }
          >
            {tier.priceNote}
          </span>
        )}
      </div>
      <div
        className={`mt-3 text-[14px] ${tier.highlighted ? 'text-white/60' : 'text-[#52525B]'}`}
      >
        {tier.desc}
      </div>
      <div className="mt-7 flex-1">
        <FeatureList features={tier.features} highlighted={tier.highlighted} />
      </div>
      {tier.perfectFor && (
        <p
          className={`mt-6 text-[13px] leading-relaxed border-t pt-5 ${
            tier.highlighted
              ? 'text-white/50 border-white/10'
              : 'text-[#71717A] border-black/5'
          }`}
        >
          {tier.perfectFor}
        </p>
      )}
      <a
        href="#contact"
        className={`mt-6 inline-flex items-center justify-center w-full h-11 px-5 rounded-full transition-colors text-[14px] font-medium ${
          tier.highlighted
            ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
            : 'bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90'
        }`}
      >
        {tier.cta}
      </a>
    </motion.article>
  );
}

function AddonCard({ plan, index, variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
        isDark
          ? 'bg-[#0A0A0A] text-white border border-white/10'
          : 'bg-[#FAFAFA] border border-black/5'
      }`}
    >
      <div className={isDark ? 'text-white/60 text-[13px]' : 'text-[#71717A] text-[13px]'}>
        {plan.name}
      </div>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="text-[32px] sm:text-[40px] font-bold tracking-tight leading-none">
          {plan.price}
        </span>
        {plan.priceNote && (
          <span className={isDark ? 'text-white/50 text-[13px]' : 'text-[#A1A1AA] text-[13px]'}>
            {plan.priceNote}
          </span>
        )}
        {plan.upfrontNote && (
          <span className="ml-auto px-2.5 py-1 rounded-full bg-[#4F7CFF]/15 text-[#4F7CFF] text-[11px] font-medium">
            {plan.upfrontNote}
          </span>
        )}
      </div>
      {(plan.subtitle || plan.desc) && (
        <p
          className={`mt-3 text-[14px] ${isDark ? 'text-white/60' : 'text-[#52525B]'}`}
        >
          {plan.subtitle || plan.desc}
        </p>
      )}
      <div className="mt-6 flex-1">
        <FeatureList features={plan.features} highlighted={isDark} />
      </div>
      <a
        href="#contact"
        className={`mt-6 inline-flex items-center justify-center w-full h-11 px-5 rounded-full transition-colors text-[14px] font-medium ${
          isDark
            ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
            : 'bg-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90'
        }`}
      >
        {plan.cta}
      </a>
    </motion.article>
  );
}

export default function Pricing() {
  const { trustLine, noUpfrontBanner, tiers, monthlyCare, noUpfrontPlan } = pricing;
  const ArrowRight = getIcon('arrowRight');

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 text-center text-[15px] sm:text-[16px] font-medium text-[#0A0A0A]"
        >
          {trustLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-6 relative rounded-2xl bg-[#0A0A0A] text-white overflow-hidden p-6 sm:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(60% 80% at 100% 0%, rgba(79,124,255,0.35) 0%, rgba(79,124,255,0) 70%)',
            }}
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[12px] text-white/70 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                {noUpfrontBanner.eyebrow}
              </div>
              <h3 className="text-white text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight">
                {noUpfrontBanner.title}
              </h3>
              <p className="mt-2 text-white/65 text-[15px] sm:text-[16px]">
                {noUpfrontBanner.subtitle}
              </p>
              <p className="mt-1 text-[#4F7CFF] text-[14px] font-medium">
                {noUpfrontBanner.tagline}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-6 rounded-full bg-white text-[#0A0A0A] hover:bg-white/90 transition-colors text-[14px] font-medium shrink-0"
            >
              {noUpfrontBanner.cta}
              {ArrowRight && <ArrowRight className="w-4 h-4" />}
            </a>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AddonCard plan={monthlyCare} index={0} variant="light" />
          <AddonCard plan={noUpfrontPlan} index={1} variant="dark" />
        </div>
      </div>
    </section>
  );
}
