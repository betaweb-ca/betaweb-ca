import { motion } from 'motion/react';
import { process } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />
        <div className="mt-12 sm:mt-16 relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
          />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 list-none m-0 p-0">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/10 grid place-items-center relative z-10 shadow-sm">
                  <span className="font-semibold text-[#4F7CFF] text-[13px]">{step.n}</span>
                </div>
                <h3 className="mt-6">{step.title}</h3>
                <p className="mt-2 text-[14px] text-[#52525B] leading-relaxed">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
